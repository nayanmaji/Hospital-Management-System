import React, { useEffect, useState } from "react";

export default function AllPatientList() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch("/api/patient/list");
        if (!response.ok) {
          throw new Error("Failed to fetch patients");
        }
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-sky-900">Patient List</h1>
      {patients.length === 0 ? (
        <p>No patients found.</p>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-sky-700 border">
          <table className="w-full text-sm text-left rtl:text-center text-black-500">
            <thead className="text-xs text-sky-700 uppercase bg-sky-50 ">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Age</th>
                <th className="px-6 py-3">Gender</th>
                <th className="px-6 py-3">
                  <div className="text-center py-3"> Appointments</div>
                  <table className="w-full text-sm text-left rtl:text-center text-sky-500 ">
                    <thead className="text-xs text-sky-700 uppercase ">
                      <tr>
                        <th className="px-6 py-3">Doctor</th>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3">Department</th>
                        <th className="px-6 py-3">Issues</th>
                      </tr>
                    </thead>
                  </table>
                </th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr
                  key={index}
                  className="odd:bg-white even:bg-sky-50 border-b "
                >
                  <th className="px-6 py-4 font-medium text-sky-900 whitespace-nowrap ">
                    {patient.patientInfo.pname}
                  </th>
                  <td className="px-6 py-4">{patient.patientInfo.pphone}</td>
                  <td className="px-6 py-4">{patient.patientInfo.pemail}</td>
                  <td className="px-6 py-4">{patient.patientInfo.page}</td>
                  <td className="px-6 py-4">{patient.patientInfo.pgender}</td>
                  <td className="px-6 py-4">
                    {patient.appointments.length > 0 ? (
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <tbody>
                          {patient.appointments.map((appointment, idx) => (
                            <tr key={idx} className="border-b border-sky-200 ">
                              <td className="px-6 py-4 bg-sky-50 ">
                                {appointment.doctor}
                              </td>
                              <td className="px-6 py-4">
                                {new Date(appointment.date).toLocaleString()}
                              </td>
                              <td className="px-6 py-4 bg-sky-50 ">
                                {appointment.departments}
                              </td>
                              <td className="px-6 py-4">
                                {appointment.issues}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p className="text-center text-gray-500 ">
                        No appointments found for this patient.
                      </p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
