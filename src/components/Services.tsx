import { HoverEffect } from "./ui/card-hover-effect";
import cubeLeg from "../assets/cube-leg.png";

export const ServiceList = [
  {
    title: "3D Design",
    description:
      "Utilizing cutting-edge Computer-Aided Design software for precise and efficient creation, modification, and optimization of designs across various industries, including machine design, engineering, and product design",
    link:"#"
  },
  {
    title: "2D Layout",
    description:
      "Crafting detailed and accurate two-dimensional layouts using advanced design tools for a variety of applications, ensuring precision and clarity in visual representations.",
    link:"#"
  },
  {
    title: "Modeling and Drafting",
    description:
      "Expertly crafting detailed models and technical drafts using cutting-edge software, ensuring accuracy and clarity in visual representations for a wide range of industries, from concept to production.",
    link:"#"
  },
  {
    title: "Machine Design",
    description:
      "Employing expertise in design engineering and utilizing advanced tools to conceptualize and develop innovative and efficient machines tailored to meet specific requirements and industry standards.",
    link:"#"
  },
  {
    title: "Product Rendering & Animation",
    description:
      "Product Rendering: Transforming product concepts into compelling visualizations through high-quality rendering techniques. Product Animation: Elevating your product showcase with dynamic and engaging animations.",
    link:"#"
  },
  {
    title: "Reverse Engineering",
    description:
      "Unravelling the intricacies of existing products through advanced techniques and technology. Our expertise in reverse engineering allows us to analyse, recreate, and enhance products, providing valuable insights for innovation, improvement, and reproduction.",
    link: "#",
  },
];




export const Services = () => {
  return (
    <section className="container py-24 sm:py-32" id="services"> 
    <div className="grid lg:grid-cols-[3fr,1fr] gap-8 place-items-center">
      <div className="grid gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>
          
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={ServiceList} />
          </div>      
        </div>
      </div>
        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
    </div>
    </section>
  );

  
};



