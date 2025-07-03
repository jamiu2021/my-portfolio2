import CustomCarousel from "@/components/carousel/carousel";

export default function WorkPage() {
  return (
    <div className="mt-30 mb-30 md:mt-50">
      <section className="mt-25">
        <h3 className="text-xl md:text-2xl uppercase text-center text-indigo-600 mb-4">
          work
        </h3>

        <h1 className="text-center text-3xl  md:text-6xl mb-6">
          Dig into our universe
        </h1>

        <CustomCarousel />
      </section>
      <section>
        <h3 className="text-center text-xl md:text-2xl mt-24 mb-4 text-indigo-600 uppercase">
          Customer Stories
        </h3>
        <h1 className="text-center text-3xl md:text-6xl mb-6">
          Trusted by the kindest stories
        </h1>
        <p className="text-center  ">
          Here's a glimpse into the heartfelt experiences of our incredible
          clients. Your trust fuels our passion.
        </p>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  );
}
