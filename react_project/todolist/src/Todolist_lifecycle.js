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
	
	// 在组件即将被挂载(第一次执行)到页面时执行
	componentWillMount(){
		console.log('Mounting componentWillMount');
	}
	
	render() {
		console.log('Mounting Updation render');
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

	// 在组件被挂载(第一次执行)到页面之后自动执行
	componentDidMount(){
		console.log('Mounting componentDidMount');
	}

	//在组件更新之前,必须返回一个bool值 true false
	//返回false,组件不被更新，后面的流程将会终止
	shouldComponentUpdate (){
		console.log('Updation shouldComponentUpdate');
		return true;
	}
	
	// 在组件更新之前,它会自动执行,但是它是在shouldComponentUpdate 之后执行
	// 如果shouldComponentUpdate返回true则会执行
	// 返回false,这个函数就不会被执行
	componentWillUpdate () {
		console.log('Updation componentWillUpdate');
	}	

	// 组件更新完成之后会被执行
	componentDidUpdate(){
		console.log('Updation componentDidUpdate');
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