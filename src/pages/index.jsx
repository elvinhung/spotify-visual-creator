import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
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

  addItem = item => {
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
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <style jsx global>{`
          body { 
            margin: 0;
            position: fixed;
          }
        `}</style>
        <div className="PanelRow">
          <SelectionPanel addItem={this.addItem} />
          <AnimationPanel items={this.state.items}  />
        </div>
        <TimelinePanel items={this.state.items} />
        <a href={spotify.AUTH_LINK}>AAUTH</a>
      </div>
    );
  }
}

export default Index;