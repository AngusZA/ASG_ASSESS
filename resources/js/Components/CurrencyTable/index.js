import React from 'react';
import TableItemRow from '../TableItemRow';
import Grid from '@mui/material/Grid';

const CurrencyTable = (props) => {
    const {selectedList, onRemove} = props; 
    let {data} = props;
    data = Object.entries(data?.data?.zar).filter(el=>selectedList.includes(el[0]));
    return (
        <div style={{ width:'100%',paddingTop:15,margin:'auto'}}>
            <Grid container direction='column' xs={12} >
                {data.map((el,i)=>(
                    <TableItemRow key={`cur${i}`} currencyItem={el} onRemove={onRemove}/>
                ))}
            </Grid>
        </div>
    )
}

export default CurrencyTable;