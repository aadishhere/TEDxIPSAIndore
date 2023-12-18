import Link from "next/link";
import RedText from "../utility/RedText";

export default function HeroSection() {
  return (
    <section className="hero-section bg-gradient-to-r from-blue-500 to-purple-500 text-white py-32">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extralight mb-4">TEDx IPSA Indore</h1>
        <p className="text-lg font-light mb-8">Inspiring Talks for a Bright Future</p>

        <div className="text-shape mb-12">
          <div className="text-4xl font-extralight">02</div>
          <div className="text-xl">MARCH '24</div>
        </div>

        <div className="text-2xl font-light">
          <p>Explore thought-provoking talks and ideas.</p>
          <p>
            <RedText>
              <Link href="/talks" className="underline">
                Start Exploring
              </Link>
            </RedText>
          </p>
        </div>
      </div>
    </section>
  );
}
