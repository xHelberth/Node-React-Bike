import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/bikes/'

const CompCreateBike = () => {
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {brand: brand, model:model})
        navigate('/')
    }   

    return (
        <div>
           <h3>Add new Bike</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Brand</label>
                    <input
                        value={brand}
                        onChange={ (e)=> setBrand(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Model</label>
                    <textarea
                        value={model}
                        onChange={ (e)=> setModel(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  
                 <button type='submit' className='btn btn-primary'>Save</button>                  
           </form>
        </div>
    )
}

export default CompCreateBike