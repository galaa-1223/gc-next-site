import Link from "next/link";
import Image from "next/image";

import AnimatedButton from "@/components/animation/AnimatedButton";

export default function Footer() {
  const footerNavData = [
    {
      title: "Хэрэгцээт холбоосууд",
      links: [
        { label: "Амжилтын товчоон", href: "/" },
        { label: "Данс нээх", href: "/" },
        { label: "Дотоод арилжаанд оролцох", href: "/" },
        { label: "Гадаад арилжаанд оролцох", href: "/" },
        { label: "Хувьцааны санхүүжилт", href: "/" },
        { label: "Бондын санхүүжилт", href: "/" },
        { label: "Уул уурхайн брокер", href: "/" },
        { label: "Мэдээ мэдээлэл", href: "/" },
        { label: "BluePaper", href: "/" },
        { label: "Лого татах", href: "/" }
      ],
    },
    {
      // Combined column: Portfolio + Insights Pages
      groups: [
        {
          title: "Дотоод арилжааны брокер",
          links: [
            { label: "Монголын Хөрөнгийн Бирж" },
            { label: "(+976) 7012-1530", href: "tel:+97670121530" },
            { label: "(+976) 8003-7272", href: "tel:+97680037272" },
            { label: "(+976) 8083-7744", href: "tel:+97680837744" },
          ],
        },
        {
          title: "Гадаад арилжааны брокер",
          links: [
            { label: "АНУ, Канад, Англи, Бусад бирж" },
            { label: "(+976) 8610-3636", href: "tel:+97686103636" },
            { label: "Хонгконгийн бирж" },
            { label: "(+976) 8006-9977", href: "tel:+97680069977" }
          ],
        },
      ],
    }
  ];

  return (
    <footer className="mxd-demo-footer pt-8">
      {/* Footer Background Start */}
      <div className="mxd-demo-footer__bg">
        <Image
          alt="Rayo Image"
          width={1920}
          height={580}
          src="/img/demo/01-footer.webp"
        />
      </div>
      {/* Footer Background End */}
      {/* Footer Container Start */}
      <div className="mxd-container grid-container mxd-section">
        {/* Footer Block - Content Block Start */}
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-xl-3 mxd-demo-footer__item mxd-grid-item">
                <div className="mxd-demo-footer__logo anim-uni-in-up">
                  <a href="#" className="mxd-logo">
                    {/* logo icon */}
                    <svg
                      className="mxd-logo__image"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 195.21 40.06"
                      enableBackground="new 0 0 195.21 40.06"
                      xmlSpace="preserve"
                    >
                      <style
                        type="text/css"
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n              .mxd-logo__bg {\n                fill: var(--base-opp);\n              }\n              .mxd-logo__cat {\n                clip-path: url(#mxd-logo__id);\n                fill: var(--base);\n              }\n            ",
                        }}
                      />
                      {/* <path
                        className="mxd-logo__bg"
                        d="M164,16.83h1.93V14.11l4.66-2.69v5.41h4V18.2h-4V37H166q0-9.38,0-18.75H164V16.83Zm-1.12-3.41a2.7,2.7,0,1,1-2.7-2.69,2.69,2.69,0,0,1,2.7,2.69Zm-5,4.94q0,9.29,0,18.59h4.66V18.36Zm26.47-.11v1.19a6.91,6.91,0,0,0-3.87-1.24c-4.71.11-7.63,4.4-7.63,9.37s2.92,9.26,7.63,9.38a7.07,7.07,0,0,0,3.87-1.24V37h3.75V18.25Zm-48,0v1.19a6.91,6.91,0,0,0-3.87-1.24c-4.7.11-7.63,4.4-7.63,9.37s2.93,9.26,7.63,9.38a7.07,7.07,0,0,0,3.87-1.24V37h3.75V18.25Zm5.24,0h4.86v1.85c2.3-3.07,6.55-2.08,8.44.85,2.29,3.55,1.23,9.21,1.23,9.21-.52,3.3-3.36,7.4-7.16,6.71a3.23,3.23,0,0,1-2.16-1.36v8.58H141.6V18.22Zm48-4.11q0,11.42,0,22.84h4.66V11.42l-4.67,2.69ZM123.34,28.77V37h-8.13s-9.41-1.22-9.41-13.22,10.56-12.31,10.56-12.31h7v8.17h-1.06s-1.55-7.21-5.88-7.21S112,20.86,112,20.86v6.69s-.22,8.31,4.55,8.31,5.65-7.22,5.65-7.22h1.1v.13Zm-69.46,4c.77,2.53,3.34,2.53,4.12,0a34.33,34.33,0,0,0,0-10.32c-.78-2.53-3.35-2.53-4.12,0a33.69,33.69,0,0,0,0,10.32ZM31,32.73c.77,2.53,3.35,2.53,4.12,0a34.33,34.33,0,0,0,0-10.32c-.77-2.53-3.35-2.53-4.12,0a34.33,34.33,0,0,0,0,10.32Zm57.84-15.9h1.93V14.11l4.66-2.69v5.41h4V18.2h-4V37H90.76V18.2H88.83V16.83Zm-16,1.36h0a5.49,5.49,0,0,1,4.31,2.11,5.46,5.46,0,0,1,4.3-2.11h0a5.48,5.48,0,0,1,5.47,5.47V37H82.27V21.87a2,2,0,0,0-4,0V37H73.66V21.87c0-2.27-3.41-3-4,0V37H65.06V18.2h4.66v1a5.5,5.5,0,0,1,3.14-1ZM42.16,14.11q0,11.42,0,22.84h4.66V11.42l-4.67,2.69ZM23.67,19.77V11.43H16.58S6.18,10.7,6.18,24.17c0,8.16,3.27,11.11,5.84,12.17a12.06,12.06,0,0,0,7.56,0c2.19-.77,4.36-2.54,4.36-6.46V23.51H16v1.12h1a2.19,2.19,0,0,1,1.92,2.25v5.56s.16,3.81-3,3.81-3.34-5.1-3.34-5.1S12,17.8,13.78,14.64s4.5-1.88,4.5-1.88,3.12.78,4.32,7l1.07,0Zm174-9.12a2.94,2.94,0,1,1,2.94-2.94,2.94,2.94,0,0,1-2.94,2.94Zm-.12-3.23h-.43v-1h.44a.48.48,0,0,1,.54.49c0,.53-.55.48-.55.48Zm.82.34a1,1,0,0,0,.71-1.08c0-1-1.27-.95-1.27-.95h-1.67v3.8h1V8.1h.3a.66.66,0,0,1,.57.35l.53,1.08h1.05s-.49-1-.68-1.36a.91.91,0,0,0-.52-.41ZM197.68,4a3.71,3.71,0,1,0,3.71,3.71A3.72,3.72,0,0,0,197.68,4ZM33.05,37c-4.7-.12-7.63-4.41-7.63-9.38s2.93-9.26,7.63-9.38c4.7.12,7.62,4.41,7.62,9.38S37.75,36.83,33.05,37Zm22.89,0c-4.71-.12-7.63-4.41-7.63-9.38s2.92-9.26,7.63-9.38c4.7.12,7.62,4.41,7.62,9.38S60.64,36.83,55.94,37ZM146.72,23a40.45,40.45,0,0,0,0,9.07c.43,3.35,4,3.35,4.39,0a40.45,40.45,0,0,0,0-9.07c-.43-3.35-4-3.35-4.39,0Zm-16.29,9.72c.77,2.53,3.35,2.53,4.12,0a34.33,34.33,0,0,0,0-10.32c-.77-2.53-3.35-2.53-4.12,0a34.33,34.33,0,0,0,0,10.32Zm48,0c.77,2.53,3.34,2.53,4.12,0a34.33,34.33,0,0,0,0-10.32c-.78-2.53-3.35-2.53-4.12,0a33.69,33.69,0,0,0,0,10.32Z"
                      /> */}
                      <path className="mxd-logo__bg" d="M164,16.83h1.93V14.11l4.66-2.69v5.41h4V18.2h-4V37H166q0-9.38,0-18.75H164V16.83Zm-1.12-3.41a2.7,2.7,0,1,1-2.7-2.69,2.69,2.69,0,0,1,2.7,2.69Zm-5,4.94q0,9.29,0,18.59h4.66V18.36Zm26.47-.11v1.19a6.91,6.91,0,0,0-3.87-1.24c-4.71.11-7.63,4.4-7.63,9.37s2.92,9.26,7.63,9.38a7.07,7.07,0,0,0,3.87-1.24V37h3.75V18.25Zm-48,0v1.19a6.91,6.91,0,0,0-3.87-1.24c-4.7.11-7.63,4.4-7.63,9.37s2.93,9.26,7.63,9.38a7.07,7.07,0,0,0,3.87-1.24V37h3.75V18.25Zm5.24,0h4.86v1.85c2.3-3.07,6.55-2.08,8.44.85,2.29,3.55,1.23,9.21,1.23,9.21-.52,3.3-3.36,7.4-7.16,6.71a3.23,3.23,0,0,1-2.16-1.36v8.58H141.6V18.22Zm48-4.11q0,11.42,0,22.84h4.66V11.42l-4.67,2.69ZM123.34,28.77V37h-8.13s-9.41-1.22-9.41-13.22,10.56-12.31,10.56-12.31h7v8.17h-1.06s-1.55-7.21-5.88-7.21S112,20.86,112,20.86v6.69s-.22,8.31,4.55,8.31,5.65-7.22,5.65-7.22h1.1v.13Zm-69.46,4c.77,2.53,3.34,2.53,4.12,0a34.33,34.33,0,0,0,0-10.32c-.78-2.53-3.35-2.53-4.12,0a33.69,33.69,0,0,0,0,10.32ZM31,32.73c.77,2.53,3.35,2.53,4.12,0a34.33,34.33,0,0,0,0-10.32c-.77-2.53-3.35-2.53-4.12,0a34.33,34.33,0,0,0,0,10.32Zm57.84-15.9h1.93V14.11l4.66-2.69v5.41h4V18.2h-4V37H90.76V18.2H88.83V16.83Zm-16,1.36h0a5.49,5.49,0,0,1,4.31,2.11,5.46,5.46,0,0,1,4.3-2.11h0a5.48,5.48,0,0,1,5.47,5.47V37H82.27V21.87a2,2,0,0,0-4,0V37H73.66V21.87c0-2.27-3.41-3-4,0V37H65.06V18.2h4.66v1a5.5,5.5,0,0,1,3.14-1ZM42.16,14.11q0,11.42,0,22.84h4.66V11.42l-4.67,2.69ZM23.67,19.77V11.43H16.58S6.18,10.7,6.18,24.17c0,8.16,3.27,11.11,5.84,12.17a12.06,12.06,0,0,0,7.56,0c2.19-.77,4.36-2.54,4.36-6.46V23.51H16v1.12h1a2.19,2.19,0,0,1,1.92,2.25v5.56s.16,3.81-3,3.81-3.34-5.1-3.34-5.1S12,17.8,13.78,14.64s4.5-1.88,4.5-1.88,3.12.78,4.32,7l1.07,0Zm174-9.12a2.94,2.94,0,1,1,2.94-2.94,2.94,2.94,0,0,1-2.94,2.94Zm-.12-3.23h-.43v-1h.44a.48.48,0,0,1,.54.49c0,.53-.55.48-.55.48Zm.82.34a1,1,0,0,0,.71-1.08c0-1-1.27-.95-1.27-.95h-1.67v3.8h1V8.1h.3a.66.66,0,0,1,.57.35l.53,1.08h1.05s-.49-1-.68-1.36a.91.91,0,0,0-.52-.41ZM197.68,4a3.71,3.71,0,1,0,3.71,3.71A3.72,3.72,0,0,0,197.68,4ZM33.05,37c-4.7-.12-7.63-4.41-7.63-9.38s2.93-9.26,7.63-9.38c4.7.12,7.62,4.41,7.62,9.38S37.75,36.83,33.05,37Zm22.89,0c-4.71-.12-7.63-4.41-7.63-9.38s2.92-9.26,7.63-9.38c4.7.12,7.62,4.41,7.62,9.38S60.64,36.83,55.94,37ZM146.72,23a40.45,40.45,0,0,0,0,9.07c.43,3.35,4,3.35,4.39,0a40.45,40.45,0,0,0,0-9.07c-.43-3.35-4-3.35-4.39,0Zm-16.29,9.72c.77,2.53,3.35,2.53,4.12,0a34.33,34.33,0,0,0,0-10.32c-.77-2.53-3.35-2.53-4.12,0a34.33,34.33,0,0,0,0,10.32Zm48,0c.77,2.53,3.34,2.53,4.12,0a34.33,34.33,0,0,0,0-10.32c-.78-2.53-3.35-2.53-4.12,0a33.69,33.69,0,0,0,0,10.32Z" transform="translate(-6.18 -4)" fillRule="evenodd"/>
                    </svg>
                    {/* logo text */}
                  </a>
                </div>
                <div className="mxd-demo-footer__slogan anim-uni-in-up">
                  <p className="t-small t-bright">
                    Парк Плэйс оффис, 4 давхар, 403 тоот, Чингисийн өргөн чөлөө-24, Сүхбаатар дүүрэг, Улаанбаатар хот, Монгол улс
                  </p>
                </div>
                <div className="mxd-demo-footer__btn anim-uni-in-up">
                  <AnimatedButton
                    text="Арилжаанд оролцох"
                    as={"a"}
                    className="btn btn-anim btn-default btn-small btn-accent slide-right"
                    href="https://trader.golomtcapital.com/"
                    target="_blank"
                  >
                    {/* <i className="ph ph-shopping-cart-simple" /> */}
                  </AnimatedButton>
                </div>
              </div>
              <div className="col-12 col-xl-6 mxd-demo-footer__item">
                <nav className="mxd-demo-footer__nav">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      {footerNavData.map((section, index) => (
                        <div
                          key={index}
                          className="col-12 col-md-6 mxd-grid-item mxd-footer-nav__item"
                        >
                          {/* Check if this section contains grouped blocks */}
                          {section.groups ? (
                            section.groups.map((group, gIndex) => (
                              <div
                                key={gIndex}
                                className="mxd-footer-nav__block"
                              >
                                <div className="mxd-footer-nav__title anim-uni-in-up">
                                  <p className="t-140 t-bright t-caption">
                                    {group.title}
                                  </p>
                                </div>
                                <div className="mxd-footer-nav__list">
                                  <ul>
                                    {group.links.map((link, lIndex) => (
                                      <li key={lIndex}>
                                        {link.href ? (
                                        <Link
                                          className="anim-uni-in-up"
                                          href={link.href}
                                          target="_blank"
                                        >
                                          {link.label}
                                        </Link>
                                        ) : (
                                          <span className="t-caption">
                                            {link.label}
                                          </span>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="mxd-footer-nav__block">
                              <div className="mxd-footer-nav__title anim-uni-in-up">
                                <p className="t-140 t-bright t-caption">
                                  {section.title}
                                </p>
                              </div>
                              <div className="mxd-footer-nav__list">
                                <ul>
                                  {section.links.map((link, lIndex) => (
                                    <li key={lIndex}>
                                      <Link
                                        className="anim-uni-in-up"
                                        href={link.href}
                                        target="_blank"
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-12 col-xl-3 mxd-demo-footer__item mxd-grid-item">
                <div className="mxd-demo-footer__promo">
                  <div className="mxd-footer-promo__title anim-uni-in-up">
                    <p className="t-140 t-bright t-caption">
                      Арилжаа болон мэдээллийн сувгууд:
                    </p>
                  </div>
                  <div className="mxd-footer-promo__list">
                    <a
                      className="mxd-footer-promo__item"
                      href="https://trader.golomtcapital.com/"
                      target="_blank"
                    >
                      <Image
                        className="mxd-footer-promo__icon anim-uni-in-up"
                        alt="Golomt capital trader"
                        width={180}
                        height={180}
                        src="/img/demo/icon-gc.png"
                      />
                      <span className="mxd-footer-promo__link anim-uni-in-up">
                        Trader - Арилжаанд оролцох 
                      </span>
                    </a>
                    <a
                      className="mxd-footer-promo__item"
                      href="https://apps.apple.com/us/app/golomt-capital/id1575337215"
                      target="_blank"
                    >
                      <Image
                        className="mxd-footer-promo__icon anim-uni-in-up"
                        alt="Download on the App Store"
                        width={180}
                        height={180}
                        src="/img/demo/icon-ios.png"
                      />
                      <span className="mxd-footer-promo__link anim-uni-in-up">
                        App Store
                      </span>
                    </a>
                    <a
                      className="mxd-footer-promo__item"
                      href="https://play.google.com/store/apps/details?id=com.istock.golomtcapital&hl=en"
                      target="_blank"
                    >
                      <Image
                        className="mxd-footer-promo__icon anim-uni-in-up"
                        alt="Get it on Google Play"
                        width={500}
                        height={500}
                        src="/img/demo/icon-play.png"
                      />
                      <span className="mxd-footer-promo__link anim-uni-in-up">
                        Google Play
                      </span>
                    </a>
                    <a
                      className="mxd-footer-promo__item"
                      href="https://invite.viber.com/?g2=AQB3k0YZREYzMlBvpqPFPavl9BadpfWDfIZ1pL4JM8QF4RmAU9Oo6MwF5xJvp9Af"
                      target="_blank"
                    >
                      <Image
                        className="mxd-footer-promo__icon anim-uni-in-up"
                        alt="Free and secure calls and messages to anyone, anywhere"
                        width={500}
                        height={500}
                        src="/img/demo/icon-viber.png"
                      />
                      <span className="mxd-footer-promo__link anim-uni-in-up">
                        Viber суваг
                      </span>
                    </a>
                    <a
                      className="mxd-footer-promo__item"
                      href="#"
                      target="_blank"
                    >
                      <Image
                        className="mxd-footer-promo__icon anim-uni-in-up"
                        alt="WeChat суваг"
                        width={500}
                        height={500}
                        src="/img/demo/icon-wechat.png"
                      />
                      <span className="mxd-footer-promo__link anim-uni-in-up">
                        WeChat суваг
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Block - Content Block End */}
        {/* Footer Block - Fullwidth Text Start */}
        <div className="mxd-block">
          <div className="mxd-demo-footer__mixdesign mxd-grid-item no-margin">
            <a
              className="anim-uni-in-up"
              href="https://themeforest.net/item/rayo-digital-agency-personal-portfolio-nextjs-template/60468451"
              target="_blank"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 337.05 58"
                fill="currentColor"
              >
                <path d="M78,38.64c-8.12.2-13.17,7.61-13.17,16.19s5,16,13.17,16.19c8.12-.2,13.16-7.61,13.16-16.19S86.07,38.84,78,38.64Zm3.56,25.11c-1.34,4.36-5.78,4.36-7.12,0-.9-2.93-.9-14.9,0-17.83,1.34-4.36,5.78-4.36,7.12,0C82.41,48.85,82.41,60.82,81.51,63.75Z" transform="translate(-31.56 -14.14)" /><path d="M48.49,49.75H50.2a3.8,3.8,0,0,1,3.32,3.9v9.59s.27,6.58-5.22,6.58S42.54,61,42.54,61,41.62,38,44.67,32.52s7.78-3.26,7.78-3.26,5.38,1.35,7.46,12.05l1.85,0V27H49.52s-18-1.25-18,22c0,14.1,5.64,19.19,10.08,21,3.67,1.5,9.45,1.3,13.06,0,3.78-1.34,7.52-4.38,7.52-11.16v-11H48.49Z" transform="translate(-31.56 -14.14)" /><path d="M362.2,14.14a6.41,6.41,0,1,0,6.41,6.4A6.41,6.41,0,0,0,362.2,14.14Zm0,11.48a5.08,5.08,0,1,1,5.08-5.08A5.08,5.08,0,0,1,362.2,25.62Z" transform="translate(-31.56 -14.14)" /><path d="M249.64,71a12.15,12.15,0,0,0,6.69-2.14V71h6.47V38.74h-6.47v2a12.15,12.15,0,0,0-6.69-2.14c-8.12.2-13.16,7.61-13.16,16.18S241.52,70.82,249.64,71Zm-3.56-25.1c1.34-4.36,5.78-4.36,7.12,0,.9,2.93.9,14.9,0,17.83-1.34,4.36-5.78,4.36-7.12,0C245.18,60.82,245.18,48.85,246.08,45.92Z" transform="translate(-31.56 -14.14)" /><path d="M297.47,35.05a4.65,4.65,0,1,0-4.65-4.65A4.66,4.66,0,0,0,297.47,35.05Z" transform="translate(-31.56 -14.14)" /><path d="M348.2,71h8V27l-8.06,4.65Q348.18,51.31,348.2,71Z" transform="translate(-31.56 -14.14)" /><path d="M274.37,74V68.5a5.64,5.64,0,0,0,3.72,2.35C284.65,72,289.55,65,290.46,59.26c0,0,1.83-9.77-2.13-15.9-3.27-5.06-10.59-6.77-14.57-1.48V38.7h-8.39V74Zm-.16-27c.74-5.77,6.84-5.77,7.58,0a69.67,69.67,0,0,1,0,15.68c-.74,5.78-6.84,5.78-7.58,0A69.67,69.67,0,0,1,274.21,47Z" transform="translate(-31.56 -14.14)" /><path d="M301.5,38.93h-8.05q0,16.05,0,32.09h8Z" transform="translate(-31.56 -14.14)" /><path d="M93.69,71h8V27L93.68,31.6Q93.68,51.31,93.69,71Z" transform="translate(-31.56 -14.14)" /><path d="M231.93,56.68s-1.53,12.46-9.76,12.46-7.86-14.34-7.86-14.34V43.24s.15-14.64,7.63-14.64,10.14,12.46,10.14,12.46h1.83V27H221.79s-18.23.52-18.23,21.25S219.8,71,219.8,71h14V56.91l0-.23Z" transform="translate(-31.56 -14.14)" /><path d="M185.64,27l-8.06,4.65v4.68h-3.32v2.38h3.33q0,16.19,0,32.36h8V38.66h6.85V36.28h-6.85Z" transform="translate(-31.56 -14.14)" /><path d="M339.15,40.79a12.15,12.15,0,0,0-6.69-2.14c-8.12.2-13.16,7.61-13.16,16.18s5,16,13.16,16.19a12.15,12.15,0,0,0,6.69-2.14V71h6.47V38.74h-6.47Zm-3.13,23c-1.34,4.36-5.78,4.36-7.12,0-.9-2.93-.9-14.9,0-17.83,1.34-4.36,5.78-4.36,7.12,0C336.92,48.85,336.92,60.82,336,63.75Z" transform="translate(-31.56 -14.14)" /><path d="M322.3,36.28h-6.85V27l-8.06,4.65v4.68h-3.32v2.38h3.32q0,16.19,0,32.36h8.05V38.66h6.85Z" transform="translate(-31.56 -14.14)" /><path d="M363.41,20.63a1.68,1.68,0,0,0,1.22-1.87c0-1.68-2.19-1.63-2.19-1.63h-2.88v6.55h1.68V21.21h.52a1.14,1.14,0,0,1,1,.62l.91,1.86h1.81s-.83-1.75-1.17-2.34A1.52,1.52,0,0,0,363.41,20.63ZM362,20h-.72V18.36H362a.83.83,0,0,1,.93.85C362.94,20.13,362,20,362,20Z" transform="translate(-31.56 -14.14)" /><path d="M117.47,38.64c-8.12.2-13.17,7.61-13.17,16.19s5,16,13.17,16.19c8.12-.2,13.16-7.61,13.16-16.19S125.59,38.84,117.47,38.64ZM121,63.75c-1.34,4.36-5.78,4.36-7.12,0-.9-2.93-.9-14.9,0-17.83,1.34-4.36,5.78-4.36,7.12,0C121.93,48.85,121.93,60.82,121,63.75Z" transform="translate(-31.56 -14.14)" /><path d="M161.54,38.64a9.42,9.42,0,0,0-7.44,3.64,9.4,9.4,0,0,0-12.85-1.92V38.64l-8.05,0V71h8V44.94c.93-5.07,6.81-3.86,6.81,0V71h8.06V45c0-4.5,6.81-4.5,6.81,0V71h8V48.08A9.47,9.47,0,0,0,161.54,38.64Z" transform="translate(-31.56 -14.14)"/>
              </svg>
            </a>
          </div>
        </div>
        {/* Footer Block - Fullwidth Text End */}
      </div>
      {/* Footer Container End */}
    </footer>
  );
}
