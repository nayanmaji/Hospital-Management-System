import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

export default function Doctor() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dtoken, setDToken] = useState(null);

  useEffect(() => {
    const storedDToken = localStorage.getItem("dtoken");
    // console.log('Stored token:', storedDToken);
    if (storedDToken) {
      setIsLoggedIn(true);
      setDToken(storedDToken);
    }
  }, []);

  const handleLogin = async (id, password) => {
    try {
      const response = await axios.post("/login", { id, password });
      const { dtoken } = response.data;
      localStorage.setItem("dtoken", dtoken);
      // console.log('Token after login:', ptoken);
      setIsLoggedIn(true);
      setDToken(dtoken);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("dtoken");
    setIsLoggedIn(false);
    setDToken(null);
    console.log("Logged out, token removed");
  };

  const handleAppointmentList = (e) => {
    e.preventDefault();
    const doctorName = localStorage.getItem("doctorName");
    const departments = localStorage.getItem("departments");
    if (doctorName && departments) {
      navigate(
        `/appointments/${encodeURIComponent(doctorName)}/${encodeURIComponent(
          departments
        )}`
      );
    } else {
      console.error("Doctor name or departments not found in localStorage");
    }
  };

  const handlePastAppointment = (e) => {
    e.preventDefault();
    const doctorName = localStorage.getItem("doctorName");
    const departments = localStorage.getItem("departments");
    if (doctorName && departments) {
      navigate(
        `/appointments/${encodeURIComponent(doctorName)}/${encodeURIComponent(
          departments
        )}/past`
      );
    } else {
      console.error("Doctor name or departments not found in localStorage");
    }
  };

  const handleDoctorDetails = (e) => {
    e.preventDefault();
    const doctorId = localStorage.getItem("doctorId");

    if (doctorId) {
      navigate(`/${encodeURIComponent(doctorId)}`);
    } else {
      console.error("Doctor ID not found in localStorage");
    }
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
              href="/dlogin"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-blue-600 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Login
              </span>
            </a>
            <a
              href="/dregistration"
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
          href="/appointments/:doctorName/:departmentName"
          className="bg-blue-600 text-center py-1.5 text-white font-medium"
          onClick={handleAppointmentList}
        >
          Appointment <br /> List
        </a>
        <a
          href="/:id"
          className="bg-pink-500 text-center py-1.5 text-white font-medium sm:mx-1"
          onClick={handleDoctorDetails}
        >
          Details
          <br /> of the Doctor
        </a>
        <a
          href="/appointments/:doctorName/:departmentName/past"
          className="bg-blue-600 text-center py-1.5 text-white font-medium"
          onClick={handlePastAppointment}
        >
          Past <br />
          Patient Record
        </a>
      </div>
      <div>
        <div>
          <img src="src\assets\Web.jpg" alt="" className="w-full py-2" />
        </div>
      </div>

      <div className="text-center bg-[#d8ceff] py-12">
        <h6>The My HealthCare</h6>
        <h3>International Patient Care</h3>
        <h5>
          “Bringing healthcare of International standards within the reach of
          every individual.”
        </h5>
        <div className="grid grid-cols-2 gap-4 text-[#483e6d] font-semibold">
          <div className="grid grid-cols-3 gap-4 pl-10">
            <div className="grid place-content-center bg-white rounded-xl m-6 hover:m-6 hover:border-slate-800 border">
              <img src="src\assets\h1.svg" alt="Hospitals" />
              <p>Hospitals</p>
            </div>
            <div className="grid place-content-center bg-white rounded-xl m-6 hover:m-6 hover:border-slate-800 border">
              <img src="src\assets\h2.svg" alt="Speciality" />
              <p>Speciality</p>
            </div>
            <div className="grid place-content-center bg-white rounded-xl m-6 hover:m-6 hover:border-slate-800 border">
              <img src="src\assets\h3.svg" alt="Plan Your Trip" />
              <p>
                Plan <br /> Your Trip
              </p>
            </div>
            <div className="grid place-content-center bg-white rounded-xl m-6 hover:m-6 hover:border-slate-800 border">
              <img src="src\assets\h4.svg" alt="Testimonials" />
              <p>Testimonials</p>
            </div>
            <div className="grid place-content-center bg-white rounded-xl m-6 hover:m-6 hover:border-slate-800 border">
              <img src="src\assets\h5.svg" alt="FAQ’s" />
              <p>FAQ’s</p>
            </div>
            <div className="grid place-content-center bg-white rounded-xl m-6 hover:m-6 hover:border-slate-800 border">
              <img src="src\assets\h6.svg" alt="Find A Doctor" />
              <p>
                Find <br /> A Doctor
              </p>
            </div>
            <div className="grid place-content-center bg-white rounded-xl m-6 hover:m-6 hover:border-slate-800 border">
              <img src="src\assets\h7.svg" alt="Online Consultation" />
              <p>
                Online <br /> Consultation
              </p>
            </div>
            <div className="grid place-content-center bg-white rounded-xl m-6 hover:m-6 hover:border-slate-800 border">
              <img src="src\assets\h8.svg" alt="My HealthCare Insurance" />
              <p>
                My HealthCare <br /> Insurance
              </p>
            </div>
            <div className="grid place-content-center bg-white rounded-xl m-6 hover:m-6 hover:border-slate-800 border">
              <img src="src\assets\h9.svg" alt="Visa " />
              <p>Visa </p>
            </div>
            <div className="col-span-3 mx-12 sm:mx-20 py-4 bg-white hover:bg-indigo-500 rounded-xl text-xl text-[#7c6bbc] hover:text-white">
              <h6>
                <span className="px-3">International Number </span>
                <FontAwesomeIcon icon="fa-solid fa-phone" />
                <span className="px-2 font-semibold">(+91) 12 4444 0000</span>
              </h6>
            </div>
          </div>
          <div>
            <img src="src\assets\h.webp" alt="International Patient Care" />
          </div>
        </div>
      </div>

      <div className="bg-[#d5f2ff] px-16 sm:px-32 py-6 sm:py-12 text-center">
        <div className="bg-white">
          <h4 className="text-[#0C0C0C] text-3xl font-semibold py-5">
            About My HealthCare
          </h4>
          <p className="pb-5 text-slate-700 px-10 text-lg">
            At My HealthCare, we are committed to providing you with a holistic,
            comprehensive service that takes care of all your needs. As the
            leading network of women and children’s hospitals, we have a strong
            legacy of understanding your bodies better than anyone else. As a
            result, we have compiled a few packages to make sure that all
            aspects of your experience with us are covered. Our packages are
            designed to provide you with everything you need in a cost-effective
            manner, and to be by your side through all your phases. Keep reading
            to learn more about which of our handpicked services fall under
            these packages.
          </p>
        </div>
      </div>
    </>
  );
}
