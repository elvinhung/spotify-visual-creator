import React from 'react';
import SelectionPanel from "../components/SelectionPanel";
import TimelinePanel from "../components/TimelinePanel"

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
        <SelectionPanel onAddItem={this.onAddItem} />
        <TimelinePanel items={this.state.items} />
      </div>
    );
  }
}

export default Index;