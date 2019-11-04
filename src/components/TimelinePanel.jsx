import React from 'react';
import '../styles/TimelinePanel.scss'
import TimelineItem from "../ui-components/TimelineItem";

class TimelinePanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('rendering timeline');
    return (
      <div className="TimelinePanel">
        {this.props.items.map(item => (
          <TimelineItem type={item} />
        ))}
      </div>
    );
  }
}

export default TimelinePanel;
