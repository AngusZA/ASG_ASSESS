import React, {useState} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const CurrencyLister = (props) => {
    const onAdd = props.onAdd;
    const currencyList = props.list;
    const [value, setValue] = useState(null);    
    return (
        <>
        <div style={{ textAlign:'center', margin:"25px auto"}}>
            <Autocomplete
                disablePortal
                clearOnEscape={true}
                id="currency-search-box"
                options={Object.entries(currencyList).map(el=>el[0].toUpperCase()+' - '+el[1])}
                sx={{ width:'85%', maxWidth:450 }}
                renderInput={(params) => <TextField {...params} label="Currency" />}
                style={{ margin:'auto'}}
                onChange={(evt,val)=>setValue(val)}
            />
        </div>
        <div style={{ textAlign:'center' }}>
            <Button variant="contained" 
                size='small'
                onClick={()=>{onAdd(value);}}
                >Add Currency</Button>
        </div>
        </>
    )
}

export default CurrencyLister;