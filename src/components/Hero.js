import Link from "next/link";
import heroImg from "@/assets/hero.png";
import heroImg2 from "@/assets/hero2.png";
import heroImg3 from "@/assets/hero3.png";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="relative bg-white pt-16">
        <div className="container mx-auto">
          <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
            <div className="w-full px-4">
              <div className="">
                <h1 className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                  ULTIMATE PC Startup Website with <br /> PC Builder
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-body-color">
                  With ULTIMATE PC, business and students thrive together. Business can perfectly match their staffing to changing demand throughout
                  the dayed.
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <Link
                      href="/pcBuilder"
                      className="inline-flex items-center justify-center px-6 py-4 text-base font-normal text-center text-white rounded-lg bg-primary hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                    >
                      Get Started
                    </Link>
                  </li>
                </ul>
                <div className="grid grid-cols-2 gap-4 mt-5 lg:mt-12">
                  <div className="relative inline-block pt-11 lg:pt-0">
                    <Image src={heroImg2} alt="hero" className="w-full" />
                  </div>{" "}
                  <div className="relative inline-block pt-11 lg:pt-0">
                    <Image src={heroImg3} alt="hero" className="w-full" />
                  </div>{" "}
                </div>
              </div>
            </div>

            <div className="w-full px-4 ">
              <div className="">
                <div className="relative inline-block pt-11 lg:pt-0">
                  <Image src={heroImg} alt="hero" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
