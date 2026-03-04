import BlogDetails from "@/components/blogs/BlogDetails";
import Blogs from "@/components/homes/Blogs";
import Cta from "@/components/homes/Cta";
import Footer from "@/components/footers/Footer";
import Partners from "@/components/homes/Partners";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Хоёр Их гүрний ерөнхийлөгч нар 3-р сард уулзана",
  description:
    "Хоёр Их гүрний ерөнхийлөгч нар 3-р сард уулзана",
};
export default function BlogSinglePage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <BlogDetails />
        <Blogs desc="" title="Бусад мэдээ" />
        <Cta />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
