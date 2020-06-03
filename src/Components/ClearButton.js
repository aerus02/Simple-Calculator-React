import React,{Component} from 'react';
import './ClearButton.css';

class ClearButton extends Component {
  render(){
    return (
      <button className="calc-clrbtn" onClick={()=>this.props.handleClick()}>{this.props.children}</button>
    );
  }
  
}
export default ClearButton;
