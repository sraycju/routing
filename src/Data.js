import React from 'react';

import { Button, } from 'reactstrap';
import { useHistory} from "react-router-dom";
function Layout2(){
    let history = useHistory();
      return (
        <div> 
            <Button classname="button-style" onClick={()=> history.push("/time")} style={{margin: "20px"}}>Prev</Button>            
            <Button classname="button-style" onClick={()=> history.push("/currency")} style={{margin: "20px"}}>Next</Button>
        </div>
    );
}
class Data extends React.Component {

    /** 
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }
    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div className="App"><h1>Loading...</h1></div>;

        return (
            <div className="App">
                <ul className= "list">
                    {items.map(item => (
                        <div className="namecard text">
                            <li key={item.id}>
                                <br/><br/>
                                Name: {item.first} {item.last}
                            </li>
                        </div>
                    ))}
                </ul>
                <div><Layout2/></div>
            </div>
        );
        

    }

}

export default Data;