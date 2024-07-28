import React, { useState } from "react";

export default function PSignUp() {
  const [formData, setFormData] = useState({
    pname: "",
    pphone: "",
    pemail: "",
    page: "",
    pgender: "",
    ppassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.ppassword !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/patient/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pname: formData.pname,
          pphone: formData.pphone,
          pemail: formData.pemail,
          page: formData.page,
          pgender: formData.pgender,
          ppassword: formData.ppassword,
        }),
      });

      if (response.ok) {
        alert("Patient signed up successfully");
        // Reset form or redirect as needed
      } else {
        const data = await response.json();
        alert(data.message || "Unknown error occurred");
      }

      // Reset the form data
      setFormData({
        pname: "",
        pphone: "",
        pemail: "",
        page: "",
        pgender: "",
        ppassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error signing up Patient:", error);
      alert("Error signing up Patient");
    }
  };

  return (
    <div className="py-16">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              "url('https://www.doctorsplaza.in/_next/static/media/top-banner.05984c80.png')",
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>

          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a href="#" className="text-xs text-center text-gray-500 uppercase">
              or login with email
            </a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                name="pname"
                value={formData.pname}
                onChange={handleChange}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Enter Your Email
              </label>
              <input
                name="pemail"
                value={formData.pemail}
                onChange={handleChange}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Enter your Phone Number
              </label>
              <input
                name="pphone"
                pattern="[0-9]{10}"
                value={formData.pphone}
                onChange={handleChange}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="tel"
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Gender
              </label>
              <select
                name="pgender"
                value={formData.pgender}
                onChange={handleChange}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              >
                <option value="">choose a option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Enter Your Age
              </label>
              <input
                name="page"
                min="1"
                value={formData.page}
                onChange={handleChange}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="number"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <input
                name="ppassword"
                minlength="4"
                value={formData.ppassword}
                onChange={handleChange}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Confirm Password
                </label>
              </div>
              <input
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <a href="/plogin" className="text-xs text-gray-500 uppercase">
              or Login
            </a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
