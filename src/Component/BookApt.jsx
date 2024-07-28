import "../App.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function BookApt() {
  const location = useLocation();
  const { doctor } = location.state || {};
  const [departments, setDepartments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    date: "",
    departments: doctor ? doctor.dr_specialties : "",
    doctor: doctor ? doctor.dr_Name : "",
    issues: "",
  });

  useEffect(() => {
    // Fetch departments from the backend
    async function fetchDepartments() {
      try {
        const response = await fetch("/api/dr/departments");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    }

    fetchDepartments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/patient/bookapt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.text();
      alert(result); // Display the result or handle it as needed

      // Reset the form data
      setFormData({
        name: "",
        phone: "",
        email: "",
        age: "",
        gender: "",
        date: "",
        departments: "",
        doctor: "",
        issues: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div>
        <div>
          <img
            src="https://www.motherhoodindia.com/wp-content/uploads/2021/09/Contact-page-Book-an-Appointment_banner_1354X364-px-02-2048x551.jpg"
            alt="Book Appointment"
            className="w-full"
          />
        </div>
      </div>
      <div className="mx-40">
        <div className="mt-20">
          <h3 className="text-2xl">Book an Appointment</h3>
        </div>
        <form onSubmit={handleSubmit} className="text-slate-900">
          <div className="mt-10 sm:col-span-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3"
              />
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone No.
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="age"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Age
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="age"
                  id="age"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="mt-2">
                <select
                  name="gender"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">choose a option</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-3"></div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="departments"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Departments
              </label>
              <div className="mt-2">
                <select
                  name="departments"
                  id="departments"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3"
                  value={formData.departments}
                  onChange={handleChange}
                >
                  <option value="">Select a department</option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="doctor"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Doctor Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="doctor"
                  id="doctor"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3"
                  value={formData.doctor}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <label
              htmlFor="issues"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Write The Issues About Your Health
            </label>
            <div className="mt-2">
              <textarea
                name="issues"
                id="issues"
                cols="30"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3"
                value={formData.issues}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="mt-10 mb-20">
            <center>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </center>
          </div>
        </form>
      </div>
    </>
  );
}
