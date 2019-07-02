import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import PhoneForm from "./components/PhoneForm";
import Array from './components/Array';
//import './App.css';

class App extends  Component {
    handleCreate = (data) =>{
        console.log(data);
    };
    render() {
        return(
            <div>
                <Array onCreate={this.handleCreate}/>
            </div>
        )
    }
}

export default App;
//ReactDOM.render(<App />, document.getElementById('root'));