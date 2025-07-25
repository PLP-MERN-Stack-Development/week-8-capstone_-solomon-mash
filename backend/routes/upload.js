const express = require('express');
const router = express.Router();
const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const streamifier = require('streamifier');
const dotenv = require("dotenv");
dotenv.config();

const storage = multer.memoryStorage();
const upload = multer({ storage });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// POST /api/upload (multiple images)
router.post('/', upload.array('images'), async (req, res) => {
  try {
    const urls = [];

    for (const file of req.files) {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: 'bikely/bikes',
        },
        (error, result) => {
          if (error) return res.status(500).json({ error });
          urls.push(result.secure_url);

          // when all files are uploaded
          if (urls.length === req.files.length) {
            return res.status(200).json({ urls });
          }
        }
      );

      streamifier.createReadStream(file.buffer).pipe(stream);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Upload failed.' });
  }
});

module.exports = router;
