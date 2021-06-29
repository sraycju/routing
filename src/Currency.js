import React,{useState,useMemo} from "react";
import  "./App.css";
import { Button, } from 'reactstrap';
import { useHistory} from "react-router-dom";
function Layout3(){
    let history = useHistory();
      return (
        <div> 
            <Button classname="button-style" onClick={()=> history.push("/data")} style={{margin: "20px"}}>Prev</Button>            
            <Button classname="button-style" onClick={()=> history.push("/home")} style={{margin: "20px"}}>Home</Button>
        </div>
    );
}
function Currency(){
    const [value,setValue]=useState(0);
    const [fromCurrency, setFromCurrency] = useState("INR");
    const [toCurrency, setToCurrency] = useState("USD");
    const [currencies] = useState(["EUR", "USD","XCD","GEL","HTG","INR","ILS","KZT","KWD","LSL"]);
    const [result, setResult] = useState(0);
    const fromCurrencies = useMemo(() => {
      return currencies;
    }, [currencies, toCurrency]);
  
    const toCurrencies = useMemo(() => {
      return currencies;
    }, [currencies, fromCurrency]);
    const convert = async (e) => {
      e.preventDefault();
      const formValid = +value >= 0 && fromCurrency && toCurrency;
      if (!formValid) {
        return;
      }
      const res = await fetch(
        `https://free.currconv.com/api/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=dd8e835c3d0a875afe5e`
      );
      const data= await res.json();
      let rate=data[`${fromCurrency}_${toCurrency}`];
      console.log(data);
      setResult(value * rate);
      
    };
    
    return (
      <div className="div-style">
        <form onSubmit={convert} style={{margin: "150px auto auto auto"}}>
          <div style={{marginTop:"20px"}}>
            <label style={{paddingRight:"10px",}}>From </label><input style={{paddingLeft:"10px",width:"80px",}}value={value} onChange={(e) => setValue(e.target.value)} />
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {fromCurrencies.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div style={{marginTop:"30px"}}>
            <label style={{paddingRight:"30px",display:"inline-block",width:"80px"}}>To </label> {result.toFixed(2)}
            <select style={{display: "inline"}}
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {toCurrencies.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div >
          <button style={{marginTop:"30px",alignItems:"center"}}type="submit">Convert</button>
        </form>
        <div style={{margin: "100px"}}><Layout3/></div>
      </div>
    );
  }
  export default Currency;