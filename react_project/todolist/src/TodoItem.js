import React, { Component } from 'react';

class TodoItem extends Component{

    constructor(props) {
        super(props)
        this.headleClick = this.headleClick.bind(this);
    }

    render(){
        const { content } = this.props;
        return(
            <li 
                onClick = {this.headleClick} 
                key = {this.props.index}
            >
                {content}
            </li>
        )
    }

    headleClick(){
        // 调用父组件的方法 并传值
        // 解构赋值
        const { deleteItem , index} = this.props;
        deleteItem(index);
    }
}

export default TodoItem;