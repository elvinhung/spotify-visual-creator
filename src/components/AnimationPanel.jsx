import * as THREE from 'three';
import React from 'react';
import '../styles/AnimationPanel.scss'

class AnimationPanel extends React.Component {

  constructor(props) {
    super(props);
    this.sceneItems = [];
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
      }, () => {
        const cube = this.createCube();
        this.sceneItems = this.sceneItems.concat(cube);
        this.scene.add(cube);
      });
    }
  }

  createCube () {
    const geometry = new THREE.BoxGeometry(1,1,1);
    const geo = new THREE.EdgesGeometry(geometry);
    const mat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
    let wireframe = new THREE.LineSegments(geo, mat);
    wireframe.translateX((Math.random() * 5) - 2.5);
    return wireframe;
  }


  componentDidMount() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5);
    this.mount.appendChild(this.renderer.domElement);

    this.camera.position.z = 5;
    this.animate = () => {
      console.log('animating');
      if (this.state.isPlaying) {
        this.sceneItems.forEach(item => {
          item.rotateX(0.01);
          item.rotateY(0.005);
         });
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