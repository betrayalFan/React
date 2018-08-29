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
		return ( 
			<Fragment>
				<div>
				<label htmlFor='insertArea'>输入内容</label>
					<input type="text"
						id = 'insertArea'
						className = 'input'
						value = {this.state.inputValue}
						onChange = {this.handleInputChange}
					/>
					<button className = 'inputBut' onClick={this.headleBtnClick}>提交</button>
				</div>
				<ul className = 'itemUl'>
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
					index = {index}
					deleteItem = {this.headleItemDelete}
				/>
			)
		})
	}

	handleInputChange(e){
		const value = e.target.value;
		this.setState(() => ({
			inputValue: value
		}))
	}

	headleBtnClick(){
		this.setState((prevState) => ({
			// list:[...this.state.list,this.state.inputValue],
			list:[...prevState.list,prevState.inputValue],
			inputValue: ''
		}))
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