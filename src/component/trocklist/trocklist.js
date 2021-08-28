import '../trocklist/trocklist.css'
import Trockcard from '../trockcard/trockcard';
const Trocklist =(props)=>{
    const {troks} = props
    return(
        <div className={'h-container'}>
            {troks.map(dd => <Trockcard trockprops={dd}/>)}
        </div>

    )
} 
export default Trocklist