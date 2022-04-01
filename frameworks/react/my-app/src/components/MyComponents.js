import React, { Component } from 'react';

// import '../components/MyComponents.css';

class MyComponents extends Component {
    // 생성자
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // 상태변수(state variable)
    //         number: 0
    //     }
    // }

    state = {
        number: 0,
        message: '',
        valudate: false,
        messages: ['AngularJS', 'React', 'Vue', 'Ember']
    }

    // event handler 함수 선언 (arrow function)
    onDecrement = () => { 
        this.setState({
            number: this.state.number - 1
        });
    }
    handleClick = () => {
        this.setState({
            validate: true
        });
        this.myInput.focus();
    }
    handlerKeyPress = (event) => {
        const { messages, message } = this.state;
        if (event.keyCode === 13) {
            this.setState({
                messages: messages.concat(message),
                message: ''
            });
        }
    };
    handleDoubleClick = (index) => {
        this.setState({
            messages: this.state.messages.filter( (item, idx) => idx !== index)
        })
    }

    render() {
        // 변수선언
        const {msg, age} = this.props;
        
        const {number, message, valudate, messages} = this.state;
        const {onDecrement, handleClick, handlerKeyPress, handleDoubleClick} = this;
        const message_list = messages.map( (item, idx) => {
            <li key={idx} onDoubleClick={ () => handleDoubleClick(idx) }>{item}</li>
        })
        return (
            <>
                <h3>Hello { msg } / { age }</h3>
            </>
        );
    };
}

export default MyComponents;