import React, { useState } from "react";

export default function DSignUp() {
  const [formData, setFormData] = useState({
    dr_id: "",
    dr_Name: "",
    dr_specialties: "",
    dr_fees: "",
    dr_qualifications: "",
    dr_experience: "",
    dr_contactInformation: "",
    dr_img: "",
    dr_password: "",
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
    if (formData.dr_password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/dr/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dr_id: formData.dr_id,
          dr_Name: formData.dr_Name,
          dr_specialties: formData.dr_specialties,
          dr_fees: formData.dr_fees,
          dr_qualifications: formData.dr_qualifications,
          dr_experience: formData.dr_experience,
          dr_contactInformation: formData.dr_contactInformation,
          dr_img: formData.dr_img,
          dr_password: formData.dr_password,
        }),
      });

      if (response.ok) {
        alert("Doctor signed up successfully");
        // Reset form or redirect as needed
      } else {
        const data = await response.json();
        alert(data.message || "Unknown error occurred");
      }
      // Reset the form data
      setFormData({
        dr_id: "",
        dr_Name: "",
        dr_specialties: "",
        dr_fees: "",
        dr_qualifications: "",
        dr_experience: "",
        dr_contactInformation: "",
        dr_img: "",
        dr_password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error signing up doctor:", error);
      alert("Error signing up doctor");
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
                Doctor ID
              </label>
              <input
                name="dr_id"
                value={formData.dr_id}
                onChange={handleChange}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                name="dr_Name"
                value={formData.dr_Name}
                onChange={handleChange}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Specialties
              </label>
              <input
                name="dr_specialties"
                value={formData.dr_specialties}
                onChange={handleChange}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Fees
              </label>
              <input
                name="dr_fees"
                value={formData.dr_fees}
                onChange={handleChange}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="number"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Qualifications
              </label>
              <input
                name="dr_qualifications"
                value={formData.dr_qualifications}
                onChange={handleChange}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Experience
              </label>
              <input
                name="dr_experience"
                value={formData.dr_experience}
                onChange={handleChange}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Contact Information
              </label>
              <input
                name="dr_contactInformation"
                value={formData.dr_contactInformation}
                onChange={handleChange}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Image URL
              </label>
              <input
                name="dr_img"
                value={formData.dr_img}
                onChange={handleChange}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <input
                name="dr_password"
                value={formData.dr_password}
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
            <a href="/dlogin" className="text-xs text-gray-500 uppercase">
              or Login
            </a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
