import React from 'react';
import useFetch from '../../hooks/useFetch';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import numberToCurrency from '../../hooks/numberToCurrency';


const TableItemRow = (props) => {
    const {currencyItem,onRemove} = props;
    console.log(currencyItem);
    const {data,error,loading} = useFetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyItem[0]}/zar.json`,{Accept:'application/json'});
    return (
        <>
            { loading && <Grid item xs={12}>
                <CircularProgress/>
            </Grid>}
            { data && <Paper elevation={2} style={{ margin:5, padding:8 }}>
                <Grid item xs={12}>
                    <Grid container alignItems="center" justifyContent="center">
                        <Grid item xs={5}>
                            {currencyItem[0].toUpperCase()}
                        </Grid>
                        <Grid item xs={5}>
                        &rArr;  {`${numberToCurrency(data?.zar,'ZAR')}`}
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton onClick={()=>{onRemove(currencyItem[0])}} color={'secondary'}>
                                <DeleteIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>}
            { error && <tr><td colSpan={3}>An error occured while loading</td></tr>}
        </> 
    )
}

export default TableItemRow;