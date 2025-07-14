import ImageSlideshow from "@/components/slide-show/image-slideshow";

export default function AboutPage() {
  return (
    <div className="mt-20 px-10 md:px-20 md:mt-30">
      <div className="grid grid-rows-2 md:grid-rows-1 gap-10  md:grid-cols-2 md:mt-12">
        <div className="pt-25 md:py-20">
          <ImageSlideshow />
        </div>
        <div className="grid justify-center items-center mb-25 md:mb-50 md:pt-24">
          <h3 className="md:text-2xl  text-lg mb-4 uppercase text-indigo-600">
            About Me
          </h3>

          <p className="text-lg">
            Hello,I am a dedicated web developer specializing in Next.js,
            TypeScript, and Tailwind CSS. I focus on delivering modern,
            responsive, and user-friendly web applications that meet client
            goals and provide an excellent user experience. I have experience
            developing a complete e-commerce website featuring product listings,
            a shopping cart, search functionality, and a streamlined checkout
            process. My work emphasizes clean, maintainable code, mobile
            responsiveness, and high performance. I am committed to clear and
            timely communication, careful attention to detail, and delivering
            projects on schedule. My approach ensures that clients receive
            solutions that are both technically sound and aligned with their
            business needs. I look forward to the opportunity to collaborate and
            help bring your project vision to life.
          </p>
        </div>
      </div>
    </div>
  );
}
