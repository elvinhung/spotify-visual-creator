import React from 'react';

class TimelinePanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('rendering timeline');
    return (
      <div>
        {this.props.items.map(item => (
          <div>{item}</div>
        ))}
      </div>
    );
  }
}

export default TimelinePanel;
