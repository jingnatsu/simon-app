
const bcrypt = require('bcryptjs');
const validator = require('validator');
const User = require('../models/user');
const Post = require('../models/post');
const Category = require('../models/category');
const jwt = require('jsonwebtoken');
const post = require('../models/post');

module.exports = {
    createUser: async function({userInput}, req) {
        const { email, password, name } = userInput;
        const errors = [];
        if(!validator.isEmail(email)) {
            errors.push({ message: 'E-mail is invalid.'});
        }
        if(validator.isEmpty(password) || !validator.isLength(password, {min: 5})) {
            errors.push({message: 'Password too short!'})
        }
        if(errors.length > 0) {
            const error = new Error('Invalid input.');
            error.data = errors;
            error.code = 422;
            throw error;
        }
        const existingUser = await User.findOne({email: email});
        if(existingUser) {
            const error = new Error('User exists already!');
            throw error;
        }
        const hashedPw = await bcrypt.hash(password, 12);
        const user = new User({
            email: email,
            name: name,
            password: hashedPw
        })
        const createdUser = await user.save();
        const token = jwt.sign({
            userId: createdUser._id.toString(),
            email: createdUser.email
        }, 'secretKey', { expiresIn: '1h'});
        console.log(token)
        return {...createdUser._doc, _id: createdUser._id.toString(), token: token};
    },

    login: async function({email, password}) {
        const user = await User.findOne({email: email});
        if(!user) {
            const error = new Error('User not found');
            error.code = 401;
            throw error;
        }
        console.log(password)
        const isEqual = await bcrypt.compare(password, user.password);
        if(!isEqual) {
            const error = new Error('Password is incorrect');
            error.code = 401;
            throw error;
        }
        const token = jwt.sign({
            userId: user._id.toString(),
            email: user.email
        }, 'secretKey', { expiresIn: '1h'});

        
        return {token: token, userId: user._id.toString()}
    },

    createPost: async function({postInput}, req) {
        console.log(postInput)
        if(!req.isAuth) {
            const error = new Error('Not authenticated!');
            error.code = 401;
            throw error;
        }
        const errors = [];
        if(validator.isEmpty(postInput.title) || !validator.isLength(postInput.title, {min: 5})) {
            errors.push({ message: 'Title is invalid.'});
        }
        if(validator.isEmpty(postInput.content) || !validator.isLength(postInput.content, {min: 5})) {
            errors.push({ message: 'Content is invalid.'});
        }
        if(errors.length > 0) {
            const error = new Error('Invalid input.');
            error.data = errors;
            error.code = 422;
            throw error;
        }
        // if(!req.file) {
        //     const error = new Error('No image provided!');
        //     error.statusCode = 422;
        //     throw error;
        // }
        const {title, content, imageUrl} = postInput; 
        
        const user = await User.findById(req.userId);
        if(!user) {
            const error = new Error('Invalid user.');
            error.code = 401;
            throw error;
        }
        const post = new Post({
            title: title,
            content: content,
            imageUrl: imageUrl,
            creator: user
        });

        const createdPost = await post.save();
        user.posts.push(createdPost);
        await user.save();
        return {
            ...createdPost._doc,
            _id: createdPost._id.toString(),
            createdAt: createdPost.createdAt.toISOString(),
            updatedAt: createdPost.updatedAt.toISOString()
        }
    },
    createCategory: async function({categoryInput}, req) {
        console.log(categoryInput)
        if(!req.isAuth) {
            const error = new Error('Not authenticated!');
            error.code = 401;
            throw error;
        }
        const errors = [];
        if(validator.isEmpty(categoryInput.name) || !validator.isLength(categoryInput.name, {min: 5})) {
            errors.push({ message: 'Name is invalid.'});
        }
        if(validator.isEmpty(categoryInput.status)) {
            errors.push({ message: 'Status is invalid.'});
        }
        if(errors.length > 0) {
            const error = new Error('Invalid input.');
            error.data = errors;
            error.code = 422;
            throw error;
        }
        // if(!req.file) {
        //     const error = new Error('No image provided!');
        //     error.statusCode = 422;
        //     throw error;
        // }
        const { name, status } = categoryInput; 
        
        const user = await User.findById(req.userId);
        if(!user) {
            const error = new Error('Invalid user.');
            error.code = 401;
            throw error;
        }
        const category = new Category({
            name: name,
            status: status,
            creator: user
        });

        const createdCategory = await category.save();
        user.posts.push(createdCategory);
        await user.save();
        return {
            ...createdCategory._doc,
            _id: createdCategory._id.toString(),
            createdAt: createdCategory.createdAt.toISOString(),
            updatedAt: createdCategory.updatedAt.toISOString()
        }
    },

    posts: async function({page}, req) {
        if(!req.isAuth) {
            const error = new Error('Not authenticated!');
            error.code = 401;
            throw error;
        }
        if(!page) {
            page = 1;
        }
        const perPage = 2;
        const totalPosts = await Post.find().countDocuments();
        const posts = await Post.find()
        .sort({createdAt: -1})
        .skip((page -1) * perPage)
        .limit(perPage)
        .populate('creator');
        return {
            posts: posts.map(p => {
                return {
                    ...p._doc,
                    _id: p._id.toString(),
                    createdAt: p.createdAt.toISOString(),
                    updatedAt: p.updatedAt.toISOString()
                 }
            }),
            totalPosts: totalPosts
        }
    },
    post: async function({id}, req) {
        if(!req.isAuth) {
            const error = new Error('Not authenticated!');
            error.code = 401;
            throw error;
        }
        const post = await Post.findById(id).populate('creator');
        if(!post) {
            const error = new Error('No post found');
            error.code = 404;
            throw error;
        }
        return {
            ...post._doc,
            _id: post._id.toString(),
            createdAt: post.createdAt.toISOString(),
            updatedAt: post.updatedAt.toISOString()
        }

    },
    category: async function({id}, req) {
        if(!req.isAuth) {
            const error = new Error('Not authenticated!');
            error.code = 401;
            throw error;
        }
        const category = await Category.findById(id).populate('creator');
        if(!post) {
            const error = new Error('No post found');
            error.code = 404;
            throw error;
        }
        return {
            ...category._doc,
            _id: category._id.toString(),
            createdAt: category.createdAt.toISOString(),
            updatedAt: category.updatedAt.toISOString()
        }

    },
    updatePost: async function({id, postInput}, req) {
        if(!req.isAuth) {
            const error = new Error('Not authenticated!');
            error.code = 401;
            throw error;
        }
        const post = await Post.findById(id).populate('creator');
        if(!post) {
            const error = new Error('No post found');
            error.code = 404;
            throw error;
        }
        if(post.creator-_id.toString() !== req.userId.toString()) {
            const error = new Error('Not authenticated!');
            error.code = 401;
            throw error;
        }
        post.title = postInput.title;
        post.content = postInput.content;
        if(postInput.imageUrl !== 'undefined') {
            post.imageUrl = postInput.imageUrl;
        }

        const updatedPost = await post.save();
        return {
            ...updatedPost._doc,
            _id: updatedPost._id.toString(),
            createdAt: updatedPost.createdAt.toISOString(),
            updatedAt: updatedPost.updatedAt.toISOString()
        }
    },
    categories: async function({page, perPage}, req) {
        if(!req.isAuth) {
            const error = new Error('Not authenticated!');
            error.code = 401;
            throw error;
        }
        if(!page) {
            page = 1;
        }
        
        const totalCategories = await Category.find().countDocuments();
        console.log('total', totalCategories);
        const categories = await Category.find()
        .sort({createdAt: -1})
        .skip((page -1) * perPage)
        .limit(perPage)
        .populate('creator');
        return {
            categories: categories.map(p => {
                return {
                    ...p._doc,
                    _id: p._id.toString(),
                    createdAt: p.createdAt.toISOString(),
                    updatedAt: p.updatedAt.toISOString()
                 }
            }),
            totalCategories: totalCategories
        }
    }
}