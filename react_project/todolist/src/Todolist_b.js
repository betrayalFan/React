import React, {Component , Fragment} from 'react';
import './style.css';

class Todolist extends Component {
	//构造函数
	constructor (props) {
		// 父类继承
		super(props);
		this.state = {
			inputValue:'',
			list:['学习英文','学习react']
		}
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
						onChange = {this.handleInputChange.bind(this)}
					/>
					<button 
						className = 'inputBut'
						onClick={this.headleBtnClick.bind(this)}
					>提交
					</button>
				</div>
				<ul className = 'itemUl'>
					{
						// 这是JSX代码注释书写方式
						/*	<li>1</li>
							<li>2</li>
							<li>3</li>
						*/ 
					}

					{
						this.state.list.map((item,index) => {
							return (
								<li 
									key = {index} 
									onClick = {this.headleItemDelete.bind(this,index)}
									dangerouslySetInnerHTML = {{__html:item}}
								> 
								{
									//{item}
								} 
								</li>
							)
						})
					}
				</ul>
			</Fragment>	
		);
	}

	handleInputChange(e){
		// console.log(e.target.value);
		// console.log(this);
		//this.state.inputValue = e.target.value;
		//改变state数据

		this.setState({
			inputValue: e.target.value
		})
		
	}

	headleBtnClick(){
		console.log('点击提交');
		this.setState({
			list:[...this.state.list,this.state.inputValue],
			inputValue:''
		})
	}
	headleItemDelete(index){
		// immutable
		//state 不允许我们做任何的改变
		console.log(index);
		//lsit  数据拷贝
		const list = [...this.state.list];
		list.splice(index,1);
		// 下标为index  删除 1
		this.setState({
			list:list
		})
	}
}

export default Todolist;