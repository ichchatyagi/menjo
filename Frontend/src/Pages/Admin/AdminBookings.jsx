import React, { useEffect, useState } from "react";
import Navbar from "./Navbar"; // Assuming you have a Navbar component

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token"); // Admin JWT
        const res = await fetch("http://localhost:8000/api/bookings", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to fetch bookings");
        setBookings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <p>Loading bookings...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4">Seminar Bookings</h2>
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border">#</th>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Phone</th>
                <th className="py-2 px-4 border">Seminar</th>
                <th className="py-2 px-4 border">Date</th>
                <th className="py-2 px-4 border">Time</th>
                <th className="py-2 px-4 border">Booked At</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, index) => (
                <tr key={b.id} className="text-center">
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border">{b.name}</td>
                  <td className="py-2 px-4 border">{b.email}</td>
                  <td className="py-2 px-4 border">{b.phone || "-"}</td>
                  <td className="py-2 px-4 border">{b.seminar_id.title}</td>
                  <td className="py-2 px-4 border">
                    {new Date(b.seminar_schedule_id.seminar_date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="py-2 px-4 border">{b.seminar_schedule_id.seminar_time}</td>
                  <td className="py-2 px-4 border">{new Date(b.created_at).toLocaleString()}</td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr>
                  <td colSpan="8" className="py-4 text-center">
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminBookings;
