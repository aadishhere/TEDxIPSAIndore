import Link from "next/link";
import RedText from "../utility/RedText";

export default function HeroSection() {
  return (
    <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        poster="/path-to-poster-image.jpg"
      >
        <source src="/public/assets/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="text-center text-white relative z-10 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-4">
          TEDx IPSA Indore
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-8">
          Inspiring Talks for a Bright Future
        </p>

        <div className="text-shape mb-12">
          <div className="text-3xl md:text-4xl lg:text-5xl font-extralight">02</div>
          <div className="text-lg md:text-xl">MARCH '24</div>
        </div>

        <div className="text-xl md:text-2xl font-light">
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
