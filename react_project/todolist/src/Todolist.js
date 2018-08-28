import React, {Component , Fragment} from 'react';

class Todolist extends Component {
	//构造函数
	constructor (props) {
		// 父类继承
		super(props);
		this.state = {
			inputValue:'',
			list:[]
		}
	}
	
	render() {
		return ( 
			<Fragment>
				<div>
					<input type="text" name="" 
						value = {this.state.inputValue}
						onChange = {this.handleInputChange.bind(this)}
					/>
					<input type="button" value="提交"/>
				</div>
				<ul>
					<li>fasdfsa </li>
					<li>fasdfsa</li>
					<li>fdsafdsa</li>
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
}

export default Todolist;