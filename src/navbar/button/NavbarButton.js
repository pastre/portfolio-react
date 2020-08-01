import React from 'react';
import './NavbarButton.css';

class NavbarButton extends React.Component { 
  handleClick = () => {
    console.log('this is:', this);
  }
  
  render() {
    return (
      <button className = "btn" onClick={this.handleClick}>
          <div className="buttonName" > 
            {this.props.name}
          </div>
      </button>
  );
  }
}

export default NavbarButton;
