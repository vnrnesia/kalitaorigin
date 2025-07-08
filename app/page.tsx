import { SiteHeader } from "./components/layout/SiteHeader";
import MainSection from "./components/custom/MainSection";
import Brands from "./components/custom/Brands";
import BentoGridStateful from "./components/magicui/BentoGridStateful";
import Testimonals from "./components/custom/Testimonals";
import CtaCard from "./components/custom/CtaCard";
import Footer from "./components/custom/Footer";

import Earn from "./components/custom/Earn";
import { Timeline } from "./components/magicui/timeline";
import { timelineData } from "./components/magicui/timelinedata";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-neutral-900 via-[#862828] to-[#f73545] w-full flex flex-col">
        <SiteHeader />

        <MainSection />

        <div className="mt-auto bg-white w-full">
          <Brands />
        </div>
      </div>

      <div className="max-w-6xl mx-auto md:pt-24">
        <BentoGridStateful />
        <Timeline data={timelineData} />
        <Testimonals />
        <div className="md:py-24">
          <CtaCard />
        </div>
        <Earn />
      </div>

      

      <div className="pt-24">
        <Footer />
      </div>
    </>
  );
}
