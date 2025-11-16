const MarqueeLogos = () => {
  // Industry leaders and partners in real estate, construction, and luxury development
  const companies = [
    { name: "L&T Construction", image: "/images/partners/lt.svg", fallback: "L&T" },
    { name: "HDFC Bank", image: "/images/partners/hdfc.svg", fallback: "HDFC" },
    { name: "ICICI Bank", image: "/images/partners/icici.svg", fallback: "ICICI" },
    { name: "Godrej Properties", image: "/images/partners/godrej.svg", fallback: "GODREJ" },
    { name: "UltraTech Cement", image: "/images/partners/ultratech.svg", fallback: "ULTRATECH" },
    { name: "Asian Paints", image: "/images/partners/asian-paints.svg", fallback: "ASIAN PAINTS" },
    { name: "ACC Cement", image: "/images/partners/acc.svg", fallback: "ACC" },
    { name: "Tata Steel", image: "/images/partners/tata.svg", fallback: "TATA STEEL" },
    { name: "Ambuja Cement", image: "/images/partners/ambuja.svg", fallback: "AMBUJA" },
    { name: "JSW Steel", image: "/images/partners/jsw.svg", fallback: "JSW" },
  ];

  // Duplicate for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {duplicatedCompanies.map((company, index) => (
          <div key={`${company.name}-${index}`} className="marquee-item">
            <img
              src={company.image}
              alt={company.name}
              loading="lazy"
              className="marquee-logo"
              onError={(e) => {
                // Fallback to text-based logo if image doesn't exist
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div 
              className="text-logo hidden items-center justify-center h-full w-full bg-milk/10 backdrop-blur-sm rounded-xl px-6 py-4 border-2 border-milk/20"
              style={{display: 'none'}}
            >
              <span className="text-milk font-bold text-xl sm:text-2xl md:text-3xl tracking-wide">
                {company.fallback}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeLogos;

