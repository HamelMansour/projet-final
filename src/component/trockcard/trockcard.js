import { Card } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import API from '../../api/api';
import '../trockcard/trockcard.css';
const Trockcard =(props)=> {
    const router = useHistory()
    const {trockprops} = props
    const [value, setValue] = useState(trockprops.rating);
    const URI = 'http://localhost:3001/'
    const remove = () => {
        Swal.fire({
            title: "Are you sure to delete this trock?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, I am sure!',
            cancelButtonText: "No, cancel it!",
            closeOnConfirm: false,
            closeOnCancel: false
        })
            .then(ok => {
                if (ok.isConfirmed) {
                    API.post('/delete', {_id: trockprops._id})
                        .then(o => {
                            Swal.fire('', '', 'success').then(l => {
                                router.go(0)
                            })
                        })
                        .catch(err => {
                            Swal.fire('', '', 'error')
                        })
                }
            })
    }
    return(
        <div onClick={() => alert("Hello from here")}>
        <Card className={'h-card'}>
        <div className={'img-film'}>
            <img src={URI + trockprops.poster}/>
        </div>
        <div className={'info-'}>
            <span className={'info-title'}>{trockprops.title} </span>
            <span className={'info-description'}>{trockprops.description} </span>
        </div>
        <div className={'rating'}>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </div>
        <span onClick={remove} style={{fontSize: 20, cursor: "pointer"}}>X</span>
    </Card>
    </div>
    )
}
export default Trockcard