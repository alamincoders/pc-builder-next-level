import Image from "next/image";
import React from "react";
import logo from "../../assets/Logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="bg-slate-50">
      <nav className="container mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <details>
                    <summary>Categories</summary>
                    <ul className="p-2 lg:w-60 z-20">
                      <li>
                        <Link href={`/product/cpu`}>CPU / Processor</Link>
                      </li>
                      <li>
                        <Link href={`/product/motherboard`}>Motherboard</Link>
                      </li>{" "}
                      <li>
                        <Link href={`/product/ram`}>RAM</Link>
                      </li>{" "}
                      <li>
                        <Link href={`/product/storage`}>Storage Device</Link>
                      </li>{" "}
                      <li>
                        <Link href={`/product/power-supply`}>Power Supply Unit</Link>
                      </li>{" "}
                      <li>
                        <Link href={`/product/monitor`}>Monitor</Link>
                      </li>{" "}
                      <li>
                        <Link href={`/product/all`}>Other</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>{" "}
                <li>
                  <Link href="/pcBuilder">PC Builder</Link>
                </li>
              </ul>
            </div>
            <Link href="/" className="btn btn-ghost normal-case text-xl">
              <Image src={logo} width={150} height={65} alt="logo" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Categories</summary>
                  <ul className="p-2 lg:w-60 z-20">
                    <li>
                      <Link href={`/product/cpu`}>CPU / Processor</Link>
                    </li>
                    <li>
                      <Link href={`/product/motherboard`}>Motherboard</Link>
                    </li>{" "}
                    <li>
                      <Link href={`/product/ram`}>RAM</Link>
                    </li>{" "}
                    <li>
                      <Link href={`/product/storage`}>Storage Device</Link>
                    </li>{" "}
                    <li>
                      <Link href={`/product/power-supply`}>Power Supply Unit</Link>
                    </li>{" "}
                    <li>
                      <Link href={`/product/monitor`}>Monitor</Link>
                    </li>{" "}
                    <li>
                      <Link href={`/product/all`}>Other</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end space-x-8">
            <Link href="/pcBuilder" className="btn btn-info hidden lg:inline-block pt-4">
              PC Builder
            </Link>{" "}
            <Link href="/signin" className="btn btn-primary">
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
