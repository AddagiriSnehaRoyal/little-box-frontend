const express = require("express");
const Package = require("../models/Package");

const router = express.Router();


// SAVE PACKAGE
router.post("/", async (req, res) => {

    try {

        const {
            packageId,
            fromName,
            toName,
            title,
            message,
            theme,
            contents
        } = req.body;


        const newPackage = new Package({

            packageId,
            fromName,
            toName,
            title,
            message,
            theme,
            contents

        });


        const savedPackage =
            await newPackage.save();


        res.status(201).json({

            success: true,

            message: "Package saved successfully ❤️",

            package: savedPackage

        });

    } catch (error) {

        console.error(
            "Error saving package:",
            error
        );

        res.status(500).json({

            success: false,

            message: "Unable to save package",

            error: error.message

        });

    }

});

// GET PACKAGE
router.get("/:packageId", async (req, res) => {

    try {

        const packageData = await Package.findOne({
            packageId: req.params.packageId
        });

        if (!packageData) {

            return res.status(404).json({
                success: false,
                message: "Package not found"
            });

        }

        res.status(200).json({

            success: true,

            package: packageData

        });

    } catch (error) {

        console.error(
            "Error getting package:",
            error
        );

        res.status(500).json({

            success: false,

            message: "Unable to get package",

            error: error.message

        });

    } 

});


module.exports = router;