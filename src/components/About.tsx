import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              At Shiv CAD Designs, we're not just CAD technicians or animation wizards – we're your partners in product visualization.
We believe that every great product starts with a vision, and our mission is to bridge the gap between that vision and reality. Using cutting-edge CAD software and animation techniques, we transform your ideas into stunning 3D models and captivating product renderings.
Our team is a blend of creative minds and technical wizards, each with a unique skillset that contributes to the magic. So, if you're ready to take your product from concept to market, let Shiv CAD Designs be your guide. We'll walk you through every step of the process, from initial sketches to final renders, ensuring that your product is not just seen, but truly experienced.

              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
