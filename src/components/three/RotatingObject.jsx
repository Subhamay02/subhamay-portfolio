import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Color } from 'three';

const lerp = (from, to, amount) => from + (to - from) * amount;

const vertexShader = `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPosition;

  float blobWave(vec3 point) {
    float waveA = sin(point.x * 3.2 + uTime * 1.4);
    float waveB = sin(point.y * 4.1 + uTime * 1.1);
    float waveC = sin(point.z * 3.7 + point.x * 1.2 + uTime * 1.7);
    return (waveA + waveB + waveC) / 3.0;
  }

  void main() {
    float distortion = blobWave(position) * 0.18;
    vec3 distortedPosition = position + normal * distortion;

    vNormal = normalize(normalMatrix * normal);
    vPosition = distortedPosition;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(distortedPosition, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  uniform vec3 uAccentColor;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 lightDirection = normalize(vec3(0.45, 0.75, 0.55));
    vec3 viewDirection = normalize(vec3(0.0, 0.0, 1.0));

    float diffuse = max(dot(normal, lightDirection), 0.0);
    float rim = pow(1.0 - max(dot(normal, viewDirection), 0.0), 2.0);
    float specular = pow(max(dot(reflect(-lightDirection, normal), viewDirection), 0.0), 28.0);
    float verticalTint = smoothstep(-1.0, 1.0, vPosition.y);

    vec3 baseColor = mix(uAccentColor, uColor, diffuse * 0.85 + 0.15);
    vec3 finalColor = mix(baseColor, uColor, verticalTint * 0.25);
    finalColor += vec3(1.0, 0.74, 0.35) * rim * 0.45;
    finalColor += vec3(1.0, 0.92, 0.72) * specular * 0.4;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const AnimatedShape = ({ isVisible }) => {
  const groupRef = useRef();
  const meshRef = useRef();
  const materialRef = useRef();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new Color('#f59e0b') },
      uAccentColor: { value: new Color('#d97706') },
    }),
    [],
  );

  useFrame((state, delta) => {
    if (!isVisible) {
      return;
    }

    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }

    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.12;
      meshRef.current.rotation.y += delta * 0.18;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.18;
    }

    if (groupRef.current) {
      const targetX = state.pointer.x * 0.6;
      const targetY = state.pointer.y * 0.6;

      groupRef.current.position.x = lerp(groupRef.current.position.x, targetX, 0.05);
      groupRef.current.position.y = lerp(groupRef.current.position.y, targetY, 0.05);
      groupRef.current.rotation.y = lerp(groupRef.current.rotation.y, state.pointer.x * 0.5, 0.05);
      groupRef.current.rotation.x = lerp(groupRef.current.rotation.x, -state.pointer.y * 0.5, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} scale={2}>
        <sphereGeometry args={[1, 32, 32]} />
        <shaderMaterial
          ref={materialRef}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
    </group>
  );
};

const RotatingObject = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[400px] md:h-[600px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        frameloop={isVisible ? 'always' : 'demand'}
        gl={{
          alpha: true,
          antialias: true,
          depth: true,
          powerPreference: 'high-performance',
          stencil: false,
        }}
      >
        <AnimatedShape isVisible={isVisible} />
      </Canvas>
    </div>
  );
};

export default RotatingObject;
