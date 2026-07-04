import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../layout/Loader";

const LogoCube = () => {
  const logo = useGLTF("/logoModel/3DLogoSpinAnimationMetallic.glb");
  const cubeRef = useRef<THREE.Group>(null);
  const [scale, setScale] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setScale(2.5);
      } else if (width < 768) {
        setScale(3.0);
      } else if (width < 1024) {
        setScale(3.5);
      } else {
        setScale(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += 0.004; 
      cubeRef.current.rotation.x += 0.002;
    }
  });

  return (
    <mesh>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />
      
      <primitive
        ref={cubeRef}
        object={logo.scene}
        scale={scale}
        position={[0, 0, 0]} 
      />
    </mesh>
  );
};

const LogoCanvas = () => {
  const [supportsWebGL, setSupportsWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const supports = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
      setSupportsWebGL(supports);
    } catch (e) {
      setSupportsWebGL(false);
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", minHeight: "350px", position: "relative" }}>
      {!supportsWebGL ? (
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <video 
            key="mobile-logo-video"
            autoPlay 
            loop 
            muted
            playsInline
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "contain", 
              background: "transparent" 
            }}
          >
            <source src="/LogoVid.mp4" type="video/mp4" />
            <source src="/LogoVid.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <Canvas
          frameloop="always"
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0, 6.5], fov: 45 }}
          gl={{ preserveDrawingBuffer: true, alpha: true, powerPreference: "low-power",
        antialias: false }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableDamping={true}
              dampingFactor={0.05}
            />
            <LogoCube />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

useGLTF.preload("/logoModel/3DLogoSpinAnimationMetallic.glb");

export default LogoCanvas;