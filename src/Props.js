import React , {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

function User(props){
    return(
        <div>
            <img src={props.user.imageUrl} />>
            &nbsp;
            <strong>{props.user.name}</strong>
        </div>
    )
}
function Board(props){
    return(
        <section>
            <User user={props.user}/>
            {props.title}
            <hr/>
            {props.content}
        </section>
    )
}
const board = {
    title: '게시글 제목',
    content : '내용이다',
    user: {
        name : 'by',
        imageUrl: 'http://placeimg.com/300/300/any'
    }
};

//ReactDOM.render(<Board title={board.title} content={board.content} user={board.user} /> , document.getElementById('root'));