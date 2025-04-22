import { body, validationResult } from "express-validator";

export const validateData = [
  body("name").notEmpty().withMessage("School name is required"),
  body("address").notEmpty().withMessage("Address is required"),
  body("latitude").isFloat({ min: -90, max: 90 }),
  body("longitude").isFloat({ min: -180, max: 180 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.json({
        success: false,
        errors: errors.array(),
        message: "Please enter a valid data !",
      });
    next();
  },
];
