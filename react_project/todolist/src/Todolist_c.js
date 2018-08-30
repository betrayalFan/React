import React, { Component , Fragment } from 'react';
import TodoItem from './TodoItem';


import './style.css';

class Todolist extends Component {

	constructor (props) {
		super(props);
		this.state = {
			inputValue:'',
			list:[]
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.headleBtnClick = this.headleBtnClick.bind(this);
		this.headleItemDelete = this.headleItemDelete.bind(this);
	}
	
	render() {
		console.log('render');
		return ( 
			<Fragment>
				<div>
				<label htmlFor='insertArea'>输入内容</label>
					<input type="text"
						id = 'insertArea'
						className = 'input'
						value = {this.state.inputValue}
						onChange = {this.handleInputChange}
						ref = {(input) => {this.input = input}}
					/>
					<button className = 'inputBut' onClick={this.headleBtnClick}>提交</button>
				</div>
				<ul className = 'itemUl' ref = {(ul) => {this.ul = ul}}>
					{this.getTodoItem()}
				</ul>
			</Fragment>	
		);
	}
	

	getTodoItem(){
		return this.state.list.map((item,index) => {
			return (
				<TodoItem 
					key = {index}
					content = {item} 
					deleteItem = {this.headleItemDelete}
				/>
			)
		})
	}

	handleInputChange(e){
		//const value = e.target.value;
		// ref 的使用
		const value = this.input.value
		this.setState(() => ({
			inputValue: value
		}))
	}

	headleBtnClick(){
		this.setState((prevState) => ({
			// list:[...this.state.list,this.state.inputValue],
			list:[...prevState.list,prevState.inputValue],
			inputValue: ''
		}),() => {
			//setState的第二个参数，是setState执行加载完毕后执行的函数
			//正确的输出
			console.log(this.ul.querySelectorAll('li').length,'setState执行成功，输出正确');
		})
		//输出的长度是添加节点之前的长度
		console.log(this.ul.querySelectorAll('li').length,'setState未执行，输出错误');
	}

	headleItemDelete(index){
		this.setState((prevState) => {
			const list = [...prevState.list];
			list.splice(index,1);
			return {list}
		})
	}
}

export default Todolist;