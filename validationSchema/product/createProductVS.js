import { body } from "express-validator";

// Product validation schema
export const createProductValidation = [
  // Name validation
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Product name is required")
    .isLength({ min: 3, max: 100 })
    .withMessage("Product name must be between 3 and 100 characters"),

  // Description validation
  body("description")
    .trim()
    .notEmpty()
    .withMessage("Product description is required")
    .isLength({ min: 10, max: 1000 })
    .withMessage("Description must be between 10 and 1000 characters"),

  // Price validation
  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ min: 0.01 })
    .withMessage("Price must be a positive number")
    .custom((value) => {
      if (value <= 0) {
        throw new Error("Price must be greater than 0");
      }
      return true;
    }),

  // Category validation
  body("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Category must be between 2 and 50 characters"),

  // Stock validation
  body("stock")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Stock must be a non-negative integer"),

  // Brand validation
  body("brand")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Brand must be between 2 and 50 characters"),

  // SKU validation
  body("sku")
    .optional()
    .trim()
    .matches(/^[A-Za-z0-9-_]+$/)
    .withMessage(
      "SKU must contain only letters, numbers, hyphens, and underscores"
    )
    .isLength({ min: 3, max: 20 })
    .withMessage("SKU must be between 3 and 20 characters"),

  // Images validation
  body("images")
    .optional()
    .isArray()
    .withMessage("Images must be an array")
    .custom((value) => {
      if (value && value.length > 5) {
        throw new Error("Maximum 5 images allowed");
      }
      return true;
    }),

  body("images.*")
    .optional()
    .isURL()
    .withMessage("Each image must be a valid URL"),

  // Weight validation
  body("weight")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Weight must be a positive number"),

  // Dimensions validation
  body("dimensions.length")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Length must be a positive number"),

  body("dimensions.width")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Width must be a positive number"),

  body("dimensions.height")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Height must be a positive number"),

  // Status validation
  body("status")
    .optional()
    .isIn(["active", "inactive", "draft"])
    .withMessage("Status must be either active, inactive, or draft"),

  // Tags validation
  body("tags")
    .optional()
    .isArray()
    .withMessage("Tags must be an array")
    .custom((value) => {
      if (value && value.length > 10) {
        throw new Error("Maximum 10 tags allowed");
      }
      return true;
    }),

  body("tags.*")
    .optional()
    .trim()
    .isLength({ min: 2, max: 20 })
    .withMessage("Each tag must be between 2 and 20 characters"),
];

// Validation middleware
export const validateProduct = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      })),
    });
  }
  next();
};

