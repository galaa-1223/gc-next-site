import Image from "next/image";
import Link from "next/link";
// import Comments from "./Comments";
import AnimatedButton from "@/components/animation/AnimatedButton";

export default function BlogDetails() {
  return (
    <div className="mxd-section padding-pre-title">
      <div className="mxd-container grid-container">
        <div className="mxd-article-area loading-wrap">
          {/* Article Container Start */}
          <div className="mxd-article-container mxd-grid-item no-margin">
            {/* Article Start */}
            <article className="mxd-article">
              {/* Article Headline Start */}
              <div className="mxd-article__headline">
                <div className="mxd-article__meta">
                  <div className="mxd-article__breadcrumbs loading__item">
                    <span>
                      <Link href={`/`}>Эхлэл</Link>
                    </span>
                    <span className="current-item">
                      Хоёр Их гүрний ерөнхийлөгч нар 3-р сард уулзана
                      {/* <a href="#">My journey into the future of art</a> */}
                    </span>
                  </div>
                  <div className="mxd-article__data loading__item">
                    <span className="meta-date">
                      2026 оны 2 сарын 22
                    </span>
                  </div>
                </div>
                <div className="mxd-article__title loading__item">
                  <h1 className="h1-small">
                    Хоёр Их гүрний ерөнхийлөгч нар 3-р сард уулзана
                  </h1>
                </div>
                <div className="mxd-article__tags loading__item">
                  <span className="tag tag-default tag-outline tag-link-outline">
                    <Link href={`/`}>Гадаад мэдээ  </Link>
                  </span>
                </div>
              </div>
              {/* Article Headline End */}
              {/* Article Thumb Start */}
              <div className="mxd-article__thumb loading__fade">
                <Image
                  alt="Article Thumbnail"
                  src="/images/shi.jpg"
                  width={1920}
                  height={1280}
                />
              </div>
              {/* Article Thumb End */}
              {/* Article Content Start */}
              <div className="mxd-article__content">
                <div className="mxd-article__block">
                  <p className="">
                    АНУ-ын Ерөнхийлөгч Дональд Трамп ирэх 3-р сарын сүүлээр БНХАУ-д айлчлан БНХАУ-ын дарга Ши Жиньпинтэй уулзахаар төлөвлөж байгаа нь дэлхийн эдийн засаг, зах зээлд томоохон нөлөө үзүүлэх үйл явдал болоод байна. Энэхүү уулзалт нь тарифын бодлого, хиймэл оюун ухааны өрсөлдөөн, хоёр улсын эдийн засгийн харилцааны ирээдүйг тодорхойлох өндөр ач холбогдолтой гэж үзэж байна.

Уулзалтын өмнө БНХАУ-ын парламентын чуулган эхэлж, тус улсын эдийн засгийн өсөлтийн зорилт болон дэмжих бодлого зарлагдана. Энэ нь тарифын тодорхойгүй байдал нэмэгдэж буй үед Хятадын эдийн засгийн бодлогын чиглэлийг тодорхойлох чухал үе юм.
                  </p>
                  <p>
                    Хөрөнгө оруулагчид ялангуяа тариф буурах эсэхэд анхаарч байна. Хэрэв хоёр тал тарифын бууралтын талаар эерэг дохио өгвөл хил дамнасан хөрөнгө оруулалт нэмэгдэх, бизнесийн орчин тогтворжих боломжтой.

Сүүлийн жилүүдэд Хятадын экспорт дахь АНУ-ын эзлэх хувь 18%-иас 9.6% хүртэл буурсан нь АНУ-ын тарифын нөлөө харьцангуй багассаныг харуулж байгаа ч худалдааны тодорхойгүй байдал бизнесүүдэд дарамт болж байна. Компаниуд тарифын бодлого байнга өөрчлөгдөж буйгаас шалтгаалан нийлүүлэлт, бараа материалын төлөвлөлт хийхэд хүндрэлтэй хэвээр байна.
                  </p>
                </div>
                
                
              </div>
              {/* Article Content End */}
            </article>
            {/* Article End */}
            
            {/* Article Navigation Start */}
            <div className="mxd-article-navigation">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-6 mxd-article-navigation__navitem left">
                    <AnimatedButton
                      className="btn btn-line-small btn-muted anim-no-delay slide-left"
                      as={"a"}
                      text="Өмнөх"
                      position={"previous"}
                    >
                      <i className="ph ph-arrow-left" />
                    </AnimatedButton>
                    <a className="mxd-article-navigation__link" href="#">
                      <span>
                        Nvidia компанийн тайлан зах зээлийн итгэлийг сэргээлээ
                      </span>
                    </a>
                  </div>
                  <div className="col-6 mxd-article-navigation__navitem right">
                    <AnimatedButton
                      className="btn btn-line-small btn-muted anim-no-delay slide-right"
                      as={"a"}
                      text="Дараагийн"
                      position={"next"}
                    >
                      <i className="ph ph-arrow-right" />
                    </AnimatedButton>
                    <a className="mxd-article-navigation__link" href="#">
                      <span>
                        Биткойн $65,000 -аас доош унаж, тарифын эрсдэл зах зээлийг доргиов
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Article Navigation End */}
            {/* Article Comments Start */}
            {/* <Comments /> */}
            {/* Article Comments End */}
          </div>
          {/* Article Container End */}
        </div>
      </div>
    </div>
  );
}
