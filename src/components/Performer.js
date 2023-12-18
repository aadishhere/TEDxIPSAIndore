import Container from "@/components/utility/Container.js";
import RedText from "./utility/RedText";
import SpecialPerformance from "./SpeakerCards/SpecialPerformance";

const Performer = () => {
  return (
    <Container>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-16 rounded-[5px] border-white py-12 pt-0 transition-all duration-200 md:h-fit md:flex-row md:gap-6 md:border md:py-6">
        {/* AYUSH KRISHNA */}
        <div className="h-[200px] w-full bg-ayush bg-cover bg-custom md:w-[300px] lg:bg-cover lg:bg-left"></div>
        
      </div>
    </Container>
  );
};

export default Performer;
