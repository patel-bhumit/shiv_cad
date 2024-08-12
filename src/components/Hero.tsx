
import { FlipWords } from "./ui/flip-words";
import { ContainerScroll } from "./ui/container-scroll-animation";
import video1 from '@/assets/video1.mp4'

export const Hero = () => {
  return (
    <section className="place-items-center h-fit">
      <div className="text-center lg:text-start">
        <main>
          <div className="z-10">
            <ContainerScroll titleComponent={
                <>
                <h1 className="text-4xl font-semibold  text-black dark:text-white">
                Expert Design Solutions for Every Project <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Shiv Cad Designs
                </span>
                </h1>
              </>
                } >

                <video autoPlay muted loop className="w-full h-fit object-cover">
                    <source src={video1} type="video/mp4" />
                </video>

                </ContainerScroll>
          </div>
        </main>
      </div>
      {/* Hero cards sections */}
      <div  className="h-[20rem] flex justify-center items-center px-5 sm:px-5 md:px-30 lg:px-40">
            <div className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl sm:w-full md:w-fit lg:w-fit mx-auto font-bold text-neutral-600 dark:text-neutral-400">
            Bringing your <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text"> visions  </span>to life with <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text"> expert </span>  services in
                <br/><FlipWords words={['3D Design', '2D Layout', 'Modeling and Drafting', 'Machine Design', 'Product Rendering & Animation', 'Reverse Engineering']}/>
            </div>
      </div>
      

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
