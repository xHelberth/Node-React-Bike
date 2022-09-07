import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/bikes/'


const CompShowBikes = () => {
    
    const [bikes, setBike] = useState([])
    useEffect( ()=>{
        getBikes()
    },[])

    const getBikes = async () => {
        const res = await axios.get(URI)
        console.log(res.data)
        setBike(res.data)
    }

    const deleteBike = async (id) => {
       await axios.delete(`${URI}${id}`)
       getBikes()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { bikes.map ( (bike) => (
                                <tr key={ bike.id}>
                                    <td> { bike.brand } </td>
                                    <td> { bike.model } </td>
                                    <td>
                                        <Link to={`/edit/${bike.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteBike(bike.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowBikes


