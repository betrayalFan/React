import React, { Component , Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';


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

	// 只能被执行一次，只需要请求一次接口
	// Ajax 请求
	componentDidMount () {
		axios.get('/api/todolist')
			.then((res) => {
				// 请求成功
				console.log('succ')
				console.log(res);
				this.setState(() => ({
					list: [...res.data]
				}))
			})
			.catch(() => {
				// 请求失败
				console.log('error');
			})
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