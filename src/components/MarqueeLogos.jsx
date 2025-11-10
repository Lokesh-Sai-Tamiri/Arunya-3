const MarqueeLogos = () => {
  const companies = [
    { name: "Premium Villas", image: "/images/p1.png" },
    { name: "Luxury Homes", image: "/images/p2.png" },
    { name: "Elite Properties", image: "/images/p3.png" },
    { name: "Grand Estates", image: "/images/p4.png" },
    { name: "Royal Residences", image: "/images/p5.png" },
    { name: "Exclusive Living", image: "/images/p6.png" },
    { name: "Prestige Homes", image: "/images/p7.png" },
    { name: "Manor Houses", image: "/images/hero-img.png" },
    { name: "Signature Villas", image: "/images/Final.png" },
    { name: "Crown Properties", image: "/images/big-img.png" },
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
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeLogos;

