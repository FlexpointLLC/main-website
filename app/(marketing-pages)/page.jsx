import Hero from "./components/hero/hero";

// test
export const metadata = {
  title: "Flexpoint - Home",
  description:
    "Stay tuned! Flexpoint is launching soon with innovative solutions to empower creators and elevate their digital businesses.",
};

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-210px)]">
      <Hero />
    </div>
  );
}
