import multer from 'multer'
import path from 'path'

// Custom error class for file validation errors
class FileValidationError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'FileValidationError';
    }
}

// Specifies where to write the image files to and upload from and makes sure the filename is unique for every image.
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(
            null,
            `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
        );
    },
})

// Validates the uploaded file to ensure it's an image and throws an error if it is not.
function checkFileType(file: Express.Multer.File, cb: multer.FileFilterCallback) {
    const filetypes = /png|jpg|jpeg|gif/;

    const isCorrectExtension = filetypes.test(path.extname(file.originalname).toLowerCase());
    const isCorrectMimetype = filetypes.test(file.mimetype);

    if (isCorrectExtension && isCorrectMimetype) {
        return cb(null, true);
    } else {
        return cb(new FileValidationError("Invalid file type. You can only upload images."));
    }
}

// Exports configurations for the upload middleware.
export default multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    },
    limits: {
        fileSize: 50 * 1024 * 1024, // 50MB, adjust the size limit as needed
      }
});