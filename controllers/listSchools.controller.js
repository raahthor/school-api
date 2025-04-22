import School from "../database/schools.model.js";
import getDistance from "../utils/getDistance.js";

export default async function listSchools(req, res) {
  const userLat = parseFloat(req.query.latitude);
  const userLon = parseFloat(req.query.longitude);

  if (isNaN(userLat) || isNaN(userLon)) {
    res.json({
      success: false,
      message: "Invalid coordinates, Please try again !",
    });
  }
  const schools = await School.findAll();
  const schoolsWithDis = schools.map((school) => {
    const distanceFloat = getDistance(
      userLat,
      userLon,
      school.latitude,
      school.longitude
    );
    const distance = Math.floor(distanceFloat * 100) / 100;
    return { ...school.toJSON(), distance };
  });

  const sortedSchools = schoolsWithDis.sort((a, b) => a.distance - b.distance);
  res.json({
    success: true,
    message:
      "Nearest schools to your location ( distance is in KMs ).",
    schools: sortedSchools,
  });
}
