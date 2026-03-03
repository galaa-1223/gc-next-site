import AnimatedButton from "@/components/animation/AnimatedButton";
import RevealText from "@/components/animation/RevealText";

export default function About() {
  return (
    <div className="mxd-section padding-pre-pinned-img">
      <div className="mxd-container grid-container">
        {/* Block - About Description with Manifest Start */}
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0 d-xl-flex justify-content-xl-center">
              <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__manifest">
                    <RevealText
                      as="p"
                      className="mxd-manifest mxd-manifest-l reveal-type"
                    >
                      Голомт Капитал ҮЦК ХХК нь 2011 онд Голомт банкны 100 хувийн хөрөнгө оруулалттайгаар үүсгэн байгуулагдсан бөгөөд андеррайтер, брокер, хөрөнгө оруулалтын зөвлөх үйлчилгээг гадаад дотоодын харилцагч, түнш, хамтран ажиллагч харилцагч байгууллагууддаа хүргэж ирсэн.
                    </RevealText>
                    <div className="mxd-manifest__controls">
                      <AnimatedButton
                        text="Бидний тухай"
                        className="btn btn-anim btn-default btn-outline slide-right-up anim-uni-in-up"
                        href={`#`}
                      >
                        <i className="ph-bold ph-arrow-up-right" />
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - About Description with Manifest End */}
      </div>
    </div>
  );
}
