const express = require('express');
const multer = require('multer');
const index = require('../index');

const multerConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '../admin/public/Images');
    },
    filename: (req, file, callback) => {
        const ext = file.mimetype.split('/')[1];
        console.log(file);
        callback(null, `${Date.now()}` + file.originalname );
    },
});


const isImage = (req, file, callback) => {
    if(file.mimetype.startsWith('image')) {
        callback(null, true)
    }
    else {
        callback(new Error('Only Image id Allowed..'));
    }
};

const upload = multer({
    storage: multerConfig,
    fileFilter: isImage,
});

exports.uploadImage = upload.single('photo')

exports.upload = (req, res) => {

    let image = req.body.element;

    const sqlUpdateImage = "UPDATE site_content SET value=? WHERE element=?;"
    index.db.query(sqlUpdateImage, [ req.file.filename, image], (err, result) => {
        console.log(result);
        console.log(err);
    })

    res.status(200).json({
        success: "Success",
    })
}