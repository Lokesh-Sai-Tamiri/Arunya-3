import FlavorTitle from "../components/FlavorTitle";
import FlavorSlider from "../components/FlavorSlider";

const FlavorSection = () => {
  return (
    <section className="flavor-section">
      <div className="h-full w-full flex lg:flex-row flex-col items-center justify-center relative overflow-x-hidden">
        <div className="lg:w-[50%] xl:w-[50%] w-full flex-none h-auto min-h-[20rem] sm:h-80 lg:h-full mt-4 sm:mt-6 md:mt-8 xl:mt-0 flex items-center justify-center">
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
