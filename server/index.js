import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import ImageSchema from './models/image.js'
// import imageRoutes from './routes/images.js'
import userRoutes from './routes/users.js'

import dotenv from 'dotenv'

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: false }))
app.use(cors());

// app.use('/user', userRoutes)

const PORT = process.env.PORT || 5000

const DATABASE_URL = "mongodb+srv://120cs0033:03032003Sa@shopping.qh4xara.mongodb.net/"

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`server running on port ${PORT}`) }))
    .catch((err) => console.log(err.message))

//Storage
const Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage
}).single('testImage');


app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            console.log(err)
        }
        else {
            const newImage = new ImageSchema({
                name: req.body.name,
                image: {
                    data: req.file.filename,
                    contentType:'image/png'
                }
            })
            newImage.save()
                .then(() => res.send('Successfully uploaded'))
                .catch(err => console.log(err));
        }
    })
})

// app.use('/image', imageRoutes);

app.get('/getAllImages', async (req, res) => {
    const allData = await ImageSchema.find()
    res.json(allData)
})

app.use('/user', userRoutes)

// app.get('/', (req, res) => {
//     res.send("Upload file")
// })