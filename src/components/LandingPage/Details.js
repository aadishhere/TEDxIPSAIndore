import Link from "next/link";
import RedText from "../utility/RedText";

export default function Details() {
  return (
    <div className="container mx-auto"> {/* Added container class for full width */}
      <article className="mb-24 flex w-full -translate-y-[50px] flex-col items-center justify-center gap-24 text-center md:translate-y-0 lg:mb-32 lg:mt-[75px] lg:flex-row lg:gap-0 ">
        {/* Section with event name */}
        <div className="flex-1 text-[60px] font-extralight leading-[90%] lg:text-left">
          <div>TEDx</div>
          <div>IPSA Indore</div>
        </div>

        {/* Section with event date */}
        <div className="text-shape flex-1 select-none text-center font-extralight leading-none">
          <div className="text-[80px]">02</div>
          <div className="text-[30px]">MARCH '24</div>
        </div>

        {/* Section with "See the talks HERE" */}
        <div className="flex-1 text-[30px] font-extralight leading-none lg:text-right">
          <div>See</div>
          <div>the</div>
          <div>talks</div>
          <div>
            {/* Using RedText utility component for styling */}
            <RedText>
              {/* Using Next.js Link for client-side navigation */}
              <Link href="/talks" className="underline">
                HERE
              </Link>
            </RedText>
          </div>
        </div>
      </article>
    </div>
  );
}
