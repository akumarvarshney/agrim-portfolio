import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        let character: THREE.Object3D;
        loader.load(
          "/models/character.glb",
          async (gltf) => {
            character = gltf.scene;

            // DYNAMIC SCALING: MoncyDev built the 3D scene at a completely giant 10x scale!
            // Standard avatars like Avaturn are 1.8 units tall, but the camera is positioned at Y=13! 
            const box = new THREE.Box3().setFromObject(character);
            const size = box.getSize(new THREE.Vector3());
            if (size.y > 0 && size.y < 3) {
              const scaleFactor = 14.5 / size.y; // Scale standard human to be ~14.5 units tall
              character.scale.set(scaleFactor, scaleFactor, scaleFactor);
              character.position.y = -1; // Center on screen
            }

            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            const footR = character!.getObjectByName("footR") || character!.getObjectByName("RightFoot") || character!.getObjectByName("RightFoot_019"); // Added fallbacks
            const footL = character!.getObjectByName("footL") || character!.getObjectByName("LeftFoot") || character!.getObjectByName("LeftFoot_014");
            if (footR) footR.position.y = 3.36;
            if (footL) footL.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
