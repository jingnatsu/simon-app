const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const fs = require('fs');
const multer = require('multer');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');

const graphqlChema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');
const auth = require('./middleware/is-auth');
// const feedRoutes = require('./routes/feed');
// const authRoutes = require('./routes/auth');
//app.use(bodyParser.urlencoded());// x-www-form-urlencoded <form>

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString + '-' + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'images/png' || file.mimetype === 'images/jpg' || file.mimetype === 'images/jpeg') {
        cb(null, true);
    } else {
        cb(null, true);
    }
}

app.use(cors());
// app.use((req, res, next) => {
//     if (req.method === "OPTIONS") {
//         res.header('Access-Control-Allow-Origin', req.headers.origin);
//     } else {
//     res.header('Access-Control-Allow-Origin', '*');
//     }
//     res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        // if(req.moethod === 'OPTION') {
        //     return res.sendStatus(200);
        // }
//     next();
// })
app.use(bodyParser.json()); //application-json;
app.use(
    multer({storage: fileStorage, fileFilter: fileFilter}).single('image')
)
/*
The folder will serve statically for request to /images
*/
// app.use('/images', express.static(path.join(__dirname, 'images')))
// app.use('/feed', feedRoutes);
// app.use('/auth', authRoutes);
app.use(auth); 

app.put('/post-image', (req, res, next) => {
    if(!req.isAuth) {
        throw new Error('Not authorization')
    }
    if(!req.file) {
        return res.status(200).json({message: 'No file provided!'})
    }
    if(req.body.oldFile) {
        clearImage(req.body.oldFile);
    }
    return res.status(201).json({message: 'File stored.', filePath: req.file.path})
});



app.use('/graphql', graphqlHTTP({
    schema: graphqlChema,
    rootValue: graphqlResolver,
    graphiql: true,
    customFormatErrorFn(error) {
        if(!error.originalError) {
            return error;
        }
        const data = error.originalError.data;
        const message = error.message || 'An error occurred';
        const code = error.originalError.code || 500;
        return { 
            message: message, 
            status: code, 
            data: data, 
        };
    }
}))
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message, data: data});
})

mongoose.connect(
    'mongodb://127.0.0.1:27018/simon-mongodb?retryWrites=true&w=majority'
).then(result => {
    app.listen(8080);
    // const server = app.listen(8080);
    // const io = require('./socket').init(server, {
    //     cors: {
    //       origin: '*',
    //     }
    //   });
    // io.on('connection', socket => {
    //     console.log('Client connected');
    // })
})
.catch(err => console.log(err));

const clearImage = filePath => {
    filePath = path.join(__dirname, '..', filePath);
    fs.unlink(filePath, err => console.log(err));
}
