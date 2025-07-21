import Career from '../models/career.js';

export const getAllCareers = async (req, res) =>{
    try{
        const careers = await Career.find()
        res.status(200).json(careers);

    }catch{
        res.status(500).json({message: 'Error retrieving careers'});

    }
}


export const getCareerById = async (req, res) => {
    const {id} = req.params;

    try{
        const career = await Career.findById(id);
        if (!career) return res.status(404).json({message: "Career not found"})
        res.status(200).json(career)
    
    }catch(error){
        res.status(500).json({message: error.message});

    }

}

export const createCareer = async (req, res) => {
    try{
        const newCareer = new Career(req.body);
        const saveCareer = await newCareer.save();
        res.status(201).json(saveCareer);


    }catch(error){
        res.status(500).json({message: error.message});
    }

}

export const updateCareer = async (req, res) => {
    const {id} = req.params;
    const updateCareer = req.body;
    try{
        const career = await Career.findByIdAndUpdate(req.params.id, updateCareer, {new: true});
        if (!updateCareer) return res.status(404).json({message: "Career not found"});
        res.status(200).json(updateCareer);
    
    }catch(error){
        res.status(500).json({message: error.message});

    }

}

export const deleteCareer = async (req, res) => {
    try{
        const {id} = req.params;
        const deletedCareer = await Career.findByIdAndDelete(id);
        if (!deletedCareer) return res.status(404).json({message: "Career not found"});
        res.status(200).json({message: "Career deleted successfully"});
    }catch(error){
        res.status(500).json({message: error.message});

    }

}