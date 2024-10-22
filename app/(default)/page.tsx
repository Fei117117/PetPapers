export const metadata = {
  title: "PetPapers",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Help from "@/components/how-this-can-help";
import Feature from "@/components/feature";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Help />
      <LargeTestimonial />

      {/* <BusinessCategories /> */}
      {/* <FeaturesPlanet /> */}

      <Cta />
    </>
  );
}
