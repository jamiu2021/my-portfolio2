import ImageSlideshow from "@/components/slide-show/image-slideshow";


export default function AboutPage() {
  return (
    <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:mt-12">
      <div className="mt-20">
        <ImageSlideshow/>
      </div>
      <div className=" ml-20 mr-20 mb-50">
        <h3 className="md:text-2xl text-xl mt-24 mb-4 uppercase text-indigo-600">About</h3>
        <h1 className="md:text-6xl text-4xl mb-4">
          Passionist
        </h1>
        <p>
          We at LOKKEE STUDIOS are problem solvers at heart, fueled by a shared
          passion for exceptional web development and design from the future.
          Founder and visionary behind LOKKEE STUDIOS is Kilian Peters, an
          expert in transforming ideas into future-ready digital realities, with
          his roots in Hamburg, Germany. Go big or go home!
        </p>
      </div>
    </div>
  );
}
