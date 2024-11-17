const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');

router.post('/', upload.array('images', 10), (req, res) => {
  const fileUrls = req.files.map(file => file.location);
  res.json({ fileUrls });
});

module.exports = router;