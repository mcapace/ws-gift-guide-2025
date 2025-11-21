'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { useInView } from 'react-intersection-observer';

function WineBottle() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group>
      {/* Bottle Body */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.35, 3, 32]} />
        <meshPhysicalMaterial
          color="#1a3d1a"
          metalness={0.2}
          roughness={0.1}
          transmission={0.9}
          thickness={0.5}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Bottle Neck */}
      <mesh position={[0, 1.8, 0]}>
        <cylinderGeometry args={[0.15, 0.2, 0.6, 32]} />
        <meshPhysicalMaterial
          color="#1a3d1a"
          metalness={0.2}
          roughness={0.1}
          transmission={0.9}
          thickness={0.5}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Cork */}
      <mesh position={[0, 2.3, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.4, 32]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>

      {/* Gold Foil */}
      <mesh position={[0, 2.1, 0]}>
        <cylinderGeometry args={[0.16, 0.14, 0.3, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Label */}
      <mesh position={[0, 0, 0.41]} rotation={[0, 0, 0]}>
        <planeGeometry args={[0.6, 1]} />
        <meshStandardMaterial color="#FAF9F6" roughness={0.5} />
      </mesh>

      {/* Base */}
      <mesh position={[0, -1.6, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.2, 32]} />
        <meshPhysicalMaterial
          color="#1a3d1a"
          metalness={0.2}
          roughness={0.1}
          transmission={0.9}
          thickness={0.5}
          envMapIntensity={1.5}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        autoRotate
        autoRotateSpeed={0.5}
      />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <WineBottle />
      <Environment preset="sunset" />
    </>
  );
}

export default function WineBottle3D() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-b from-neutral-charcoal to-neutral-black relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="h-[600px] glass rounded-2xl overflow-hidden border border-gold-elegant/20"
          >
            <Suspense fallback={
              <div className="h-full flex items-center justify-center">
                <div className="text-gold-elegant">Loading 3D Experience...</div>
              </div>
            }>
              <Canvas shadows>
                <Scene />
              </Canvas>
            </Suspense>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-gold-elegant text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
              Interactive Experience
            </span>
            <h2 className="text-display-3 font-display font-bold mb-6">
              <span className="gradient-text">Explore</span>
              <br />
              <span className="text-neutral-cream">in 3D</span>
            </h2>
            <p className="text-xl text-neutral-silver mb-8 leading-relaxed">
              Experience our exclusive wines in stunning detail. Rotate, zoom, and discover
              the craftsmanship behind every bottle in our collection.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: '🔍', title: 'Detailed Inspection', desc: 'Examine every detail of the bottle design' },
                { icon: '🎨', title: 'Premium Packaging', desc: 'Luxury presentation for gifting' },
                { icon: '✨', title: 'Authentic Vintages', desc: 'Verified provenance and storage' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4 glass p-4 rounded-xl border border-gold-elegant/10"
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-cream mb-1">{feature.title}</h3>
                    <p className="text-neutral-silver">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-wine"
            >
              View Full Collection
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 bg-wine-burgundy rounded-full blur-[150px] opacity-10" />
    </section>
  );
}
