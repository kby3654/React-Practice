import React, {Component} from 'react';
import logo from './logo.svg';
//import './App.css';

let todoId = 0; //todo 아이템의 id를 증가 시키는 변수
class App extends  Component{
    constructor (props) {
        super(props);
        this.state = {
            todoItems: [],
            todoInput: ''
        };
        this.ClickAddItem = this.ClickAddItem(this);
        this.ChangeTodoInput = this.ChangeTodoInput(this);
    }

    ClickAddItem(){
        const{todoInput, todoItems} = this.state;
        if(todoInput.length === 0) return alert('내용을 입력하세요');
        const todoItem = {
            Id : todoId++,
            title: todoInput,
            isCompleted: false
        };
        const newTodoItems = todoItems.slice(0);
        newTodoItems.push(todoItem);
        this.setState({todoItems:newTodoItems, todoInput: ''});
    }

    ChangeTodoInput(e){
        this.setState({todoInput: e.target.value});
    }
  render(){
    return (
        <div className='container' style={{maxWidth:600, padding:'20px 0'}}>
            <div className='row'>
                <div className='col text-container'>
                    <div className='input-group'>
                        <input type='text' className='form-control' placeholder='할 일을 입력해 주세요.' value={this.state.todoInput}
                               onChange={this.ChangeTodoInput}
                               onKeyDown={e => e.keyCode === 13 ? this.ClickAddItem() : null}/>
                        <div className='input-group-append'>
                            <button onClick={this.ClickAddItem}>등록</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
