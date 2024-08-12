import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Harish Kallappa",
    userName: "",
    comment: "Working with SHIV CAD DESIGNS has been a game-changer for our projects. Their CAD & RENDERING services are unparalleled – precision, innovation, and a keen eye for detail are evident in every design. SHIV CAD DESIGNS seamlessly translates ideas into reality, delivering exceptional results. Dependable, professional, and a true asset to any project. I look forward to continuing our collaboration and witnessing more of their impressive work.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Vishal  Bhuva",
    userName: "",
    comment:
      "SHIV CAD DESIGNS services are nothing short of exceptional. Their expertise in turning concepts into tangible, well-crafted designs is truly commendable. With an acute attention to detail and a commitment to delivering top-notch quality, SHIV CAD DESIGNS consistently exceeds expectations. Working with SHIV CAD DESIGNS has been a pleasure, and I highly recommend his CAD services for anyone seeking precision and creativity in their projects.",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Krunal Prajapati",
    userName: "",
    comment:
      "Transforming scribbles into flawless blueprints, SHIV CAD DESIGNS's 2D drafting magic delivered precision, streamlined my project, and brought my vision to life. Their meticulous detail, open communication, and problem-solving expertise saved me time and money. Whether you're building a dream home or launching a product, they're the trusted partners you need.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Mr. Desai",
    userName: "",
    comment:
      "Shiv Cad Designs is more than just a drafting company; they're partners in bringing your vision to life. They don't just translate ideas into technical drawings; they collaborate with you to ensure every detail reflects your unique needs and aspirations. I had the pleasure of working with Shiv Cad Designs on a recent project, and I was blown away by their professionalism, meticulous attention to detail, and commitment to open communication. Their expertise in 2D and 3D drafting shines through in every line, and their use of cutting-edge software ensures accuracy and efficiency throughout the process.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Yugant Bhure",
    userName: "",
    comment:
      "Shiv Cad Designs eagle-eye precision transformed my cluttered vision into a flawlessly laid-out reality. Working within a tight timeframe, they meticulously crafted 2D plans that captured every detail, from optimal furniture placement to the flow of natural light. Their open communication throughout the process ensured that my every tweak and whim was met with meticulous adjustments, resulting in a layout that not only functions flawlessly but also feels like an extension of myself. If you're seeking more than just blueprints, but a true spatial collaborator, look no further than Shiv Cad Designs - they'll turn your dream space into a meticulously planned masterpiece.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        This Landing Page
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
