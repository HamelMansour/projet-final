import { useEffect, useState } from 'react'
import API from '../../api/api'
import Filter from '../../component/filter/filter'
import Navbar from '../../component/navbar/navbar'
import Trocklist from '../../component/trocklist/trocklist'
import './home.css'
const Home = () => {
    const [trock, setTrock] = useState([])
    const [trockcopie, setTrockcopie] = useState([])

    useEffect(() => {
        API.get('/all')
            .then(res => {
                setTrock(res.data)
                setTrockcopie(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <div> 
            < Navbar/>
            <Filter trock={trock} setTrock={setTrock}
                    TrockList={trockcopie} />
           <Trocklist troks ={trock} /> 
            
        
            
         </div>
    )
}
export default Home