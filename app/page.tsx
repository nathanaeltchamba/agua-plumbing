import AboutUs from "@/components/AboutUs";
import Advertise from "@/components/Advertise";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import ServicesDetails from "@/components/ServiceDetails";
import Signal from "@/components/Signal";

export default function Home() {
  return (
    <>
      <Hero />
      <Advertise />
      <Signal />
      <AboutUs />
      <ServicesDetails />
      <Banner />
    </>
  );
}
