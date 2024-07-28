import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function ListDoctor() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editDoctor, setEditDoctor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("/api/dr/getdoctors");
        setDoctors(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
        setDoctors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleBookAppointment = (doctor) => {
    navigate("/bookapt", { state: { doctor } });
  };

  const handleDeleteDoctor = async (doctorId) => {
    try {
      await axios.delete(`/api/dr/delete/${doctorId}`);
      setDoctors(doctors.filter((doctor) => doctor.dr_id !== doctorId));
    } catch (err) {
      console.error("Error deleting doctor:", err);
      setError(err.message);
    }
  };

  const handleEditDoctor = (doctor) => {
    setEditDoctor(doctor);
    navigate("/editdoctor", { state: { doctor } }); // Navigate to an edit page
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-blue-800">
            <FontAwesomeIcon
              icon="fa-solid fa-user-doctor"
              className=" pr-2 text-blue-800"
            />
            Best Doctors in India
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {doctors.length > 0 ? (
              doctors.map((doctor) => (
                <div
                  key={doctor.dr_id}
                  className="group relative border border-gray-300 p-4"
                >
                  <div className="divide-y divide-gray-200">
                    <div className="pb-3">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-40 lg:w-40 rounded-full border border-sky-500">
                        {doctor.dr_img && doctor.dr_img.length > 0 && (
                          <div>
                            {doctor.dr_img.map((img, index) => (
                              <img
                                key={index}
                                src={img}
                                alt={`Doctor ${doctor.dr_Name}`}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-l text-gray-800">
                            {doctor.dr_Name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            <FontAwesomeIcon icon="fa-solid fa-user-graduate" />{" "}
                            {doctor.dr_qualifications}
                          </p>

                          <p className="mt-1 text-sm text-gray-500">
                            <FontAwesomeIcon icon="fa-solid fa-award" />{" "}
                            {doctor.dr_experience}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            <FontAwesomeIcon icon="fa-solid fa-location-dot" />{" "}
                            {doctor.dr_contactInformation}
                          </p>
                        </div>
                        <p className="text-xs font-medium text-gray-900">
                          <FontAwesomeIcon icon="fa-solid fa-stethoscope" />{" "}
                          {doctor.dr_specialties}
                        </p>
                      </div>
                    </div>
                    <div className="pt-3 flex flex-row-reverse">
                      <div className="basis-1/5">
                        <p className="text-sm font-medium text-cyan-800">
                          <FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />{" "}
                          {doctor.dr_fees}
                        </p>
                      </div>
                      <div className="basis-4/5">
                        <button
                          type="button"
                          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                          onClick={() => handleBookAppointment(doctor)}
                        >
                          Book Appointment
                        </button>
                        <button
                          type="button"
                          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                          onClick={() => handleDeleteDoctor(doctor.dr_id)}
                        >
                          Delete Doctor
                        </button>
                        <button
                          type="button"
                          className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                          onClick={() => handleEditDoctor(doctor)}
                        >
                          Edit Doctor
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No doctors available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}