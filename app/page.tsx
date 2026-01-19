import Hero from "@/features/hero/components/hero";
import AboutMe from "@/features/about-me/components/about-me";

export default function Home() {
  return (
    <main className="mt-40 lg:mt-55">
      <Hero />
      <AboutMe />
    </main>
  );
}
