import React from 'react';
import Link from 'next/link';
import SelectionPanel from "../components/SelectionPanel";
import TimelinePanel from "../components/TimelinePanel"
import AnimationPanel from "../components/AnimationPanel";
import '../styles/Index.scss'

const spotify = require('../spotify');

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

  componentDidMount () {
    let hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    if (hashParams && hashParams.access_token) {
      console.log(hashParams.access_token);
    }
  }

  render() {
    console.log('rendering index');
    return (
      <div>
        <div className="PanelRow">
          <SelectionPanel onAddItem={this.onAddItem} />
          <AnimationPanel items={this.state.items} />
        </div>
        <TimelinePanel items={this.state.items} />
        <a href={spotify.AUTH_LINK}>AAUTH</a>
      </div>
    );
  }
}

export default Index;