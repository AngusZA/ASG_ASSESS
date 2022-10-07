import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import CurrencyLister from '../CurrencyLister';

const SearchBar = (props) => {
    const onAdd = props.onAddCurrency;
    const {loading,data,error} = props.currencyInfo;
    return (
        <>
            { loading && <div style={{ textAlign:'center', marginTop:15 }}>
                <CircularProgress size={30}/>
            </div>}
            { data && !error && <CurrencyLister list={data} onAdd={onAdd}/>}
            
        </>
    )
}

export default SearchBar;