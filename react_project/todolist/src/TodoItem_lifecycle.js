import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component{

    constructor(props) {
        super(props)
        this.headleClick = this.headleClick.bind(this);
    }

    render(){
        console.log('child render');
        const { test , content } = this.props;
        return(
            <li 
                onClick = {this.headleClick} 
                key = {this.props.index}
            >
                {test} -- {content}
            </li>
        )
    }

    headleClick(){
        // 调用父组件的方法 并传值
        // 解构赋值
        const { deleteItem , index} = this.props;
        deleteItem(index);
    }

    componentWillReceiveProps () {
		console.log('child componentWillReceiveProps');
    }
    componentWillUnmount(){
        console.log('child componetWillUnmount');
    }
}

/* 参数校验
    isRequired 必传值
    test: PropTypes.string.isRequired,
    test 定义为必传参数 并为 string 类型
    如果父组件没有 test 值传递
    则设置 test 的默认值
*/
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

// 默认值设置
TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;