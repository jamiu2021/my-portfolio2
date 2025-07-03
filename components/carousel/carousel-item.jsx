export default function CarouselItem({ siteImage, title, link, siteName }) {
  return (
    <div className="flex items-center justify-center">
      <div className="h-[300px] md:h-[400px] w-[300px]  text-center bg-[#0c1021] m-0 text-white">
        <img
          src={siteImage}
          alt={siteName}
          className="h-[150px] w-[300px] md:h-[250px] "
        />
        <div className="mt-10">
          <h1 className="text-xl uppercase mb-4">{title}</h1>
          <button className="py-1 px-2 border border-indigo-600 rounded-2xl">
            <a className="" href={link}>
              {siteName}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
