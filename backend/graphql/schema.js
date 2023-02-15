const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Post {
        _id: ID!
        title: String!
        content: String!
        imageUrl: String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }

    type Category {
        _id: ID!
        name : String!
        status: String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }

    type PostData {
        posts: [Post!]!
        totalPosts: Int!
    }

    type CategoriesData {
        categories: [Category!]!
        totalCategories: Int!
    }

    type User {
        _id: ID!
        name:String!
        email: String!
        password: String
        status: String!
        posts: [Post!]!
        token: String!
    }

    type AuthData {
        token: String!
        userId: String!
    }

    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    input PostInputData {
        title: String!
        content: String!
        imageUrl: String!
    }

    input CategoryInputData {
        name: String!
        status: String!
    }

    type RootQuery {
        login(email: String!, password: String!):AuthData!
        posts(page: Int): PostData!
        post(id: ID!): Post!
        category(id: ID!): Category!
        updatePost(id: ID!, postInput: PostInputData): Post!
        categories(page: Int, perPage: Int): CategoriesData!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
        createPost(postInput: PostInputData): Post!
        createCategory(categoryInput: CategoryInputData): Category!
    }
    
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);