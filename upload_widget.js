const cloudName = "smartbox"; // replace with your own cloud name
// const uploadPreset = "ml_default"; // replace with your own upload preset
const uploadPreset = "x4ndltu1"; // replace with your own upload preset

// Remove the comments from the code below to add
// additional functionality.
// Note that these are only a few examples, to see
// the full list of possible parameters that you
// can add see:
//   https://cloudinary.com/documentation/upload_widget_reference

const myWidget = cloudinary.createUploadWidget(
    {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        sources: [
            "local",
            "url",
            "camera",
            "google_drive",
            "facebook",
            "dropbox",
            "instagram"
        ],
        defaultSource: "local",
        showAdvancedOptions: false,
        cropping: false,
        multiple: true,
        maxImageFileSize: 2000000,
        maxImageWidth: 1080,
        // clientAllowedFormats: ["images"]
    },
    (error, result) => {
        if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            document
                .getElementById("uploadedimage")
                .setAttribute("src", result.info.secure_url);
        }
    }
);

document.getElementById("upload_widget").addEventListener(
    "click",
    function () {
        myWidget.open();
    },
    false
);
