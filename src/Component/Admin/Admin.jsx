import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [atoken, setAToken] = useState(null);

  useEffect(() => {
    const storedAToken = localStorage.getItem("atoken");
    console.log("Stored token:", storedAToken);
    if (storedAToken) {
      setIsLoggedIn(true);
      setAToken(storedAToken);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("atoken");
    setIsLoggedIn(false);
    setAToken(null);
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
              href="/alogin"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-blue-600 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Login
              </span>
            </a>
            <a
              href="/aregistration"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Registration
              </span>
            </a>
          </>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <a
          href="/listdoctor"
          className="bg-blue-600 text-center py-1.5 text-white font-medium"
        >
          List of <br /> All Doctors
        </a>
        <a
          href="/allpatientlist"
          className="bg-pink-500 text-center py-1.5 text-white font-medium sm:mx-1"
        >
          List of <br /> All Patients
        </a>
        <a
          href="/getallcontactus"
          className="bg-blue-600 text-center py-1.5 text-white font-medium"
        >
          List of <br /> All Messages
        </a>
      </div>
      <div>
        <section
          className="bg-cover tracking-widest text-red-950"
          style={{ backgroundImage: "url(/path/to/your/assets/header-bg.png)" }}
        >
          <div className="py-24 text-center">
            <h3 className="text-4xl font-semibold py-2">Privacy Policy</h3>
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />{" "}
            <FontAwesomeIcon icon="fa-solid fa-droplet" />{" "}
            <FontAwesomeIcon icon="fa-solid fa-minus" />{" "}
            <FontAwesomeIcon icon="fa-solid fa-hand-holding-medical" />{" "}
            <FontAwesomeIcon icon="fa-solid fa-minus" />{" "}
            <FontAwesomeIcon icon="fa-solid fa-droplet" />{" "}
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            <p className="text-xl py-2">
              My HealthCare <FontAwesomeIcon icon="fa-solid fa-arrow-right" />{" "}
              <span>Privacy Policy</span>
            </p>
          </div>
        </section>
      </div>
      <div className="px-36 py-10 border">
        <p className="font-semibold text-slate-700 tracking-wider">
          We, at My HealthCare, aim to respect the privacy of each &
          every individual who shares their data with us. Your privacy
          protection is very important to us & we attempt to take due care and
          protection of the detailed information that you share.
        </p>
        <ol className="list-decimal">
          <li className="font-bold text-red-950 pt-7 pb-2 tracking-wider">
            ACCESS :
          </li>
          <p className="font-semibold text-slate-700 tracking-wider">
            We have access to your personal information that is collected
            directly from you, third-parties, and through our Website.
          </p>
          <li className="font-bold text-red-950 pt-7 pb-2 tracking-wider">
            CONSENT :
          </li>
          <p className="font-semibold text-slate-700 tracking-wider">
            By providing us with your personal information, you agree that you
            have freely consented to the collection, storage, processing,
            disclosure, and proper transfer of your personal information in
            accordance with our Privacy Policy at My HealthCare.
          </p>
          <li className="font-bold text-red-950 pt-7 pb-2 tracking-wider">
            CONTROL OVER YOUR PERSONAL INFORMATION :
          </li>
          <p className="font-semibold text-slate-700 tracking-wider">
            If you wish to rectify the Personal Information that we may have
            collected or need to withdraw your consent at any point in time, you
            must inform us via email at{" "}
            <span className="text-green-700 underline">xxxxxx@xxxx.xxx</span>.
          </p>
          <li className="font-bold text-red-950 pt-7 pb-2 tracking-wider">
            RIGHT TO CHANGE THE PRIVACY POLICY :
          </li>
          <p className="font-semibold text-slate-700 tracking-wider">
            At My HealthCare, we reserve the right to change this
            Privacy Policy from time to time. Although we will not reduce your
            rights without your consent, we will always inform you of the date
            when the last changes were published and offer you access to the
            modified versions for your review.
          </p>
          <li className="font-bold text-red-950 pt-7 pb-2 tracking-wider">
            HOW WE COLLECT YOUR PERSONAL INFORMATION :
          </li>
          <p className="font-semibold text-slate-700 tracking-wider">
            – When you visit our website and register there.
          </p>
          <p className="font-semibold text-slate-700 tracking-wider py-3">
            – When you provide your details to a healthcare professional of
            My HealthCare.
          </p>
          <p className="font-semibold text-slate-700 tracking-wider">
            – When you fill the patient registration form or use the features on
            our Website.
          </p>
          <li className="font-bold text-red-950 pt-7 pb-2 tracking-wider">
            RIGHT TO SHARE AND TRANSFER YOUR PERSONAL INFORMATION :
          </li>
          <p className="font-semibold text-slate-700 tracking-wider">
            Once you give us your consent, we hold the right to exchange,
            transfer, share, or part with all or any of your Personal
            Information across countries or with the Cloud Service Provider or
            with our affiliates, agents, third-party service providers, or banks
            and financial institutions.
          </p>
          <li className="font-bold text-red-950 pt-7 pb-2 tracking-wider">
            UPDATING YOUR PERSONAL INFORMATION :
          </li>
          <p className="font-semibold text-slate-700 tracking-wider">
            If you need to rectify or update your personal information, you may
            send updates and corrections to us at{" "}
            <span className="text-green-700 underline">xxxxxx@xxxx.xxx</span>,
            and we will take all reasonable efforts to incorporate the changes
            as soon as possible.
          </p>
          <li className="font-bold text-red-950 pt-7 pb-2 tracking-wider">
            TERM OF STORAGE OF PERSONAL INFORMATION :
          </li>
          <p className="font-semibold text-slate-700 tracking-wider">
            My HealthCare will store your personal information for a
            period of 4–5 years from the last date of use of the Services, after
            which it will require updating or modifying.
          </p>
          <li className="font-bold text-red-950 pt-7 pb-2 tracking-wider">
            COMPLIANCE WITH LAWS :
          </li>
          <p className="font-semibold text-slate-700 tracking-wider">
            If any of these terms of the policy are violated or found not in
            accordance with the policy, you will not be allowed to use the
            services of the website.
          </p>
        </ol>
      </div>
    </>
  );
}
