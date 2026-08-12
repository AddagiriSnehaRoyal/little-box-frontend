const express = require("express");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const router = express.Router();


// Store uploaded files temporarily in memory
const upload = multer({
    storage: multer.memoryStorage()
});


// UPLOAD MEDIA
router.post("/", upload.single("file"), async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            });

        }


        const uploadResult =
            await new Promise((resolve, reject) => {

                const stream =
                    cloudinary.uploader.upload_stream(
                        {
                            folder: "little-box-of-love",
                            resource_type: "auto"
                        },

                        (error, result) => {

                            if (error) {
                                reject(error);
                            } else {
                                resolve(result);
                            }

                        }
                    );


                stream.end(req.file.buffer);

            });


        res.status(200).json({

            success: true,

            message: "File uploaded successfully ❤️",

            url: uploadResult.secure_url,

            publicId: uploadResult.public_id,

            resourceType: uploadResult.resource_type

        });


    } catch (error) {

        console.error(
            "Upload error:",
            error
        );

        res.status(500).json({

            success: false,

            message: "Unable to upload file",

            error: error.message

        });

    }

});


module.exports = router;