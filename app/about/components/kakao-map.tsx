"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    daum?: any;
  }
}

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;

    // Function to initialize map
    function initializeMap() {
      if (
        window.daum &&
        window.daum.roughmap &&
        window.daum.roughmap.Lander &&
        !isInitialized.current
      ) {
        try {
          new window.daum.roughmap.Lander({
            timestamp: "1750767710497",
            key: "44x7xya9ao9",
            // Remove mapWidth to make it responsive
            mapHeight: "360",
          }).render();
          isInitialized.current = true;
        } catch (error) {
          console.error("Error initializing Kakao map:", error);
        }
      }
    }

    // Set up daum.roughmap configuration
    const protocol = window.location.protocol === "https:" ? "https:" : "http:";
    window.daum = window.daum || {};
    window.daum.roughmap = {
      phase: "prod",
      cdn: "7a65d0c7",
      URL_KEY_DATA_LOAD_PRE: protocol + "//t1.daumcdn.net/roughmap/",
      url_protocal: protocol,
      url_cdn_domain: "//t1.daumcdn.net",
    };

    // Check if the actual lander script already exists
    const existingLanderScript = document.querySelector(
      'script[src*="roughmapLander.js"]'
    );

    if (existingLanderScript) {
      // If script already exists, just initialize the map
      setTimeout(initializeMap, 100);
      return;
    }

    // Load the actual roughmapLander.js script directly
    const landerScript = document.createElement("script");
    landerScript.src =
      protocol +
      "//t1.daumcdn.net/kakaomapweb/roughmap/place/prod/7a65d0c7/roughmapLander.js";
    landerScript.charset = "UTF-8";

    // Append script to body
    document.body.appendChild(landerScript);

    landerScript.onload = () => {
      // Wait a bit for the script to fully initialize
      setTimeout(initializeMap, 100);
    };

    landerScript.onerror = () => {
      console.error("Failed to load Kakao roughmap lander script");
    };

    // Don't remove the script on cleanup as it might be needed by other components
  }, []);

  return (
    <div
      ref={mapRef}
      id="daumRoughmapContainer1750767710497"
      className="root_daum_roughmap root_daum_roughmap_landing w-full h-full"
      style={{ width: "100%" }}
    />
  );
}
