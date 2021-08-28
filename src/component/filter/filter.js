import {Button, TextField} from "@material-ui/core";
import './filter.css'
 
const Filter = () => {
    
    return (
        <div className={'h-filter'}>
            <TextField label="Title"
                      
                       variant="outlined"/>
            <TextField label="Rating"
                     
                       variant="outlined"/>
            <Button variant="contained"
                    color="primary" style={{backgroundColor: 'red'}}>
                Filter
            </Button>
        </div>
    )
}
export default Filter