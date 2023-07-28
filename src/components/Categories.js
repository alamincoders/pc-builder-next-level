/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";

const Categories = () => {
  const [showCard, setShowCard] = useState("all");

  const handleCategory = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-16 pb-12 lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="block mb-2 text-lg font-semibold text-primary">Our Categories</span>
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">Our Featured Categories</h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleCategory("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all" ? "activeClasses bg-primary text-white" : "inactiveClasses"
                    }`}
                  >
                    All
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleCategory("cpu")}
                    className={`inline-block  rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "cpu" ? "activeClasses bg-primary text-white" : "inactiveClasses"
                    }`}
                  >
                    CPU / Processor
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleCategory("motherboard")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "motherboard" ? "activeClasses bg-primary text-white" : "inactiveClasses"
                    }`}
                  >
                    Motherboard
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleCategory("ram")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "ram" ? "activeClasses bg-primary text-white" : "inactiveClasses"
                    }`}
                  >
                    RAM
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleCategory("storage")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "storage" ? "activeClasses bg-primary text-white" : "inactiveClasses"
                    }`}
                  >
                    Storage Device
                  </button>
                </li>{" "}
                <li className="mb-1">
                  <button
                    onClick={() => handleCategory("power-supply")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "power-supply" ? "activeClasses bg-primary text-white" : "inactiveClasses"
                    }`}
                  >
                    Power Supply Unit
                  </button>
                </li>{" "}
                <li className="mb-1">
                  <button
                    onClick={() => handleCategory("monitor")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "monitor" ? "activeClasses bg-primary text-white" : "inactiveClasses"
                    }`}
                  >
                    Monitor
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
              category="cpu"
              title="CPU / Processor"
              button="View Products"
              buttonHref="/product/cpu"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
              category="motherboard"
              title="Motherboard"
              button="View Products"
              buttonHref="/product/motherboard"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
              category="ram"
              title="RAM"
              button="View Products"
              buttonHref="/product/ram"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
              category="storage"
              title="Storage Device"
              button="View Products"
              buttonHref="/product/storage"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
              category="power-supply"
              title="Power Supply Unit"
              button="View Products"
              buttonHref="/product/power-supply"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
              category="monitor"
              title="Monitor"
              button="View Products"
              buttonHref="/product/monitor"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;

const PortfolioCard = ({ showCard, category, ImageHref, title, button, buttonHref }) => {
  return (
    <>
      <div className={`w-full px-4 md:w-1/2 xl:w-1/3 ${showCard === "all" || showCard === category.toLowerCase() ? "block" : "hidden"}`}>
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-lg">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 px-3 -mt-20 text-center bg-white rounded-lg shadow-lg mx-7 py-9">
            <span className="block mb-2 text-sm font-semibold text-primary">{category}</span>
            <h3 className="mb-4 text-xl font-bold text-dark">{title}</h3>
            <Link
              href={buttonHref}
              className="inline-block py-3 text-sm font-semibold transition border rounded-md px-7 text-body-color hover:border-primary hover:bg-primary hover:text-white"
            >
              {button}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
