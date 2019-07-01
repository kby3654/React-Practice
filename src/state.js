import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from "./serviceWorker";
import App from "./App2";

class Clock extends Component{
    constructor(props){
        super(props);
        //state 선언
        this.state={
            date: new Date()
        };
    }
    // Mount - React 컴포넌트 객체가 DOM 에 실제로 삽입되기 전까지의 과정
    // componentDidMount() {
    //     this.timerID = setInterval(()=> this.tick(), 1000);
    // }
    // componentWillUnMount() {
    //     clearInterval(this.timerID);
    // }
    //
    // tick(){
    //     //state 값 변경시 반드시 setState 로 값을 변경해야됨
    //     this.setState({
    //             date: new Date()
    //     })
    // }
    goBack(){
        let nextDate = this.state.date;
        nextDate.setSeconds(nextDate.getSeconds()-10);
        this.setState({
            date: nextDate
        })
    }
    render() {
        return(
            <Fragment>
                <h3>현재 시각은 {this.state.date.toLocaleTimeString()}</h3>
                <button onClick={this.goBack.bind(this)}>10초 백</button>
            </Fragment>

        );
    }
}

//ReactDOM.render(<Clock/>, document.getElementById('root'));
serviceWorker.unregister();