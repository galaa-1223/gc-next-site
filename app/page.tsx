import Blogs from "@/components/homes/Blogs";
import Cta from "@/components/homes/Cta";
import Footer from "@/components/footers/Footer";
import About from "@/components/homes/About";
import Awards from "@/components/homes/Awards";
import Facts from "@/components/homes/Facts";
import Hero from "@/components/homes/Hero";
import Partners from "@/components/homes/Partners";
import Services from "@/components/homes/Services";

export default function HomePage() {
  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content">
        <Hero /> 
        <About />
        <Facts />
        <Services />
        <Awards />
        <Blogs />
        <Cta />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
