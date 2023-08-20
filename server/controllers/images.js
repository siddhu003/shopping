import mongoose from "mongoose"
import Image from './models/image.js'

export const getAllImages = async (req, res) => {
    try {
        const allImages = await Image.find();
        res.status(200).json(allImages);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}