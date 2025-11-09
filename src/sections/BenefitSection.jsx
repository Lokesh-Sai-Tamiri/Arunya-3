import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";
import theme from "../constants/theme";

const BenefitSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Discover the Lifestyle: <br />
            Explore the Key Benefits of Living at Aarunya Villas
          </p>

          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"Sunrise Facing"}
              color={theme.presets.benefitTitles.shelfStable.color}
              bg={theme.presets.benefitTitles.shelfStable.bg}
              className={"first-title"}
              borderColor={theme.presets.benefitTitles.shelfStable.borderColor}
            />
            <ClipPathTitle
              title={"Vastu Compliant"}
              color={theme.presets.benefitTitles.proteinCaffeine.color}
              bg={theme.presets.benefitTitles.proteinCaffeine.bg}
              className={"second-title"}
              borderColor={theme.presets.benefitTitles.proteinCaffeine.borderColor}
            />
            <ClipPathTitle
              title={"Gated Community"}
              color={theme.presets.benefitTitles.recyclable.color}
              bg={theme.presets.benefitTitles.recyclable.bg}
              className={"third-title"}
              borderColor={theme.presets.benefitTitles.recyclable.borderColor}
            />
            <ClipPathTitle
              title={"Prime Location"}
              color={theme.presets.benefitTitles.lactoseFree.color}
              bg={theme.presets.benefitTitles.lactoseFree.bg}
              className={"fourth-title"}
              borderColor={theme.presets.benefitTitles.lactoseFree.borderColor}
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p>And many more premium features ...</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">
        <VideoPinSection />
      </div>
    </section>
  );
};

export default BenefitSection;
