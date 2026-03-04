import Link from "next/link";
import Image from "next/image";

import VelocityMarquee from "@/components/animation/VelocityMarquee";
import AnimatedButton from "@/components/animation/AnimatedButton";

export default function MarqueeSlider() {
  return (
    <div className="mxd-section padding-pre-title">
      <div className="mxd-container fullwidth-container">
        {/* Block - Marquee Images One Line Start */}
        <div className="mxd-block">
          <VelocityMarquee className="marquee marquee-right--gsap">
            {/* item */}
            <div className="marquee__item one-line item-vertical has-caption padding-4">
              {/* Section Title Start */}
              <div className="mxd-section-title no-margin">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12">
                      <div className="mxd-section-title__descr">
                        <p>
                          Бондын захиалгаа
                          <br />
                          өгөх
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mxd-section-title__controls">
                        <AnimatedButton
                          text="Дэлгэрэнгүй"
                          className="btn btn-anim btn-default btn-outline opposite slide-right-up"
                          href={`/team`}
                        >
                          <i className="ph-bold ph-arrow-up-right" />
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Section Title Start */}
            </div>
            {/* item */}
            <div className="marquee__item one-line item-vertical image">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/images/bonds/920x800.jpg"
                  width={800}
                  height={920}
                />
              </Link>
            </div>
            {/* item */}
            <div className="marquee__item one-line item-vertical image">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/images/bonds/920x800-1.jpg"
                  width={800}
                  height={920}
                />
              </Link>
            </div>
            {/* item */}
            <div className="marquee__item one-line item-vertical has-caption padding-4">
              {/* Section Title Start */}
              <div className="mxd-section-title no-margin">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12">
                      <div className="mxd-section-title__descr">
                        <p>
                          Шинэ бондтой
                          <br />
                          танилцах
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mxd-section-title__controls">
                        <AnimatedButton
                          text="Танилцах"
                          className="btn btn-anim btn-default btn-outline opposite slide-right-up"
                          href={`/team`}
                        >
                          <i className="ph-bold ph-arrow-up-right" />
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Section Title Start */}
            </div>
            {/* item */}
            <div className="marquee__item one-line item-vertical image">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/images/bonds/920x800.jpg"
                  width={800}
                  height={920}
                />
              </Link>
            </div>
            {/* item */}
            <div className="marquee__item one-line item-vertical image">
              <Link className="marquee__link" href={`/team`}>
                <Image
                  alt="Image"
                  src="/images/bonds/920x800-1.jpg"
                  width={800}
                  height={920}
                />
              </Link>
            </div>
          </VelocityMarquee>
        </div>
        {/* Block - Marquee Images One Line End */}
      </div>
    </div>
  );
}
