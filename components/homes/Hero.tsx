import AnimatedButton from "@/components/animation/AnimatedButton";
import AnimateRotation from "@/components/animation/AnimateRotation";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="mxd-section">
      <div className="mxd-hero-06">
        <div className="mxd-hero-06__wrap loading-wrap">
          <div className="mxd-hero-06__top">
            <div className="mxd-hero-06__content">
              <div className="mxd-hero-06__video">
                <video
                  className="video"
                  preload="auto"
                  autoPlay
                  loop
                  muted
                  poster="video/1920x1080_video-03.webp"
                >
                  <source type="video/mp4" src="video/promo.mp4" />
                  {/* <source
                    type="video/webm"
                    src="video/1920x1080_video-03.webm"
                  />
                  <source type="video/ogv" src="video/1920x1080_video-03.ogv" /> */}
                </video>
                <div className="hero-06-video__cover" />
              </div>
              <div className="mxd-hero-06__data">
                <div className="mxd-hero-06__list">
                  <div className="mxd-paragraph__lists">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-6 col-lg-4 col-xl-2 loading__item">
                          <ul>
                            <li>
                              <p className="t-small">Хувьцааны арилжаа</p>
                            </li>
                            <li>
                              <p className="t-small">Компанийн бонд</p>
                            </li>
                            <li>
                              <p className="t-small">Хөрөнгөөр баталгаажсан үнэт цаас</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-lg-4 col-xl-2 loading__item">
                          <ul>
                            <li>
                              <p className="t-small">Арилжааны данс нээх</p>
                            </li>
                            <li>
                              <p className="t-small">Судалгаа, мэдээлэл</p>
                            </li>
                            <li>
                              <p className="t-small">Зөвлөгөө</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-hero-06__headline">
                  <div className="hero-06-headline__descr">
                    <p className="loading__item">
                      Та хөрөнгө оруулалтаа дараагийн түвшинд гаргахад бэлэн үү?
                    </p>
                    <div className="hero-06-headline__btn loading__item">
                      <a
                        href="#"
                        className="btn-rotating btn-rotating-blur-outline ver-04 permanent-desktop"
                      >
                        {/* SVG rotating text */}
                        <AnimateRotation
                          as="svg"
                          version="1.1"
                          id="scrollDown"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 160 160"
                          enableBackground={"new 0 0 160 160"}
                          xmlSpace="preserve"
                          className="btn-rotating__text animate-rotation"
                          value={360}
                        >
                          <defs>
                            <path
                              id="textPath"
                              d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"
                            />
                          </defs>
                          <g>
                            <use xlinkHref="#textPath" fill="none" />
                            <text>
                              {/* button text here!!! */}
                              <textPath xlinkHref="#textPath">
                                Хөрөнгийн зах зээлийн шинэ соёлыг түгээнэ
                              </textPath>
                            </text>
                          </g>
                        </AnimateRotation>
                        {/* image */}
                        <Image
                          className="btn-rotating__image"
                          alt="Object"
                          src="/img/icons/300x300_obj.png"
                          width={300}
                          height={300}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="hero-06-headline__content">
                    <h1 className="hero-06-headline__title">
                      Digital designer, creative developer, illustrator
                    </h1>
                    <div className="mxd-hero-06__marquee loading__item">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mxd-hero-06__bottom loading__fade">
            <div className="mxd-hero-06__mark">
              <div className="mxd-hero__mark">
                <span className="mark-icon" />
                <span className="mark-text">Бондын захиалга өгөх</span>
              </div>
            </div>
            <div className="mxd-hero-06__more">
              <AnimatedButton
                text="Бидний үйлчилгээ"
                as={"a"}
                className="btn btn-line-medium btn-anim btn-anim-medium slide-down"
                href="#services"
              >
                <i className="ph-bold ph-arrow-elbow-right-down" />
              </AnimatedButton>
            </div>
          </div>
          <div className="mxd-hero-06__btn-mobile">
            <a
              href="#"
              className="btn-rotating btn-rotating-blur-outline ver-04 permanent-desktop"
            >
              {/* SVG rotating text */}
              <AnimateRotation
                as="svg"
                version="1.1"
                id="scrollDown"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 160 160"
                enableBackground={"new 0 0 160 160"}
                xmlSpace="preserve"
                className="btn-rotating__text animate-rotation"
                value={360}
              >
                <defs>
                  <path
                    id="textPath"
                    d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"
                  />
                </defs>
                <g>
                  <use xlinkHref="#textPath" fill="none" />
                  <text>
                    {/* button text here!!! */}
                    <textPath xlinkHref="#textPath">
                      Хөрөнгийн зах зээлийн шинэ соёлыг түгээнэ
                    </textPath>
                  </text>
                </g>
              </AnimateRotation>
              {/* image */}
              <Image
                className="btn-rotating__image"
                alt="Object"
                src="/img/icons/300x300_obj-btn-03.webp"
                width={300}
                height={300}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
