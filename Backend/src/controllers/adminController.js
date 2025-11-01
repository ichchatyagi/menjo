import Contact from "../models/Contact.js";

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ created_at: -1 });
    
    console.log(`✅ Found ${contacts.length} contacts`);
    
    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (err) {
    console.error("❌ Error fetching contacts:", err.message);
    res.status(500).json({ error: "Server error", details: err.message });
  }
};