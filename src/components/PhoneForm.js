import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class PhoneForm extends Component{
    state = {
        name: '',
        phone: '',
    };
    nameChange = (e) =>{
        this.setState({
            // event.Target 이벤트버블링의 가장 마지막에 위치한 최하위 요소 반환
            // 대괄호 사용이유 - 변수명
            // input 태그의 name 속성 값을 받아옴
            [e.target.name]: e.target.value
            // event.currentTarget 의 경우 이벤트가 바인딩된 요소, 즉 해당하는 요소를 반환
            //https://webisfree.com/2017-09-06/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-event-target-%ED%94%84%EB%A1%9C%ED%8D%BC%ED%8B%B0%EC%99%80-currenttarget-%ED%94%84%EB%A1%9C%ED%8D%BC%ED%8B%B0%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80
            //참조
        })
    };
    handleSubmit = (e) =>{
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
            name:'',
            phone: ''
        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                                                        {/*nameChange 메서드의 e.target.name 에 값 전달*/}
                <input placeholder="이름" value={this.state.name} onChange={this.nameChange} name="name"/>
                <input placeholder="전화번호" value={this.state.phone} onChange={this.nameChange} name="phone"/>

                <div>{this.state.name} {this.state.phone}</div>
                <button type="submit">등록</button>
            </form>
        );
    }
}
export default PhoneForm;

//ReactDOM.render(<PhoneForm />, document.getElementById('root'));