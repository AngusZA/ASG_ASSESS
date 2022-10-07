import React from 'react';
import CurrencyTable from '../CurrencyTable';

const CurrencyDisplayer = (props) => {
    const {currencyList,currentRates,onRemove} = props;
    return (
        <>
            {currentRates.loading && <div>Loading current exchange rates...</div>}
            {currentRates.data && !currentRates.error && <CurrencyTable selectedList={currencyList} data={currentRates} onRemove={onRemove}/>}
        </>
    )
}

export default CurrencyDisplayer;