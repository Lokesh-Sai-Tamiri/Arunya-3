import FlavorTitle from "../components/FlavorTitle";
import FlavorSlider from "../components/FlavorSlider";

const FlavorSection = () => {
  return (
    <section className="flavor-section">
      <div className="h-full w-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[57%] w-full flex-none h-auto min-h-[20rem] sm:h-80 lg:h-full mt-10 sm:mt-16 md:mt-20 xl:mt-0 px-4 sm:px-6 md:px-8 lg:px-0">
          <FlavorTitle />
        </div>
        <div className="h-full w-full lg:w-auto lg:flex-1">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;
