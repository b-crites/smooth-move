'use client';
import { useEffect, useState, useRef } from "react";

export default function VideoBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef([]);
  const nextVideoRef = useRef(null);
  
  // List of your videos
  const videos = [
    "/video/Over_Top_1.mp4",
    "/video/Over_Top_2.mp4", // Replace with your actual video paths
  ];

  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    const nextIndex = (currentIndex + 1) % videos.length;
    nextVideoRef.current = nextIndex;

    if (!currentVideo) return;
    
    const handleVideoEnded = () => {
      // Prepare the next video but keep it hidden
      const nextVideo = videoRefs.current[nextIndex];
      if (nextVideo) {
        nextVideo.currentTime = 0;
        
        // Set to transitioning state
        setIsTransitioning(true);
        
        // Play the next video while fading
        nextVideo.play().then(() => {
          // After 1.5 seconds of crossfade, complete the transition
          setTimeout(() => {
            setCurrentIndex(nextIndex);
            setIsTransitioning(false);
          }, 1500);
        }).catch(error => {
          console.error("Video play failed:", error);
          setIsTransitioning(false);
        });
      }
    };
    
    // Add event listener
    currentVideo.addEventListener('ended', handleVideoEnded);
    
    // Ensure the video is playing
    if (currentVideo.paused) {
      currentVideo.play().catch(e => console.error("Failed to play video:", e));
    }
    
    // Cleanup
    return () => {
      if (currentVideo) {
        currentVideo.removeEventListener('ended', handleVideoEnded);
      }
    };
  }, [currentIndex, videos.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ height: "calc(100vh - 80px)", marginTop: "80px" }}>
      {/* Dark Overlay for Better Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      
      {/* Render all videos, but only current and next are visible during transition */}
      {videos.map((videoSrc, index) => (
        <video
          key={index}
          ref={el => videoRefs.current[index] = el}
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 1.5s cubic-bezier(0.645, 0.045, 0.355, 1.000)",
            // During transition, the next video gradually appears
            ...(isTransitioning && index === nextVideoRef.current 
                ? { opacity: 1 } 
                : {}),
            // During transition, the current video gradually disappears
            ...(isTransitioning && index === currentIndex 
                ? { opacity: 0 } 
                : {})
          }}
          muted
          playsInline
          preload="auto"
          priority="true"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
}