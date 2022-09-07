import BikeModel from "../models/BikeModel.js";

export const getAllBikes = async (req, res) => {
    try {
        const bikes = await BikeModel.findAll()
        res.json(bikes)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const getBike = async (req, res) => {
        try {
            const bike = await BikeModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(bike[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}

export const createBike = async (req, res) => {
    try {
       await BikeModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const updateBike = async (req, res) => {
    try {
        await BikeModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const deleteBike = async (req, res) => {
    try {
        await BikeModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}