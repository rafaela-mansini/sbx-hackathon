const cloudName = "smartbox"; // replace with your own cloud name
// const uploadPreset = "ml_default"; // replace with your own upload preset
const uploadPreset = "x4ndltu1"; // replace with your own upload preset
const upladedImagesUrl = [];

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
        clientAllowedFormats: ["webp", "png", "jpg", "jpeg"],
        showCompletedButton: false,
    },
    (error, result) => {
        if(error && !result) return;

        switch (result.event) {
            case 'success':
                upladedImagesUrl.push(result.info.secure_url);
                break;
            case 'close':
                uploadImagesToServer()
                break;
        }


    }
);

function uploadImagesToServer() {
    if(!upladedImagesUrl.length) return;

    const http = new XMLHttpRequest();
    const url = 'http://localhost:8000';
    http.open('POST', url, true);
    http.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    http.send('params=' + upladedImagesUrl + '&review_id=4');

    http.onreadystatechange = () => {
        if (http.readyState == 4 && http.status == 200) {
            try {
                var response = JSON.parse(http.responseText);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }
}

document.getElementById("upload_widget").addEventListener(
    "click",
    function () {
        myWidget.open();
    },
    false
);
