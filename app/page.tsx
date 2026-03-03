// import Blogs from "@/components/common/Blogs";
// import Cta from "@/components/common/Cta";
import Footer from "@/components/footers/Footer";

// import About from "@/components/homes/home-web-agency/About";

// import Awards from "@/components/common/Awards";

// import Facts from "@/components/common/Facts";
import Hero from "@/components/homes/Hero";
// import Partners from "@/components/homes/home-1/Partners";
// import Services from "@/components/homes/home-web-agency/Services";

export default function HomePage() {
  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content">
        <Hero /> 
        {/* <About />
        <Facts />
        <Services />
        <Awards />
        <Blogs />
        <Cta />
        <Partners /> */}
      </main>
      <Footer />
    </>
  );
}
