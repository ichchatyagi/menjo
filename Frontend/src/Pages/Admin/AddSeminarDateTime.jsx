import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const AddSeminarDateTime = () => {
  const [seminars, setSeminars] = useState([]);
  const [seminarId, setSeminarId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://menjo-gm0f.onrender.com/api/seminars")
      .then((res) => res.json())
      .then((data) => setSeminars(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `https://menjo-gm0f.onrender.com/api/seminars/schedule/${seminarId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ 
            schedules: [{ date, time }] // <-- wrap in schedules array
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      setMessage("Schedule added successfully!");
      setDate("");
      setTime("");
    } catch (err) {
      setMessage(err.message);
    }
  };


  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Add Seminar Date & Time</h2>
            {message && <p className="mb-2 text-green-600">{message}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <select
                value={seminarId}
                onChange={(e) => setSeminarId(e.target.value)}
                className="p-2 border rounded"
                >
                <option value="">Select Seminar</option>
                {seminars.map((s) => (
                    <option key={s.id} value={s.id}>
                    {s.title}
                    </option>
                ))}
                </select>
                <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="p-2 border rounded"
                />
                <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="p-2 border rounded"
                />
                <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
                Add Date & Time
                </button>
            </form>
        </div>
    </div>
    </>
  );
};

export default AddSeminarDateTime;
