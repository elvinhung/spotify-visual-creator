import * as THREE from 'three';
import React from 'react';
import '../styles/AnimationPanel.scss'

class AnimationPanel extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.isPlaying = false;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5);
    this.mount.appendChild(this.renderer.domElement);
    let material = new THREE.LineBasicMaterial({
      color: 0xffffff,
    });

    let geometry = new THREE.Geometry();
    geometry.vertices.push(
      new THREE.Vector3( 0, -0.5, 7 ),
      new THREE.Vector3( 0, -0.5, 0 )
    );

    let angleDeltas = [];
    let lines = [];
    for (let i = 0; i < 20; i++) {
      const line = new THREE.Line(geometry, material);
      if (i < 10) {
        line.translateY(0.1 * i);
        line.translateX(-5);
        angleDeltas.push(0.02);
      } else {
        line.translateY(0.1 * (i - 10));
        line.translateX(5);
        angleDeltas.push(-0.02);
      }
      lines.push(line);
      this.scene.add(line);
    }
    this.camera.position.z = 5;
    this.animate = () => {
      if (!this.isPlaying) {
        return;
      }
      requestAnimationFrame(this.animate);
      lines.forEach((line, index) => {
        if (index < 10) {
          if (line.rotation.y > 1.0) {
            line.material.transparent = true ;
          }
          if (line.rotation.y < 0) {
            angleDeltas[index] = -(angleDeltas[index]);
          }
        } else {
          if (line.rotation.y > 0) {
            angleDeltas[index] = -(angleDeltas[index]);
          }
          if (line.rotation.y < -1.0) {
            line.material.transparent = true;
          }
        }

        line.rotation.y += angleDeltas[index];
      });
      this.renderer.render( this.scene, this.camera );
    };
  }

  play = () => {
    this.isPlaying = !this.isPlaying;
    this.setState({});
    this.animate();
  };



  render() {
    return (
      <div className="AnimationPanel">
        <div ref={ref => (this.mount = ref)} />
        <button onClick={this.play}>
          {this.isPlaying ? 'pause' : 'play'}
        </button>
      </div>
    );
  }
}

export default AnimationPanel;