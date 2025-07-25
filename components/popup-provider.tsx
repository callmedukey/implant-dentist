"use client";

import { useEffect, useState } from "react";

import PopupDisplay from "@/components/popup-display";
import { Popup, PopupImage } from "@/prisma/generated/prisma";

type PopupWithImage = Popup & {
  popupImage: PopupImage | null;
};

export default function PopupProvider({
  children,
  initialPopups = [],
}: {
  children: React.ReactNode;
  initialPopups?: PopupWithImage[];
}) {
  const [popups, setPopups] = useState<PopupWithImage[]>(initialPopups);
  const [currentPopupIndex, setCurrentPopupIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showFirstPopup, setShowFirstPopup] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [showThirdPopup, setShowThirdPopup] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Check if desktop on mount and window resize
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };
    
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Preload popup images
  useEffect(() => {
    popups.forEach((popup) => {
      if (popup.popupImage?.imageUrl) {
        const img = new Image();
        img.src = popup.popupImage.imageUrl;
      }
    });
  }, [popups]);

  // Fetch popups on mount only if not provided
  useEffect(() => {
    if (initialPopups.length === 0) {
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
    }
  }, [initialPopups.length]);

  // Filter out popups that have been hidden for the day
  const visiblePopups = popups.filter((popup) => {
    // Only check localStorage after mounting on client
    if (!isMounted) return true;
    
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

  // Show popups when they're loaded
  useEffect(() => {
    if (visiblePopups.length > 0) {
      if (isDesktop && visiblePopups.length >= 3) {
        // On desktop with 3+ popups, show all three
        setShowFirstPopup(true);
        setShowSecondPopup(true);
        setShowThirdPopup(true);
      } else if (isDesktop && visiblePopups.length >= 2) {
        // On desktop with 2 popups, show both
        setShowFirstPopup(true);
        setShowSecondPopup(true);
      } else if (!showPopup) {
        // On mobile or with single popup, use sequential display
        setShowPopup(true);
        setCurrentPopupIndex(0);
      }
    }
  }, [visiblePopups.length, isDesktop]);

  const handlePopupClose = (open: boolean) => {
    if (!open) {
      // Check if there are more popups to show
      if (currentPopupIndex + 1 < visiblePopups.length) {
        // Immediately show the next popup without delay
        setCurrentPopupIndex(currentPopupIndex + 1);
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    }
  };

  const handleFirstPopupClose = (open: boolean) => {
    if (!open) {
      setShowFirstPopup(false);
    }
  };

  const handleSecondPopupClose = (open: boolean) => {
    if (!open) {
      setShowSecondPopup(false);
    }
  };

  const handleThirdPopupClose = (open: boolean) => {
    if (!open) {
      setShowThirdPopup(false);
    }
  };

  const currentPopup = visiblePopups[currentPopupIndex] || null;

  // Desktop: Show popups side by side (up to 3)
  if (isDesktop && visiblePopups.length >= 2) {
    return (
      <>
        {children}
        <div className="fixed inset-0 z-50 flex items-center justify-center gap-4 p-4" style={{ display: showFirstPopup || showSecondPopup || showThirdPopup ? 'flex' : 'none' }}>
          {showFirstPopup && visiblePopups[0] && (
            <div className="relative">
              <PopupDisplay
                popup={visiblePopups[0]}
                open={showFirstPopup}
                onOpenChange={handleFirstPopupClose}
              />
            </div>
          )}
          {showSecondPopup && visiblePopups[1] && (
            <div className="relative">
              <PopupDisplay
                popup={visiblePopups[1]}
                open={showSecondPopup}
                onOpenChange={handleSecondPopupClose}
              />
            </div>
          )}
          {showThirdPopup && visiblePopups[2] && (
            <div className="relative">
              <PopupDisplay
                popup={visiblePopups[2]}
                open={showThirdPopup}
                onOpenChange={handleThirdPopupClose}
              />
            </div>
          )}
        </div>
      </>
    );
  }

  // Mobile or single popup: Sequential display
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
