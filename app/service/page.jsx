import { Arrow, ListSvg } from "@/components/svg/svg";
import Link from "next/link";

export default function Service() {
  return (
    <div className="ml-20 mt-20 mr-20  md:mt-50">
      <h3 className="text-center text-xl md:text-2xl mt-30 uppercase mb-4 text-indigo-600">
        service
      </h3>
      <h1 className="text-center text-3xl md:text-6xl mb-6">
        Lunching visions, building websites
      </h1>
      <p className="text-center mb-10">
        Secure your seat, fasten your seatbelt, and join us on an interstellar
        journey to
        <strong> turn your web vision into a next level reality.</strong>
      </p>
      <div className="grid md:grid-cols-5 gap-4 ">
        <div className="md:col-span-2 p-8 border border-indigo-200 rounded-md bg-[#0c1021] shadow-md shadow-indigo-200/50">
          <Link href="/contact">
            <h3 className="md:text-2xl text-xl mt-10 mb-1 uppercase text-indigo-600">
              Web application
            </h3>
            <p className="mb-8">
              {" "}
              Tailores web app, bear with marketing website, or cross platform
              solution.Let's get together and discuss your vision to provide a
              custom qoute
            </p>
            <ul className="mb-20">
              <ListSvg>Modern and custom design</ListSvg>
              <ListSvg>Responsive and accessible</ListSvg>
              <ListSvg>Optimized performance</ListSvg>
              <ListSvg>Animation & interactions</ListSvg>
            </ul>
            <strong className="flex gap-3 items-center justify-end">
              secure your package now <Arrow />
            </strong>
          </Link>
        </div>
        <div className="md:col-span-3 p-8 border border-indigo-200 rounded-md  shadow-md shadow-indigo-200/50 bg-[#0c1021]">
          <Link href="/contact">
            <h3 className="text-2xl mt-10 mb-1 text-indigo-600">Website</h3>
            <p className="mb-8">
              {" "}
              There are no limit to your website vision-Let's make it happen
            </p>
            <ul className="mb-30">
              <ListSvg>Modern and custom design</ListSvg>
              <ListSvg>Responsive and accessible</ListSvg>
              <ListSvg>Optimized performance</ListSvg>
              <ListSvg>Animation & interactions</ListSvg>
            </ul>
            <strong className="flex gap-3 items-center justify-end">
              secure your package now <Arrow />
            </strong>
          </Link>
        </div>
      </div>
    </div>
  );
}
