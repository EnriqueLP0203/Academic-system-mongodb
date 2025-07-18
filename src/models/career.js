import { text } from 'express';
import mongoose from 'mongoose';

const coordinatorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
});


const careerSchema = new mongoose.Schema({
    career_code: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    career_name: {
        type: String,
        required: true,
        trim: true
    },

    description:{
        type: String,
        required: true,
        trim: true
    },

    fourt_quarter_duration: {
        type: Number,
        required: true,
    },

    modality:{
        type: String,
        required: true,
        enum: ['online', 'in person'],
        default: 'in person'
    },

    creation: {
        type: String,
        required: true
    },

    active: {
        type: Boolean,
        default: true,
    },

    coordinator:{
        type: coordinatorSchema,
        required: true
    }   

}, {
    timestamps: true
});



export default mongoose.model('Career', careerSchema);