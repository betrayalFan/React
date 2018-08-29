import React, { Component } from 'react';

class TodoItem extends Component{

    constructor(props) {
        super(props)
        this.headleClick = this.headleClick.bind(this);
        // console.log(this.props);
        // content: "react"
        // deleteItem: ƒ ()
        // index: 0
    }
    
    render(){
        return(
            <li 
                onClick = {this.headleClick} 
                key = {this.props.index}
            >
                {this.props.content}
            </li>
        )
    }

    headleClick(){
        // 调用父组件的方法 并传值
        console.log(this.props.index);
        this.props.deleteItem(this.props.index);
    }
}

export default TodoItem;