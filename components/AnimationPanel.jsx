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
      color: 0xfd44f5,
    });

    let geometry = new THREE.Geometry();
    geometry.vertices.push(
      new THREE.Vector3( 0, 0.5, 10 ),
      new THREE.Vector3( 0, 0, 0 )
    );

    let angleDeltas = [];
    let lines = [];
    for (let i = 0; i < 40; i++) {
      const line = new THREE.Line(geometry, material);
      if (i < 20) {
        line.rotateX(0.07 * i);
      } else {
        line.rotateX(-0.07 * (i - 20));
      }
      lines.push(line);
      angleDeltas.push(0.02);
      this.scene.add(line);
    }
    this.camera.position.z = 10;
    this.animate = () => {
      if (!this.isPlaying) {
        return;
      }
      requestAnimationFrame(this.animate);
      lines.forEach((line, index) => {
        if (line.rotation.y > 1.6) {
          angleDeltas[index] = -(angleDeltas[index]);
        }
        if (line.rotation.y < -1.6) {
          angleDeltas[index] = -(angleDeltas[index]);
        }
        line.rotation.y += angleDeltas[index];
      });
      this.renderer.render( this.scene, this.camera );
    };
  }

  play = () => {
    this.isPlaying = !this.isPlaying;
    this.animate();
  };



  render() {
    return (
      <div className="AnimationPanel">
        <div ref={ref => (this.mount = ref)} />
        <button onClick={this.play}>
          play
        </button>
      </div>
    );
  }
}

export default AnimationPanel;