import * as THREE from 'three';
import React from 'react';
import '../styles/AnimationPanel.scss'

class AnimationPanel extends React.Component {

  componentDidMount() {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5);
    this.mount.appendChild(renderer.domElement);
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
        line.rotateY(0.07 * i);
      } else {
        line.rotateY(-0.07 * (i - 20));
      }
      lines.push(line);
      angleDeltas.push(0.02);
      scene.add(line);
    }
    camera.position.z = 10;
    let animate = function () {
      requestAnimationFrame( animate );
      lines.forEach((line, index) => {
        console.log(index);
        if (line.rotation.y > 1.6) {
          angleDeltas[index] = -(angleDeltas[index]);
        }
        if (line.rotation.y < -1.6) {
          angleDeltas[index] = -(angleDeltas[index]);
        }
        line.rotation.y += angleDeltas[index];
      });
      renderer.render( scene, camera );
    };
    animate();
  }

  render() {
    return (
      <div className="AnimationPanel" ref={ref => (this.mount = ref)}/>
    );
  }
}

export default AnimationPanel;