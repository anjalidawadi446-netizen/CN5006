const mongoose = require("mongoose");

// ---------- SCHEMA ----------
const PersonSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  salary: Number,
});

// ---------- MODEL ----------
const Person = mongoose.model("Person", PersonSchema, "personCollection");

async function main() {
  const uri =
    "mongodb+srv://admin:admin12345@cluster0.n6ehib1.mongodb.net/Week8?retryWrites=true&w=majority&appName=Cluster0";

  try {
    // ---------- CONNECT ----------
    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB Atlas");

    // ---------- FETCH ALL DOCUMENTS ----------
    const allDocs = await Person.find({});

    console.log("📄 Fetched ALL documents (using find):");
    console.log("Total documents:", allDocs.length);

    allDocs.forEach((p, index) => {
      console.log(
        `${index + 1}. Name: ${p.name} | Age: ${p.age} | Gender: ${p.gender} | Salary: ${p.salary}`
      );
    });

  } catch (err) {
    console.log("❌ Error:", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected");
  }
}

main();
