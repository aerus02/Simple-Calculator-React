import React,{Component} from 'react';
import './Button.css';

class Button extends Component {
  render(){
    return (
      <button className="calc-btn" onClick={() => this.props.handleClick(this.props.children)}>{this.props.children}</button>
    );
  }
  
}
export default Button;
