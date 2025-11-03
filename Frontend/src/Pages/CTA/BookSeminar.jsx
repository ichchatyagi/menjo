import React, { useState, useEffect } from "react";

const BookSeminar = (props) => {
  const [seminars, setSeminars] = useState([]);
  const [seminarId, setSeminarId] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [scheduleId, setScheduleId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://menjo-gm0f.onrender.com/api/seminars")
      .then(res => res.json())
      .then(data => setSeminars(data));
  }, []);

  useEffect(() => {
    const selected = seminars.find(s => s.id === parseInt(seminarId));
    setSchedules(selected?.schedules || []);
    setScheduleId("");
  }, [seminarId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://menjo-gm0f.onrender.com/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ seminar_id: seminarId, schedule_id: scheduleId, name, email, phone })
      });
      const data = await res.json();
      props.setMeet(false)
      if (!res.ok) throw new Error(data.error);
      setMessage("Booking successful!");
      setName(""); setEmail(""); setPhone(""); setSeminarId(""); setScheduleId("");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#E0F1DF] w-96 max-w-[90%] rounded-xl shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-[#066d6d] text-xl font-bold hover:text-[#044c4c]"
          onClick={() => props.setMeet(false)}
        >
          &times;
        </button>

        <h2 className="text-center text-[#066d6d] text-2xl font-semibold mb-4">Book a Seminar</h2>

        {message && <p className="text-center text-[#066d6d] font-medium mb-4">{message}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <select
            value={seminarId}
            onChange={e => setSeminarId(e.target.value)}
            className="p-2 rounded-md border border-[#066d6d] focus:outline-none"
            required
          >
            <option value="">Select Seminar</option>
            {seminars.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
          </select>

          <select
            value={scheduleId}
            onChange={e => setScheduleId(e.target.value)}
            className="p-2 rounded-md border border-[#066d6d] focus:outline-none"
            required
          >
            <option value="">Select Schedule</option>
            {schedules.map((sc, idx) => (
              <option key={idx} value={sc.id}>Date: {sc.date} | Time: {sc.time}</option>
            ))}
          </select>

          <input
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="p-2 rounded-md border border-[#066d6d] focus:outline-none"
            required
          />

          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="p-2 rounded-md border border-[#066d6d] focus:outline-none"
            required
          />

          <input
            placeholder="Phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="p-2 rounded-md border border-[#066d6d] focus:outline-none"
          />

          <button
            type="submit"
            className="bg-[#066d6d] text-white font-bold py-2 rounded-md hover:bg-[#044c4c] transition"
          >
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookSeminar;
