import { spring } from 'remotion';
import { useRef, useLayoutEffect, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

const CAMERA_DISTANCE = 1;

export default function PhoneModel() {
  const group = useRef<any>();
  const gltf = useGLTF('/scene.gltf');
  const camera = useThree((state) => state.camera);
  const frame = useCurrentFrame();
  const { materials } = gltf;
  const nodes = gltf.nodes as any;
  const { fps, durationInFrames } = useVideoConfig();

  useLayoutEffect(() => {
    // Camera.position.set(-0.1, 0.4, 5);
    // materials.Body.color.set('#9BB5CE');
    // If (window.matchMedia('(max-width: 48em)').matches) {
    //   camera.fov = 18;
    //   camera.updateProjectionMatrix();
    // }
  }, []);

  useEffect(() => {
    camera.position.set(0, 0, CAMERA_DISTANCE);
    camera.near = 0.2;
    camera.far = Math.max(5000, CAMERA_DISTANCE * 2);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  // During the whole scene, the phone is rotating.
  // 2 * Math.PI is a full rotation.
  const constantRotation = interpolate(
    frame,
    [0, durationInFrames],
    [0, Math.PI * 6],
  );

  // When the composition starts, there is some extra
  // rotation and translation.
  const entranceAnimation = spring({
    frame,
    fps,
    config: {
      damping: 200,
      mass: 3,
    },
  });

  // Calculate the entrance rotation,
  // doing one full spin
  const entranceRotation = interpolate(
    entranceAnimation,
    [0, 1],
    [-Math.PI, Math.PI],
  );

  // Calculating the total rotation of the phone
  const rotateY = entranceRotation + constantRotation;

  // Calculating the translation of the phone at the beginning.
  // The start position of the phone is set to 4 "units"
  const translateY = interpolate(entranceAnimation, [0, 1], [-4, 0]);

  return (
    <group ref={group} dispose={null}>
      <group
        scale={entranceAnimation}
        rotation={[0, rotateY, 0]}
        position={[0, translateY, 0]}
      >
        <group rotation={[0, 0, 0]} scale={0.01}>
          <group scale={100}>
            <mesh
              geometry={nodes.Body_Mic_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Body_Bezel_0.geometry}
              material={materials.Bezel}
            />
            <mesh
              geometry={nodes.Body_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              geometry={nodes.Body_Wallpaper_0.geometry}
              material={materials.Wallpaper}
            />
            <mesh
              geometry={nodes.Body_Camera_Glass_0.geometry}
              material={materials.Camera_Glass}
            />
            <mesh
              geometry={nodes.Body_Lens_0.geometry}
              material={materials.Lens}
            />
            <mesh
              geometry={nodes.Body_Material_0.geometry}
              material={materials.Material}
            />
            <mesh
              geometry={nodes.Camera_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              geometry={nodes.Camera_Glass_0.geometry}
              material={materials.Glass}
            />
            <mesh
              geometry={nodes.Camera_Camera_Frame001_0.geometry}
              material={materials['Camera_Frame.001']}
            />
            <mesh
              geometry={nodes.Camera_Mic_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Body001_Screen_Glass_0.geometry}
              material={materials.Screen_Glass}
            />
            <mesh
              geometry={nodes.Button_Frame_0.geometry}
              material={materials.Frame}
            />
            <mesh
              geometry={nodes.Circle003_Frame_0.geometry}
              material={materials.Frame}
            />
            <mesh
              geometry={nodes.Apple_Logo_Logo_0.geometry}
              material={materials.Logo}
            />
            <mesh
              geometry={nodes.Camera001_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              geometry={nodes.Camera001_Gray_Glass_0.geometry}
              material={materials.Gray_Glass}
            />
            <mesh
              geometry={nodes.Camera001_Flash_0.geometry}
              material={materials.Flash}
            />
            <mesh
              geometry={nodes.Camera001_Port_0.geometry}
              material={materials.Port}
            />
            <mesh
              geometry={nodes.Camera001_Camera_Frame_0.geometry}
              material={materials.Camera_Frame}
            />
            <mesh
              geometry={nodes.Camera001_Camera_Glass_0.geometry}
              material={materials.Camera_Glass}
            />
            <mesh
              geometry={nodes.Camera001_Lens_0.geometry}
              material={materials.Lens}
            />
            <mesh
              geometry={nodes.Camera001_Black_Glass_0.geometry}
              material={materials.Black_Glass}
            />
            <mesh
              geometry={nodes.Camera003_Material002_0.geometry}
              material={materials['Material.002']}
            />
            <mesh
              geometry={nodes.Frame_Frame_0.geometry}
              material={materials.Frame}
            />
            <mesh
              geometry={nodes.Frame_Frame2_0.geometry}
              material={materials.Frame2}
            />
            <mesh
              geometry={nodes.Frame_Port_0.geometry}
              material={materials.Port}
            />
            <mesh
              geometry={nodes.Frame_Antenna_0.geometry}
              material={materials.Antenna}
            />
            <mesh
              geometry={nodes.Frame_Mic_0.geometry}
              material={materials.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
