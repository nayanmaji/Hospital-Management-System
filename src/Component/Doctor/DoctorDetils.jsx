import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DoctorDetils() {
  const { id } = useParams();
  const [Dr, setDr] = useState([]);
  useEffect(() => {
    async function fetchAppointments() {
      try {
        const response = await fetch(`/api/dr/${encodeURIComponent(id)}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDr(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    }

    fetchAppointments();
  }, [id]);

  if (!Dr) return <p>Loading...</p>;
  return (
    <>
      {/* <Doctor/> */}
      <div className="bg-sky-100 py-10">
        <ul>
          {Dr.map((doctor) => (
            <li key={doctor.dr_id}>
              <img
                src={`${doctor.dr_img}`}
                alt="Image"
                className="h-64 w-64 rounded-full border-4 border-black mx-auto my-4"
              />
              <div className="text-center text-2xl text-slate-900 font-bold">
                <p>{doctor.dr_Name}</p>
              </div>
              <div className="text-center text-l text-slate-700">
                <FontAwesomeIcon icon="fa-solid fa-user-graduate" />{" "}
                <p>{doctor.dr_qualifications}</p>
              </div>
              <div className="text-center text-sm font-bold text-blue-900">
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-stethoscope" /> Specialties
                  : {doctor.dr_specialties}
                </p>
              </div>
              <div className="text-center text-sm font-bold text-blue-900">
                <p>
                  <FontAwesomeIcon icon="fa-solid fa-award" /> Experience :{" "}
                  {doctor.dr_experience}
                </p>
              </div>
              <div className="text-center text-sm font-bold text-blue-600">
                <p>
                  {" "}
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />{" "}
                  {doctor.dr_contactInformation}
                </p>
              </div>
              <div className="text-center text-sm font-bold text-gray-700">
                <p>Registration Number : {doctor.dr_id}</p>
              </div>
              <div className="text-center text-sm font-bold text-gray-700">
                <p>Fees : {doctor.dr_fees}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
