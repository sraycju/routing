import React, { Component } from "react";
import Button1 from "./Button1";
import { Button, } from 'reactstrap';
import "./App.css";
import {useHistory} from "react-router-dom";
function Layout(){
let history = useHistory();
  return (
    <div>              
        <Button classname="button-style" onClick={()=> history.push("/time")} style={{margin: "20px"}}>Next</Button>
    </div>
);
}

class  Home extends Component {

  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  
 
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div className="App div-style">
        <div className="contents">
          <div class="count">
            <h3>Counter:</h3>
            <h1>{count}</h1>
          </div>
          <div class="buttons">
            <Button1 classname="button-style" title={"-"} action={this.decrementCount} />
            <Button1 classname="button-style" title={"+"} action={this.incrementCount} /><br/><br/><br/>
          </div>
          <div>
            <Layout />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
