import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface FeatureProps {
  step: number;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    step: 1,
    title: "Research",
    description:
      "Market trends, user whispers, and competitor insights form our research arsenal.",
  },
  {
    step: 2,
    title: "Concept",
    description:"Market trends, user whispers, and competitor insights form our research arsenal."
  },
  {
    step: 3,
    title: "Design",
    description:
      "Pixels morph into precision, sketches solidify into steel.",
  },
  {
    step: 4,
    title: "Development",
    description:
      "Prototypes whisper feedback, simulations sing insights.",
  },
  {
    step: 5,
    title: "Deliver",
    description:
      "From blueprint to masterpiece, we orchestrate seamless delivery.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Process
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {features.map(({ title, description, step }: FeatureProps) => (
          <Card key={title}>
          <div className=" absolute m-3 bg-primary/20 p-1 rounded-2xl w-8">
                  {step}
          </div>
          <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
            <div>
              <CardTitle>{title}</CardTitle>
              <CardDescription className="text-md mt-2">
                {description}
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
        ))}
      </div>
    </section>
  );
};
