import School from "../database/schools.model.js";

export default async function addSchool(req, res) {
  const { name, address, latitude, longitude } = req.body;
  try {
    await School.create({ name, address, latitude, longitude });
    res.json({
      success: true,
      message: "School added successfully",
    });
  } catch (error) {
    console.log("Error adding school to database: ", error.message);
    res.json({
      success: false,
      message: "Failed to add School to database, Please try again",
    });
  }
}
