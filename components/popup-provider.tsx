"use client";

import { use, useEffect, useState } from "react";
import PopupDisplay from "@/components/popup-display";
import { Popup, PopupImage } from "@/prisma/generated/prisma";

type PopupWithImage = Popup & {
  popupImage: PopupImage | null;
};

// Create a promise for fetching popups
function fetchPopups(): Promise<PopupWithImage[]> {
  return fetch("/api/popups").then((res) => {
    if (!res.ok) throw new Error("Failed to fetch popups");
    return res.json();
  });
}

export default function PopupProvider({ children }: { children: React.ReactNode }) {
  const [popupPromise, setPopupPromise] = useState<Promise<PopupWithImage[]> | null>(null);
  const [currentPopupIndex, setCurrentPopupIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // Trigger fetch on mount
  useEffect(() => {
    setPopupPromise(fetchPopups());
  }, []);

  // Get popups using the use() hook
  const popups = popupPromise ? use(popupPromise) : [];

  // Filter out popups that have been hidden for the day
  const visiblePopups = popups.filter((popup) => {
    const hiddenUntil = localStorage.getItem(`popup-${popup.id}-hidden`);
    if (!hiddenUntil) return true;
    
    const hiddenDate = new Date(hiddenUntil);
    return new Date() > hiddenDate;
  });

  // Show first visible popup when they're loaded
  useEffect(() => {
    if (visiblePopups.length > 0 && !showPopup) {
      setShowPopup(true);
      setCurrentPopupIndex(0);
    }
  }, [visiblePopups.length]);

  const handlePopupClose = (open: boolean) => {
    if (!open) {
      // Check if there are more popups to show
      if (currentPopupIndex + 1 < visiblePopups.length) {
        setCurrentPopupIndex(currentPopupIndex + 1);
        setTimeout(() => setShowPopup(true), 300); // Small delay between popups
      } else {
        setShowPopup(false);
      }
    }
  };

  const currentPopup = visiblePopups[currentPopupIndex] || null;

  return (
    <>
      {children}
      {currentPopup && (
        <PopupDisplay
          popup={currentPopup}
          open={showPopup}
          onOpenChange={handlePopupClose}
        />
      )}
    </>
  );
}