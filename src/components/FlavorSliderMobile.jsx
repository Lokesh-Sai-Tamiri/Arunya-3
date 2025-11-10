import { flavorlists } from "../constants";

const FlavorSliderMobile = () => {
  return (
    <div className="flex flex-col gap-6 mt-8">
      {flavorlists.map((flavor) => (
        <div
          key={flavor.name}
          className="relative w-full h-80 overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src={`/images/${flavor.color}.jpg`}
            alt={flavor.name}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h1 className="text-white text-3xl font-bold mb-2">
              {flavor.name}
            </h1>
            <p className="text-white text-lg opacity-90">
              {flavor.sqft}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlavorSliderMobile;

