"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

import heroSlider1 from "@/public/images/index/hero-slider-1.webp";
import heroSlider2 from "@/public/images/index/hero-slider-2.webp";
import heroSlider3 from "@/public/images/index/hero-slider-3.webp";
import heroSlider4 from "@/public/images/index/hero-slider-4.webp";
import heroSlider5 from "@/public/images/index/hero-slider-5.webp";

const images = [
  heroSlider1,
  heroSlider2,
  heroSlider3,
  heroSlider4,
  heroSlider5,
];

const HeroSlider = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!mountRef.current) return;

    let cleanup = false;
    const container = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup - orthographic for precise control
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 10);
    camera.position.z = 1;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Load textures
    const loader = new THREE.TextureLoader();
    const textures: THREE.Texture[] = [];
    let loadedCount = 0;

    // Modern fiber mask transition shader
    const material = new THREE.ShaderMaterial({
      uniforms: {
        currentTexture: { value: null },
        nextTexture: { value: null },
        progress: { value: 0 },
        time: { value: 0 },
        zoomTime: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D currentTexture;
        uniform sampler2D nextTexture;
        uniform float progress;
        uniform float time;
        uniform float zoomTime;
        varying vec2 vUv;

        void main() {
          vec2 center = vec2(0.5, 0.5);
          vec2 uv = vUv;
          
          // Smooth oscillating zoom effect
          float maxZoom = 0.08;
          float zoomCycle = 8.0; // Total time for zoom in + zoom out
          
          // Create a smooth sine wave oscillation
          float zoomProgress = sin(zoomTime * 3.14159 / zoomCycle) * 0.5 + 0.5;
          // Apply easing for more natural motion
          float easedZoom = zoomProgress * zoomProgress * (3.0 - 2.0 * zoomProgress);
          float globalZoom = 1.0 + easedZoom * maxZoom;
          
          // Apply the same zoom to both textures for continuity
          vec2 zoomedUv = (uv - center) / globalZoom + center;
          
          // Sample textures with the same zoom
          vec4 current = texture2D(currentTexture, zoomedUv);
          vec4 next = texture2D(nextTexture, zoomedUv);
          
          // Cinematic fade through black
          float fadeOut = 1.0 - smoothstep(0.0, 0.5, progress);
          float fadeIn = smoothstep(0.5, 1.0, progress);
          
          // Apply fade
          current *= fadeOut;
          next *= fadeIn;
          
          // Combine with black in middle
          vec4 finalColor = current + next;
          
          // Add film grain for cinematic texture
          float grain = fract(sin(dot(uv * time, vec2(12.9898, 78.233))) * 43758.5453);
          finalColor.rgb += (grain - 0.5) * 0.02 * (1.0 - fadeOut * fadeIn);
          
          // Subtle vignette for cinematic framing
          float vignette = 1.0 - length(uv - center) * 0.3;
          finalColor.rgb *= vignette;
          
          gl_FragColor = finalColor;
        }
      `,
    });

    // Create plane
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Resize handler
    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
    };
    resize();
    window.addEventListener("resize", resize);

    // Load all textures
    images.forEach((img, index) => {
      loader.load(img.src, (texture) => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;
        texture.colorSpace = THREE.SRGBColorSpace;

        // Make texture repeat and center it
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.center.set(0.5, 0.5);

        // Calculate scale to cover the viewport
        const imageAspect = 16 / 9; // Adjust if your images are different
        const containerAspect = container.clientWidth / container.clientHeight;

        if (containerAspect > imageAspect) {
          // Container is wider
          texture.repeat.set(containerAspect / imageAspect, 1);
        } else {
          // Container is taller
          texture.repeat.set(1, imageAspect / containerAspect);
        }

        textures[index] = texture;
        loadedCount++;

        // Initialize when all textures are loaded
        if (loadedCount === images.length) {
          material.uniforms.currentTexture.value = textures[0];
          material.uniforms.nextTexture.value = textures[0];
        }
      });
    });

    // Animation state
    // const currentIndex = 0;
    // let progress = 0;
    // let isTransitioning = false;
    // let displayTimer = 0;
    let zoomTimer = 0; // Separate timer for continuous zoom
    let lastTime = performance.now();
    let elapsedTime = 0;

    const animate = () => {
      if (cleanup) return;

      const currentTime = performance.now();
      const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
      lastTime = currentTime;
      elapsedTime += deltaTime;

      // Update time uniforms
      material.uniforms.time.value = elapsedTime;
      zoomTimer += deltaTime; // Continuous zoom timer
      material.uniforms.zoomTime.value = zoomTimer;

      // Wait for all textures to load
      if (textures.length !== images.length) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      // Sliding feature commented out - only show first image
      // if (!isTransitioning) {
      //   displayTimer += deltaTime;

      //   // Start transition after 4 seconds
      //   if (displayTimer >= 4) {
      //     isTransitioning = true;
      //     progress = 0;

      //     // Setup transition - current stays the same, next is the upcoming image
      //     const nextIndex = (currentIndex + 1) % images.length;
      //     material.uniforms.currentTexture.value = textures[currentIndex];
      //     material.uniforms.nextTexture.value = textures[nextIndex];
      //   }
      // } else {
      //   // Update transition progress
      //   progress += deltaTime * 0.8; // Cinematic transition (1.25 seconds)
      //   material.uniforms.progress.value = progress;

      //   if (progress >= 1) {
      //     // Ensure we're at full black before switching
      //     material.uniforms.progress.value = 1;
      //     renderer.render(scene, camera);

      //     // Transition complete - update index and reset
      //     currentIndex = (currentIndex + 1) % images.length;

      //     // Set both textures to the new current image
      //     material.uniforms.currentTexture.value = textures[currentIndex];
      //     material.uniforms.nextTexture.value = textures[currentIndex];
      //     material.uniforms.progress.value = 0;

      //     // Reset state
      //     isTransitioning = false;
      //     progress = 0;
      //     displayTimer = 0; // Reset display timer for next image
      //     // Note: zoomTimer continues running for smooth zoom
      //   }
      // }

      // Update texture scaling on resize
      if (textures.length > 0) {
        const containerAspect = container.clientWidth / container.clientHeight;
        const imageAspect = 16 / 9;

        textures.forEach((texture) => {
          if (containerAspect > imageAspect) {
            texture.repeat.set(containerAspect / imageAspect, 1);
          } else {
            texture.repeat.set(1, imageAspect / containerAspect);
          }
        });
      }

      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cleanup = true;
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      textures.forEach((texture) => texture?.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <section
      ref={mountRef}
      className="relative w-full h-[min(50vh,60rem)] sm:h-[calc(100vh-4rem)]  lg:h-[calc(100vh-6.25rem-4rem)]" // Fixed: header (6.25rem) + banner (4rem)
      style={{ overflow: "hidden", backgroundColor: "#202a2d" }}
    >
      {/* SEO Content - Hidden but accessible to search engines */}
      <div className="sr-only">
        <h1>조은이플란트치과 - 임플란트 전문 치과</h1>
        <p>
          조은이플란트치과는 최신 임플란트 기술과 풍부한 경험을 바탕으로 환자
          중심의 맞춤형 치료를 제공합니다. 정확한 진단과 안전한 시술로 건강한
          치아를 되찾아드립니다.
        </p>
        <ul>
          <li>전문 임플란트 시술</li>
          <li>개인 맞춤형 치료 계획</li>
          <li>최신 장비와 기술</li>
          <li>안전하고 정확한 진료</li>
          <li>환자 중심의 서비스</li>
        </ul>
      </div>
    </section>
  );
};

export default HeroSlider;
