import Contact from "../models/Contact.js";

// Submit Contact Form
export const submitContactForm = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const contact = await Contact.create({ name, email, phone, subject, message });

    res.status(201).json({
      success: true,
      data: contact,
    });
  } catch (err) {
    console.error("Error inserting form data:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Get All Contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ created_at: -1 });

    res.json(contacts);
  } catch (err) {
    console.error("Error fetching data:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
