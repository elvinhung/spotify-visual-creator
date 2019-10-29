import * as THREE from 'three';
import React from 'react';
import '../styles/AnimationPanel.scss'

const defaultMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });

const createObject = type => {
  switch (type) {
    case "Cube": {
      return createCube();
    }
    case "Sphere": {
      return createSphere();
    }
    case "Cone": {
      return createCone();
    }
    default: {
      console.log("invalid type of object");
      return null;
    }
  }
};

const createSphere = () => {
  const geometry = new THREE.SphereGeometry(1,20,20);
  const geo = new THREE.EdgesGeometry(geometry);
  const wireframe = new THREE.LineSegments(geo, defaultMaterial);
  wireframe.translateY((Math.random() * 5) - 2.5);
  return wireframe;
};

const createCube = () => {
  const geometry = new THREE.BoxGeometry(1,1,1);
  const geo = new THREE.EdgesGeometry(geometry);
  const wireframe = new THREE.LineSegments(geo, defaultMaterial);
  wireframe.translateX((Math.random() * 5) - 2.5);
  return wireframe;
};

const createCone = () => {
  const geometry = new THREE.ConeGeometry(1,2,20,10);
  const geo = new THREE.EdgesGeometry(geometry);
  const wireframe = new THREE.LineSegments(geo, defaultMaterial);
  wireframe.translateX((Math.random() * 5) - 2.5);
  wireframe.translateY((Math.random() * 5) - 2.5);
  return wireframe;
};

class AnimationPanel extends React.Component {
  constructor(props) {
    super(props);
    this.sceneObjects = [];
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
        const lastAddedItem = this.props.items[this.props.items.length - 1];
        const object = createObject(lastAddedItem);
        if (object) {
          this.sceneObjects = this.sceneObjects.concat(object);
          this.scene.add(object);
          this.animate();
        }
      });
    }
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
        this.sceneObjects.forEach(item => {
          item.rotation.x += 0.01;
          item.rotation.y += 0.005;
         });
        requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
      } else {
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