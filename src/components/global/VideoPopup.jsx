import React, { useState, useEffect, useRef } from "react";
import { IoClose, IoVolumeOff, IoVolumeHigh } from "react-icons/io5";

const VideoPopup = ({ isOpen, onClose }) => {
  const videoRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay
  const [showUnmutePrompt, setShowUnmutePrompt] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Small delay to ensure DOM is ready, then start animation
      setTimeout(() => {
        setIsAnimating(true);
      }, 50);
    } else if (shouldRender) {
      setIsAnimating(false);
      // Wait for animation to complete before unmounting
      setTimeout(() => {
        setShouldRender(false);
        // Reset states when modal closes
        setIsMuted(true);
        setShowUnmutePrompt(true);
      }, 300);
    }
  }, [isOpen, shouldRender]);

  useEffect(() => {
    if (isAnimating && videoRef.current) {
      // Play video when modal opens with animation
      setTimeout(() => {
        // Try to play muted first (this usually works)
        videoRef.current.muted = true;
        videoRef.current
          .play()
          .then(() => {
            console.log("Video started playing (muted)");
            // Show unmute prompt after video starts
            setTimeout(() => {
              setShowUnmutePrompt(true);
            }, 1000);
          })
          .catch((e) => {
            console.log("Autoplay prevented:", e);
            // If even muted autoplay fails, we need user interaction
          });
      }, 200);
    } else if (!isAnimating && videoRef.current) {
      // Pause and reset video when modal closes
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isAnimating]);

  // Handle mute/unmute toggle
  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      videoRef.current.muted = newMutedState;
      setShowUnmutePrompt(false);
    }
  };

  // Handle click outside modal to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (shouldRender) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [shouldRender, isOpen, onClose]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-out ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ease-out ${
          isAnimating ? "bg-opacity-75" : "bg-opacity-0"
        }`}
      />

      {/* Modal Content */}
      <div
        className={`relative bg-black rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-300 ease-out max-w-7xl max-h-[90vh] w-full mx-4 ${
          isAnimating ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-1 sm:p-2 transition-all duration-200 hover:scale-110"
          aria-label="Close video"
        >
          <IoClose className="text-base sm:text-xl md:text-2xl" />
        </button>

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute top-2 sm:top-4 right-12 sm:right-16 z-20 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-1 sm:p-2 transition-all duration-200 hover:scale-110"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <IoVolumeOff className="text-base sm:text-xl md:text-2xl" />
          ) : (
            <IoVolumeHigh className="text-base sm:text-xl md:text-2xl" />
          )}
        </button>

        {/* Unmute Prompt */}
        {showUnmutePrompt && isMuted && (
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer transition-opacity duration-300 ${
              isAnimating ? "opacity-100" : "opacity-0"
            }`}
            onClick={toggleMute}
          >
            <IoVolumeOff className="text-xl" />
            <span className="text-sm">Click to unmute</span>
          </div>
        )}

        {/* Video Container */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            controls={false}
            muted={isMuted}
            autoPlay
            playsInline
            loop
            poster="/images/intro-thumbnail.jpg"
          >
            {/* Replace with your actual video URL */}
            <source src="/videos/intro.webm" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
