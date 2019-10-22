import React from 'react';

class SelectionPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={() => this.props.onAddItem("Square")} >
        Square
      </button>
    );
  }
}

export default SelectionPanel;

