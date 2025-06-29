"use client";

import { useEffect, useState } from "react";

import PopupDisplay from "@/components/popup-display";
import { Popup, PopupImage } from "@/prisma/generated/prisma";

type PopupWithImage = Popup & {
  popupImage: PopupImage | null;
};

export default function PopupProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [popups, setPopups] = useState<PopupWithImage[]>([]);
  const [currentPopupIndex, setCurrentPopupIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // Fetch popups on mount
  useEffect(() => {
    fetch("/api/popups")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // Don't throw error, just return empty array
        console.warn("Failed to fetch popups:", res.status);
        return [];
      })
      .then((data) => {
        setPopups(data);
      })
      .catch((error) => {
        // Silently handle errors, just log them
        console.warn("Error fetching popups:", error);
        setPopups([]);
      });
  }, []);

  // Filter out popups that have been hidden for the day
  const visiblePopups = popups.filter((popup) => {
    try {
      const hiddenUntil = localStorage.getItem(`popup-${popup.id}-hidden`);
      if (!hiddenUntil) return true;

      const hiddenDate = new Date(hiddenUntil);
      return new Date() > hiddenDate;
    } catch (error) {
      // If localStorage is not available or throws an error, show the popup
      console.warn("Error accessing localStorage:", error);
      return true;
    }
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
