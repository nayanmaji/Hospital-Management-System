import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Patient() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ptoken, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("ptoken");
    // console.log('Stored token:', storedToken);
    if (storedToken) {
      setIsLoggedIn(true);
      setToken(storedToken);
    }
  }, []);

  const handleLogin = async (phone, password) => {
    try {
      const response = await axios.post("/login", { phone, password });
      const { ptoken } = response.data;
      localStorage.setItem("ptoken", ptoken);
      // console.log('Token after login:', ptoken);
      setIsLoggedIn(true);
      setToken(ptoken);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("ptoken");
    setIsLoggedIn(false);
    setToken(null);
    console.log("Logged out, token removed");
  };

  return (
    <>
      <div className="flex flex-row-reverse mt-2">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-blue-600 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              Logout
            </span>
          </button>
        ) : (
          <>
            <a
              href="/plogin"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-blue-600 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Login
              </span>
            </a>
            <a
              href="/pregistration"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Registration
              </span>
            </a>
          </>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4">
        <a
          href="/bookapt"
          className="bg-blue-600 sm:mr-1 text-center py-1.5 text-white font-medium"
        >
          Book <br /> Appointment
        </a>
        <a
          href="/alldoctors"
          className="bg-pink-500 text-center py-1.5 text-white font-medium"
        >
          Best Doctors <br /> in India
        </a>
        <a
          href="/clinicalexcellence"
          className="bg-blue-600 sm:mx-1 text-center py-1.5 text-white font-medium"
        >
          Explore our Centres <br /> of Clinical Excellence
        </a>
        <a
          href=""
          className="bg-pink-500 text-center py-1.5 text-white font-medium"
        >
          View <br /> Health Record
        </a>
      </div>
      <div className="grid grid-rows-1 sm:grid-rows-3 grid-flow-col gap-4 p-7 sm:p-16 lg:p-24 text-stone-600 bg-[#DAF5FF]">
        <div className="col-span-2 sm:col-span-2">
          <h3 className="text-[#2293a9] text-4xl font-bold">
            Why Choose My Healthcare?
          </h3>
          <p className="py-8 text-lg">
            Established by Dr Prathap C Reddy in 1983, My Healthcare has a
            robust presence across <br />
            the healthcare ecosystem. From routine wellness & preventive health
            care to innovative <br /> life-saving treatments and diagnostic
            services, My Hospitals has touched more than <br />
            200 million lives from over 120 countries.
          </p>
        </div>
        <div className="col-span-2 row-span-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3">
                  <img src="src/assets/1.svg" alt="" />
                </div>
                <div className="col-span-2">
                  <h4 className="text-[#2293a9] text-2xl font-bold">73+</h4>
                </div>
                <div className="col-span-2 row-span-2">
                  <p>
                    Largest private <br />
                    healthcare network of Hospitals
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3">
                  <img src="src/assets/2.svg" alt="" />
                </div>
                <div className="col-span-2">
                  <h4 className="text-[#2293a9] text-2xl font-bold">400+</h4>
                </div>
                <div className="col-span-2 row-span-2">
                  <p>
                    Largest private network <br /> of clinics across India
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3">
                  <img src="src/assets/3.svg" alt="" />
                </div>
                <div className="col-span-2">
                  <h4 className="text-[#2293a9] text-2xl font-bold">1,100+</h4>
                </div>
                <div className="col-span-2 row-span-2">
                  <p>Diagnostic centres across India</p>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3">
                  <img src="src/assets/2.svg" alt="" />
                </div>
                <div className="col-span-2">
                  <h4 className="text-[#2293a9] text-2xl font-bold">5,000+</h4>
                </div>
                <div className="col-span-2 row-span-2">
                  <p>Pharmacies</p>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3">
                  <img src="src/assets/2.svg" alt="" />
                </div>
                <div className="col-span-2">
                  <h4 className="text-[#2293a9] text-2xl font-bold">10,000+</h4>
                </div>
                <div className="col-span-2 row-span-2">
                  <p>Pin codes Served across India</p>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3">
                  <img src="src/assets/2.svg" alt="" />
                </div>
                <div className="col-span-2">
                  <h4 className="text-[#2293a9] text-2xl font-bold">11,000+</h4>
                </div>
                <div className="col-span-2 row-span-2">
                  <p>Doctors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-3 pl-5 p-10">
          <img
            src="src/assets/why.webp"
            alt="why choose My HealthCare"
            className="rounded-md"
          />
        </div>
      </div>
    </>
  );
}
