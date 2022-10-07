const numberToCurrency=(number,symbol="R")=>{
    return `${symbol} ${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}
export default numberToCurrency;