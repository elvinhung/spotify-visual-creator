import React from 'react';
import Link from 'next/link';
import SelectionPanel from "../components/SelectionPanel";
import TimelinePanel from "../components/TimelinePanel"
import AnimationPanel from "../components/AnimationPanel";
import '../styles/Index.scss'

const querystring = require('querystring');

const CLIENT_ID = "ad01ad1e341e426997dbbc2dbee01d30";
const CLIENT_SECRET = "5e68ca160b614e6dad0aa91f70ecabe6";
const REDIRECT_URI = "http://localhost:3000/callback";
const QUERY_STRING = querystring.stringify({
  response_type: 'code',
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI,
});
const AUTH_LINK = "https://accounts.spotify.com/authorize?" + QUERY_STRING;


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
          <AnimationPanel />
        </div>
        <TimelinePanel items={this.state.items} />
        <a href={AUTH_LINK}>AAUTH</a>
      </div>
    );
  }
}

export default Index;