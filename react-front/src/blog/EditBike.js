import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/bikes/'

const CompEditBike = () => {
    const [brand, setBrand] = useState('')    
    const [model, setModel] = useState('')    
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            brand: brand,
            model: model
        })
        navigate('/')
    }

    useEffect( ()=>{
        getBikeById()
    },[])

    const getBikeById = async () => {
        const res = await axios.get(URI+id)
        setBrand(res.data.brand)
        setModel(res.data.model)
    }

    return (
        <div>
        <h3>Edit BIKE</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Brand</label>
                <input
                    value={brand}
                    onChange={ (e)=> setBrand(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Model</label>
                <textarea
                    value={model}
                    onChange={ (e)=> setModel(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>            
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
    )

}

export default CompEditBike