import AboutDetails from "@/components/AboutDetails";
import AboutUs from "@/components/AboutUs";
import Advertise from "@/components/Advertise";
import Banner from "@/components/Banner";
import Gap from "@/components/Gap";
import Hero from "@/components/Hero";
import Signal from "@/components/Signal";

export default function Home() {
  return (
    <>
      <Hero />
      <Gap />
      <AboutUs />
      <AboutDetails />
      <Signal />
      <Advertise />
      <Banner />
    </>
  );
}
