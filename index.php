<?php

require_once 'vendor/autoload.php';

use Smartbox\ImagesReview\Controller\UploadController;

if (empty($_POST)) {
    require_once 'uploads.html';
} else {
    $uploadController = new UploadController();
    $uploadController($_POST);
    echo json_encode(['message' => 'done']);
}

