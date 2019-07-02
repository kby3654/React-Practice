import React, {Component} from 'react';
import PhoneForm from './PhoneForm';
import PhoneInfoList from "./Array2-2";

class Array extends Component {
    id = 2;
    state = {
        information:[
            {
                id:0,
                name:'김',
                phone:'1234'
            },
            {
                id:1,
                name:'병',
                phone:'5678'
            }
        ]
    };
    handleCreate = (data) =>{
        const { information } = this.state;
        this.setState({
            information : information.concat({id: this.id++, ...data})
        })
    };
    render() {
        const { information } = this.state;
        return (
            <div>
                <PhoneForm onCreate={this.handleCreate}/>
                <PhoneInfoList data ={this.state.information}/>
            </div>
        );
    }
}

export default Array;