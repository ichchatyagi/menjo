import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { toast } from "react-toastify";

const ManageSeminars = () => {
  const [seminars, setSeminars] = useState([]);

  useEffect(() => {
    fetchSeminars();
  }, []);

  const fetchSeminars = async () => {
    const response = await fetch("http://localhost:8000/api/seminars");
    const data = await response.json();
    setSeminars(data);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`http://localhost:8000/api/seminars/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
      fetchSeminars();
      if(response.status !== 200){
        toast.error("Please, delete associated Bookings first.");
      } else {
        toast.success("Seminar deleted successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
    
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Manage Seminars</h2>
            <ul className="space-y-3">
                {seminars.map((seminar) => (
                <li
                    key={seminar.id}
                    className="flex justify-between items-center border p-3 rounded"
                >
                    <span>{seminar.title}</span>
                    <div className="space-x-2">
                    <button
                      className="px-3 py-1 bg-blue-600 text-white rounded">
                        Edit
                    </button>
                    <button
                        onClick={() => handleDelete(seminar.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded"
                    >
                        Delete
                    </button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    </div>
    </>
  );
};

export default ManageSeminars;
