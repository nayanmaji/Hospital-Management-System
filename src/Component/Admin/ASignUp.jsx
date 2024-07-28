import React, { useState } from "react";

export default function ASignUp() {
  const [formData, setFormData] = useState({
    a_id: "",
    a_Name: "",
    a_password: "",
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
    if (formData.a_password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/admin/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          a_id: formData.a_id,
          a_Name: formData.a_Name,
          a_password: formData.a_password,
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
        a_id: "",
        a_Name: "",
        a_password: "",
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
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Admin ID
              </label>
              <input
                name="a_id"
                pattern="[0-9]{9}"
                value={formData.a_id}
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
                name="a_Name"
                value={formData.a_Name}
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
                name="a_password"
                value={formData.a_password}
                onChange={handleChange}
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                min={4}
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
            <a href="/alogin" className="text-xs text-gray-500 uppercase">
              or Login
            </a>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
