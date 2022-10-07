import React,{useState} from 'react';
import CurrencyDisplayer from '../../Components/CurrencyDisplayer';
import Header from '../../Components/Header/Index';
import SearchBar from '../../Components/SearchBar';
import { loadJSON, saveJSON } from '../../hooks/localStorage';
import useFetch from '../../hooks/useFetch';

const Homepage = () => {
    const currencyInfo = useFetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json',{Accept:'application/json'});
    const currentExchangeRates = useFetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/zar.min.json',{Accept:'application/json'});
    console.log(currentExchangeRates);

    const [selectedCurrencies, setSelectedCurrencies] = useState(loadJSON('selectedCurrencies')?loadJSON('selectedCurrencies'):[] );

    const addExchange = (val) => { 
        const code = val.match(/^([0-9A-Za-z]+)/);
        let newCurrencies = selectedCurrencies;
        newCurrencies.push(code[1].toLowerCase());
        newCurrencies = newCurrencies.filter((value, index, self) =>{
            return self.indexOf(value) === index;
        });
        saveJSON('selectedCurrencies',newCurrencies);
        setSelectedCurrencies(newCurrencies);
      }
      
      const removeExchange = (code)=>{
        let newCurrencies = selectedCurrencies.filter(el=>el!=code);
        saveJSON('selectedCurrencies',newCurrencies);
        setSelectedCurrencies(newCurrencies);
    }
    return (
      <>
        <Header/>
        <SearchBar 
            currencyInfo={currencyInfo}
            onAddCurrency = {addExchange}
        />
        <CurrencyDisplayer currencyList={selectedCurrencies} currentRates={currentExchangeRates} onRemove={removeExchange}/>
      </>
    )
}

export default Homepage;