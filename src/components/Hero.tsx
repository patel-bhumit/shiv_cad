import { ContainerScroll } from "./ui/container-scroll-animation";
import video1 from '@/assets/video1.mp4';
import video2 from "@/assets/CGI mechanical watch exploded animation - Blender project.mp4";
import video3 from "@/assets/Electric scooter assembly rendered design 3D CGI animation.mp4";
import { useState } from "react";

export const Hero = () => {
  const videos = [video1, video2, video3];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Function to handle video end event
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

   // Function to handle manual video change on click
   const handleVideoClick = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };


  return (
    <section className="place-items-center h-fit" id="home">
      <div className="text-center lg:text-start">
        <main>
          <div className="z-10">
            <ContainerScroll titleComponent={
                <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                Expert Design Solutions for Every Project <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Shiv Cad Designs
                </span>
                </h1>
              </>
            }>
              <video
                key={currentVideoIndex} // Ensure the video re-renders on index change
                autoPlay
                muted
                className="w-full h-fit object-cover"
                onEnded={handleVideoEnd}
                onClick={handleVideoClick}
              >
                <source src={videos[currentVideoIndex]} type="video/mp4" />
              </video>
            </ContainerScroll>
          </div>
        </main>
      </div>

      {/* Shadow effect */}
      <div className="shadow -z-50"></div>
    </section>
  );
};
