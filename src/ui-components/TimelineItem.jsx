import React from 'react';
import '../styles/TimelineItem.scss'

class TimelineItem extends React.Component {
  render() {
    return (
      <button className="TimelineItem" onClick={() => console.log(this.props.type)}>
        <span>{this.props.type}</span>
      </button>
    );
  }
}

export default TimelineItem;
