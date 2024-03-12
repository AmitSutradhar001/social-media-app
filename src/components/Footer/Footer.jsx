import { Link } from "react-router-dom";
import { Logo } from "../c_index";

export default function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-yellow-300 shadow-yellow-300 shadow-lg rounded-md">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-white font-bold">
                  &copy; Copyright 2024. All Rights Reserved by AS.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12 ">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-lg font-extrabold text-white uppercase ">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base  text-blue-700 font-bold hover:text-white"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base text-blue-700 font-bold hover:text-white"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-lg font-extrabold text-white uppercase t">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base text-blue-700 font-bold hover:text-white"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base text-blue-700 font-bold hover:text-white"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base text-blue-700 font-bold hover:text-white"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base text-blue-700 font-bold hover:text-white"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-lg font-extrabold text-white uppercase ">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base text-blue-700 font-bold hover:text-white"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base text-blue-700 font-bold hover:text-white"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base text-blue-700 font-bold hover:text-white"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
