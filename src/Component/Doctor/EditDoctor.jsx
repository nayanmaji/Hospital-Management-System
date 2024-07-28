import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function EditDoctor() {
  const navigate = useNavigate();
  const location = useLocation();
  const { doctor } = location.state || {};

  const [formData, setFormData] = useState({
    dr_id: "",
    dr_Name: "",
    dr_specialties: "",
    dr_fees: "",
    dr_qualifications: "",
    dr_experience: "",
    dr_contactInformation: "",
    dr_img: [],
    dr_password: "",
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    if (doctor) {
      setFormData({
        dr_id: doctor.dr_id,
        dr_Name: doctor.dr_Name,
        dr_specialties: doctor.dr_specialties,
        dr_fees: doctor.dr_fees,
        dr_qualifications: doctor.dr_qualifications,
        dr_experience: doctor.dr_experience,
        dr_contactInformation: doctor.dr_contactInformation,
        dr_img: doctor.dr_img,
        dr_password: "", 
      });
    }
  }, [doctor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/dr/update/${formData.dr_id}`, formData);
      navigate("/listdoctor"); 
    } catch (err) {
      console.error("Error updating doctor:", err);
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-blue-800">Edit Doctor</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <label
            htmlFor="dr_Name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="dr_Name"
            name="dr_Name"
            value={formData.dr_Name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dr_specialties"
            className="block text-sm font-medium text-gray-700"
          >
            Specialties
          </label>
          <input
            type="text"
            id="dr_specialties"
            name="dr_specialties"
            value={formData.dr_specialties}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dr_fees"
            className="block text-sm font-medium text-gray-700"
          >
            Fees
          </label>
          <input
            type="number"
            id="dr_fees"
            name="dr_fees"
            value={formData.dr_fees}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dr_qualifications"
            className="block text-sm font-medium text-gray-700"
          >
            Qualifications
          </label>
          <input
            type="text"
            id="dr_qualifications"
            name="dr_qualifications"
            value={formData.dr_qualifications}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dr_experience"
            className="block text-sm font-medium text-gray-700"
          >
            Experience
          </label>
          <input
            type="text"
            id="dr_experience"
            name="dr_experience"
            value={formData.dr_experience}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dr_contactInformation"
            className="block text-sm font-medium text-gray-700"
          >
            Contact Information
          </label>
          <input
            type="text"
            id="dr_contactInformation"
            name="dr_contactInformation"
            value={formData.dr_contactInformation}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dr_img"
            className="block text-sm font-medium text-gray-700"
          >
            Images (comma separated URLs)
          </label>
          <input
            type="text"
            id="dr_img"
            name="dr_img"
            value={formData.dr_img.join(",")}
            onChange={(e) =>
              setFormData({ ...formData, dr_img: e.target.value.split(",") })
            }
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dr_password"
            className="block text-sm font-medium text-gray-700"
          >
            Password (Leave blank to keep current)
          </label>
          <input
            type="password"
            id="dr_password"
            name="dr_password"
            value={formData.dr_password}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Update Doctor
        </button>
      </form>
    </div>
  );
}
