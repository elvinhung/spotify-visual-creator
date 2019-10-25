import * as THREE from 'three';
import React from 'react';
import '../styles/AnimationPanel.scss'

class AnimationPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      items: this.props.items,
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.items.length !== this.props.items.length) {
      console.log('prevProps diff from currProps');
      this.setState({
        items: this.props.items,
      });
    }
  }


  componentDidMount() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5);
    this.mount.appendChild(this.renderer.domElement);

    let geometry = new THREE.BoxGeometry(1, 1, 1,);
    let material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    let cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    this.camera.position.z = 5;
    this.animate = () => {
      console.log('animating');
      if (this.state.isPlaying) {
        this.camera.position.z += 0.01;
        requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
      }
    };
  }


  play = () => {
    this.setState(currentState => ({
      isPlaying: !currentState.isPlaying,
    }), () => {
      this.animate();
    });
  };



  render() {
    console.log('rendering animation panel');
    return (
      <div className="AnimationPanel">
        <div ref={ref => (this.mount = ref)} />
        <button onClick={this.play}>
          {this.state.isPlaying ? 'pause' : 'play'}
        </button>
      </div>
    );
  }
}

export default AnimationPanel;