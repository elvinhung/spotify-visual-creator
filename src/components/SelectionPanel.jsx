import React from 'react';
import '../styles/SelectionPanel.scss'

class SelectionPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SelectionPanel">
        <button onClick={() => this.props.onAddItem("Square")} >
          Square
        </button>
      </div>

    );
  }
}

export default SelectionPanel;

