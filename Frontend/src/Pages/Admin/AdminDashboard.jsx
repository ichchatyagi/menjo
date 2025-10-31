import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUser(payload);
    } catch (err) {
      console.error("Invalid token", err);
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  if (!user) return null;

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <p className="text-lg mb-4">
          Welcome, <span className="font-semibold">{user.username}</span>
        </p>

        {/* Admin Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div onClick={() => navigate('/admin/addseminar')} className="p-4 bg-green-100 rounded-lg shadow hover:shadow-md cursor-pointer">
            <h2 className="text-lg font-semibold">Add Seminar</h2>
            <p className="text-sm text-gray-600">Create a new seminar event</p>
          </div>

          <div onClick={() => navigate('/admin/manageseminar')} className="p-4 bg-blue-100 rounded-lg shadow hover:shadow-md cursor-pointer">
            <h2 className="text-lg font-semibold">Manage Seminars</h2>
            <p className="text-sm text-gray-600">Edit or delete existing seminars</p>
          </div>

          <div onClick={() => navigate('/admin/seminarslots')} className="p-4 bg-yellow-100 rounded-lg shadow hover:shadow-md cursor-pointer">
            <h2 className="text-lg font-semibold">Add Seminar Date/Time</h2>
            <p className="text-sm text-gray-600">Schedule timings for seminars</p>
          </div>

          <div onClick={() => navigate('/admin/contacts')} className="p-4 bg-purple-100 rounded-lg shadow hover:shadow-md cursor-pointer">
            <h2 className="text-lg font-semibold">View Contacts</h2>
            <p className="text-sm text-gray-600">See all contact form submissions</p>
          </div>

          <div onClick={() => navigate('/admin/bookings')} className="p-4 bg-purple-100 rounded-lg shadow hover:shadow-md cursor-pointer">
            <h2 className="text-lg font-semibold">View Bookings</h2>
            <p className="text-sm text-gray-600">See all bookings of Seminars</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminDashboard;