import React, { Component } from 'react';
import { Button, } from 'reactstrap';
import {useHistory} from "react-router-dom";
function Layout1(){
    let history = useHistory();
      return (
        <div> 
            <Button classname="button-style" onClick={()=> history.push("/home")} style={{margin: "20px"}}>Prev</Button>            
            <Button classname="button-style" onClick={()=> history.push("/data")} style={{margin: "20px"}}>Next</Button>
        </div>
    );
    }
    
class Timer extends Component {
    state = { 
        date : new Date()
     }
    callme(){
        setInterval(()=>{this.setState({date : new Date()});},1000);
    }
    render() { 
        return ( 
            <div className="App div-style">
                <h1><br/><br/><br/><br/><br/>Current Timestamp : </h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                {this.callme()}
                <Layout1/>
            </div>
         );
    }
}
 
export default Timer;