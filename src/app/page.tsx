import About from "@/components/About";
import Design from "@/components/Design";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full p-4 flex flex-col">
      <Hero />
      <About />
      <Features />
      <Design />
    </main>
  );
}
