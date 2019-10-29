import React from 'react';
import '../styles/SelectionPanel.scss'
import ObjectButton from '../ui-components/ObjectButton'

class SelectionPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SelectionPanel">
        <ObjectButton addItem={this.props.addItem} type="Sphere"/>
        <ObjectButton addItem={this.props.addItem} type="Cube"/>
        <ObjectButton addItem={this.props.addItem} type="Cone"/>
      </div>

    );
  }
}

export default SelectionPanel;

