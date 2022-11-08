const express = require("express");
const router = express.Router();
const { handleRefreshToken } = require("../controllers/refreshTokenController");

/**
 * @route GET /dashboard/
 * @desc dashboard
 */
router.get("/", handleRefreshToken);

module.exports = router;
