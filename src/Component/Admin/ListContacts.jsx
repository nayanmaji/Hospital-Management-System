import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ListContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("/api/admin/getallcontactus");
        setContacts(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
        setContacts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const toggleSeenStatus = async (id, currentStatus) => {
    try {
      const response = await axios.put(`/api/admin/update-seen/${id}`, {
        seen: !currentStatus,
      });
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact._id === id ? { ...contact, seen: !currentStatus } : contact
        )
      );
    } catch (error) {
      console.error("Error updating seen status:", error);
      setError("Error updating seen status");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          {contacts.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                      Email
                    </th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                      Subject
                    </th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                      Message
                    </th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {contacts.map((contact) => (
                    <tr key={contact._id} className="hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                        {contact.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                        {contact.subject}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                        {contact.message}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                        {contact.seen ? "Seen" : "Unseen"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                        <input
                          type="checkbox"
                          checked={contact.seen}
                          onChange={() =>
                            toggleSeenStatus(contact._id, contact.seen)
                          }
                          className="form-checkbox h-5 w-5 text-green-600 bg-slate-300"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No messages available</p>
          )}
        </div>
      </div>
    </div>
  );
}
