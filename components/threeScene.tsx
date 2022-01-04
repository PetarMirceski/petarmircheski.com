import { Box, Spinner } from '@chakra-ui/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// TODO: Fix the typing and the model but for not it looks cool
export const LorenzSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

export function loadGLTFModel(
  scene: THREE.Scene,
  glbPath: string,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = 'lorenz_attractor';
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child: any) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });
        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}

const ThreeScene: React.FC = () => {
  const refBody = useRef<HTMLDivElement>(null);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>();
  const [_camera, setCamera] = useState<THREE.OrthographicCamera | null>();
  const [target] = useState(new THREE.Vector3(0, 13, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  );
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState<any>();

  const handleWindowResize = useCallback(() => {
    const { current: container } = refBody;
    if (!container || !renderer) {
      return;
    }
    const scW = container.clientWidth;
    const scH = container.clientHeight;
    renderer.setSize(scW, scH);
  }, [renderer]);

  useEffect(() => {
    const { current: container } = refBody;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scale = scH * 0.07 + 4;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale / 2,
        0.01,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enablePan = false;
      controls.autoRotate = true;
      controls.target = target;
      setControls(controls);

      loadGLTFModel(scene, '/scene.gltf', {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
      });

      let req: any = null;
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, [initialCameraPosition, renderer, scene, target]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  return (
    <Box
      ref={refBody}
      className="voxel-dog"
      m="auto"
      mt={['-10px', '0px', '-40px']}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    />
  );
};

export default ThreeScene;
