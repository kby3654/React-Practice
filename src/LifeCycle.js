import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from "./serviceWorker";

class ApiEx extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: ''
        }
    }
    callApi = () =>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
            .then(json =>{
                this.setState({
                    data: json.title
                })
        })
    };
    // render()가 먼저 실행됨. 즉 데이터가 비어있는 상태
    componentDidMount() {
        this.callApi()
    }
    render(){
        return(
            <h3>
                {this.state.data ? this.state.data : '데이터를 불러오는 중 '}
            </h3>
        );
    }
}
/*
실행 -> render -> componentDidMount -> Api -> render 가 상태변화를 감지하고 재실행
 */
export default ApiEx;
//ReactDOM.render(<ApiEx />, document.getElementById('root'));