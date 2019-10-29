import React from 'react';
import "../styles/ObjectButton.scss"

class ObjectButton extends React.Component {
  addItem = () => {
    this.props.addItem(this.props.type);
  };

  render() {
    return (
      <button className="ObjectButton" onClick={this.addItem}>
        <span>{this.props.type}</span>
      </button>
    );
  }
}

export default ObjectButton;
