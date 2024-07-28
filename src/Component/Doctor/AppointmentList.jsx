import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AppointmentList() {
  const { doctorName, departmentName } = useParams();
  const [appointments, setAppointments] = useState([]);
  // console.log(doctorName)
  useEffect(() => {
    async function fetchAppointments() {
      try {
        const response = await fetch(
          `/api/patient/appointments/${encodeURIComponent(
            doctorName
          )}/${encodeURIComponent(departmentName)}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    }

    fetchAppointments();
  }, [doctorName, departmentName]);
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-sky-900">Patient List</h1>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-sky-700 border">
          <table className="w-full text-sm text-left rtl:text-center text-black-500">
            <thead className="text-xs text-sky-700 uppercase bg-sky-50 ">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Age</th>
                <th className="px-6 py-3">Gender</th>
                <th className="px-6 py-3">Doctor</th>
                <th className="px-6 py-3">Department</th>
                <th className="px-6 py-3">Date</th>

                <th className="px-6 py-3">Issues</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr
                  key={appointment._id}
                  className="odd:bg-white even:bg-sky-50 border-b "
                >
                  <th className="px-6 py-4 font-medium text-sky-900 whitespace-nowrap ">
                    {appointment.name}
                  </th>
                  <td className="px-6 py-4">{appointment.phone}</td>
                  <td className="px-6 py-4">{appointment.email}</td>
                  <td className="px-6 py-4">{appointment.age}</td>
                  <td className="px-6 py-4">{appointment.gender}</td>
                  <td className="px-6 py-4">{appointment.doctor}</td>
                  <td className="px-6 py-4">{appointment.departments}</td>
                  <td className="px-6 py-4">{appointment.date}</td>
                  <td className="px-6 py-4">{appointment.issues}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
