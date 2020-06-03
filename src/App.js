import React,{Component} from 'react';
import './App.css';
import Button from './Components/Button.js';
import Input from './Components/Input.js';
import ClearButton from './Components/ClearButton.js';

class App extends Component{

	constructor(props){
		super(props);

		this.state={
			input : "",
			prevNum : "",
			operator :""
		};
		
	}

	addNumber = val => {
		if(this.state.input === "0"){ 
			this.setState({
				input : val
			});
		}
		else{
			this.setState({
				input : this.state.input + val
			});
		}
		
	}

	addDecimal = val => {
		if(this.state.input === ""){
			this.setState({
				input : "0."
			});
		}
		else if(this.state.input.indexOf(".") === -1){
			this.setState({
				input : this.state.input + "."
			});
		}
	}

	clearFunction = () => {
		this.setState({
			input : "",
			operator : "",
			prevNum : ""
		});
	}

	equalsToFunction = ()=>{
		if(this.state.operator === "+"){
			this.setState({
				input : (parseFloat(this.state.input)+parseFloat(this.state.prevNum)).toFixed(6),
				prevNum : "",
				operator : ""
			}); 
		}
		else if(this.state.operator === "-"){
			this.setState({
				input : (parseFloat(this.state.prevNum)-parseFloat(this.state.input)).toFixed(6),
				prevNum : "",
				operator : ""
			});

		}
		else if(this.state.operator === "*"){
			this.setState({
				input : (parseFloat(this.state.input)*parseFloat(this.state.prevNum)).toFixed(6),
				prevNum : "",
				operator : ""
			});

		}
		else if(this.state.operator === "/"){
			this.setState({
				input : (parseFloat(this.state.prevNum)/parseFloat(this.state.input)).toFixed(6),
				prevNum : "",
				operator : ""
			});

		}

	}

	addFunction = () =>{
		if(this.state.operator === ""){
			this.setState({
				prevNum : this.state.input,
				input : "",
				operator : "+"
			});
		} 
	}
	subtractFunction = () =>{
		if(this.state.operator === ""){
			this.setState({
				prevNum : this.state.input,
				input : "",
				operator : "-"
			});
		} 
	}
	multiplyFunction = () =>{
		if(this.state.operator === ""){
			this.setState({
				prevNum : this.state.input,
				input : "",
				operator : "*"
			});
		} 
	}
	divideFunction = () =>{
		if(this.state.operator === ""){
			this.setState({
				prevNum : this.state.input,
				input : "",
				operator : "/"
			});
		} 
	}

	
render() {
  return (
    <div className="App">

      <div className="App-header">
      	Calculator App
      </div>

      <div  className="htDiv"> </div>

      <div className="calculator">
	      <div className="calc-row">
	      	<Input>{this.state.input}</Input>
	      </div>
	      <div className="calc-row">
		      <Button handleClick={this.addNumber}>7</Button>
		      <Button handleClick={this.addNumber}>8</Button>
		      <Button handleClick={this.addNumber}>9</Button>
		      <Button handleClick={this.addFunction}>+</Button>
	      </div>
	      <div className="calc-row">
		      <Button handleClick={this.addNumber}>4</Button>
		      <Button handleClick={this.addNumber}>5</Button>
		      <Button handleClick={this.addNumber}>6</Button>
		      <Button handleClick={this.subtractFunction}>-</Button>
	      </div>
	      <div className="calc-row">
		      <Button handleClick={this.addNumber}>1</Button>
		      <Button handleClick={this.addNumber}>2</Button>
		      <Button handleClick={this.addNumber}>3</Button>
		      <Button handleClick={this.multiplyFunction}>&times;</Button>
	      </div>
	      <div className="calc-row">
		      <Button handleClick={this.addDecimal}>.</Button>
		      <Button handleClick={this.addNumber}>0</Button>
		      <Button handleClick={this.equalsToFunction}>=</Button>
		      <Button handleClick={this.divideFunction}>&#247;</Button>
		  </div>
	      <div className="calc-row">
	      	<ClearButton handleClick={this.clearFunction}>AC</ClearButton>
	      </div>	      
      </div>

    </div>
  );
}
}

export default App;
