import { useTheme } from "@/contexts/ThemeContext";
import React, { useState, useRef } from "react";

import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";

const CustomVideoPlayer = () => {
  const { isDark } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play();
        setIsPlaying(true);
        setShowControls(true);
      }
    }
  };

  const handleVideoClick = () => {
    if (isPlaying) {
      handlePlayPause();
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setShowControls(false);
  };

  const shouldShowCustomButton = !isPlaying || (isPlaying && isHovered);

  return (
    <div className="relative z-20 w-full max-w-7xl mx-auto">
      <div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          className="w-full h-full rounded-xl sm:rounded-3xl"
          controls={false}
          playsInline
          loop
          poster="/images/intro-thumbnail.jpg"
          onClick={handleVideoClick}
          onEnded={handleVideoEnded}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        >
          {/* Sample video - replace with your actual video URL */}
          <source src="/videos/intro.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Custom Play/Pause Button Overlay */}
        {shouldShowCustomButton && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              isPlaying && isHovered
                ? "bg-black/20"
                : !isPlaying
                ? "bg-black/30"
                : "bg-transparent"
            } rounded-xl sm:rounded-3xl`}
            onClick={handlePlayPause}
          >
            <div
              className={`
                 bg-white/60 backdrop-blur-sm rounded-full p-4 sm:p-6 
                shadow-lg hover:shadow-xl transform hover:scale-110 
                transition-all duration-300 ease-out cursor-pointer
              `}
            >
              {isPlaying ? (
                <FaPause
                  className={`w-8 h-8 sm:w-12 sm:h-12  ${
                    isDark ? "text-[#556B2F]" : "text-[#7D5B3F]"
                  } ml-0`}
                  fill="currentColor"
                />
              ) : (
                <FaPlay
                  className={`w-8 h-8 sm:w-12 sm:h-12  ${
                    isDark ? "text-[#556B2F]" : "text-[#7D5B3F]"
                  } ml-1`}
                  fill="currentColor"
                />
              )}
            </div>
          </div>
        )}

        {/* Loading State (optional) */}
        {isPlaying && !isHovered && (
          <div className="absolute top-4 left-4">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>

      {/* Video Info (optional) */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Click the play button to start • Hover while playing to see pause
          option
        </p>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
