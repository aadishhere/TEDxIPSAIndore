import Link from "next/link";
import RedText from "../utility/RedText";

const Details = () => {
  return (
    <article className="flex flex-col items-center justify-center gap-24 lg:flex-row lg:gap-0 mb-24 lg:mb-32">
      {/* Event Name Section */}
      <div className="flex-1 text-center lg:text-left text-4xl lg:text-5xl font-extralight leading-[90%]">
        <div>TEDx</div>
        <div>IPSA Indore</div>
      </div>

      {/* Event Date Section */}
      <div className="text-shape flex-1 select-none text-center lg:text-left font-extralight">
        <div className="text-5xl">02</div>
        <div className="text-2xl">MARCH '24</div>
      </div>

      {/* Talks Link Section */}
      <div className="flex-1 text-center lg:text-right text-xl font-extralight">
        <div className="mb-4 lg:mb-0">See the talks</div>
        <div>
          <RedText>
            <Link href="/talks" className="underline">
              HERE
            </Link>
          </RedText>
        </div>
      </div>
    </article>
  );
};

export default Details;
