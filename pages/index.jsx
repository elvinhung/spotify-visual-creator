import React from 'react';
import SelectionPanel from "../components/SelectionPanel";
import TimelinePanel from "../components/TimelinePanel"
import AnimationPanel from "../components/AnimationPanel";

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  onAddItem = item => {
    this.setState(state => {
      const newItems = state.items.concat(item);
      return {
        items: newItems,
      }
    });
  };

  render() {
    console.log('rendering index');
    return (
      <div>
        <div className="PanelRow">
          <SelectionPanel onAddItem={this.onAddItem} />
          <AnimationPanel />
        </div>
        <TimelinePanel items={this.state.items} />
      </div>
    );
  }
}

export default Index;