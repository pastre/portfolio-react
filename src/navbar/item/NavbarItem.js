import React from 'react';
import './NavbarItem.css';

class NavbarItem extends React.Component { 
  handleClick = () => {
    console.log('this is:', this);
  }
  render() {
    return (
      <button className = "itemButton" onClick={this.handleClick}>
          <img src={this.props.image} alt={this.props.alt} className="buttonImage" />
      </button>
  );
  }
}

export default NavbarItem;
