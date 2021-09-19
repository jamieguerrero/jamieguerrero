import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PageWrapper } from "../components/PageWrapper";
import {
  H2,
  MusicWrapper,
  MusicProjectWrapper,
  CanvasWrapper,
} from "../styles/index.styled";
import Smiley from "../components/Smiley";

function Box(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const IndexPage = () => (
  <PageWrapper>
    <CanvasWrapper>
      <Canvas camera={{ position: [0, 0, 70] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[1.2, 0, 0]} />
        <Suspense fallback={null}>
          <Smiley scale={0.15} />
        </Suspense>
      </Canvas>
    </CanvasWrapper>
    <MusicWrapper id="music">
      <MusicProjectWrapper>
        <H2>What I'm Listening To</H2>
        beat tapes
        https://open.spotify.com/playlist/7Fil9eRQDLT8aiFvqrjiur?si=edd80eeca11d4403
        feel these ones in my heart
        https://open.spotify.com/playlist/3tkCuefAHyEC1HJv8ZX9Yk?si=796be0ecee25421d
        🗣 cover these
        https://open.spotify.com/playlist/2sPVqA5fBCcHjPgSxoWRXS?si=7364362fbc614efe
        bluffs ting
        https://open.spotify.com/playlist/66KQJb6pC49SOZ1oAW7oOX?si=1140bb79ed6841eb
      </MusicProjectWrapper>
    </MusicWrapper>
  </PageWrapper>
);

export default IndexPage;
