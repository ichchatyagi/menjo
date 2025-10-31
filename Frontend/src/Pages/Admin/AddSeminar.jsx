import React, { useState } from "react";
import Navbar from "./Navbar";

const AddSeminar = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) return (window.location.href = "/login");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (coverImage) formData.append("cover_image", coverImage);

    try {
      const response = await fetch("http://localhost:5000/api/seminars", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Something went wrong");

      setMessage("Seminar added successfully!");
      setTitle("");
      setDescription("");
      setCoverImage(null);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Add Seminar</h2>
        {message && <p className="mb-2 text-green-600">{message}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
            type="text"
            placeholder="Seminar Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border rounded"
            />
            <textarea
            placeholder="Seminar Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border rounded"
            />
            <input
            type="file"
            accept="image/*"
            onChange={(e) => setCoverImage(e.target.files[0])}
            className="p-2 border rounded"
            />
            <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Add Seminar
            </button>
        </form>
        </div>
    </div>
    </>
  );
};

export default AddSeminar;
