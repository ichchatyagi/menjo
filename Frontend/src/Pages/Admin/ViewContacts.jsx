import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const ViewContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("https://menjo-gm0f.onrender.com/api/admin/contacts", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Contact Submissions</h2>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c.id}>
                <td className="border p-2">{c.name}</td>
                <td className="border p-2">{c.email}</td>
                <td className="border p-2">{c.message}</td>
                <td className="border p-2">{new Date(c.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default ViewContacts;
