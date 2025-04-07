import Image from "next/image";

export default function CarouselItem({ siteImage, title, link, siteName }) {
  return (
    <ul className="flex items-center justify-center">
    <li  className="h-[500px] w-[300px]  text-center bg-[#d1d1d1] m-0 text-white">
      <Image src={siteImage} width={300}  height={100} alt={siteName}/>
      <button>
        <a href={link}>{siteName}</a>
      </button>
      <h1>{title}</h1>
      
    </li>
    </ul>
  );
}
