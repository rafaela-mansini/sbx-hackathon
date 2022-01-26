<?php

namespace Smartbox\ImagesReview\Repository\Uploads;

interface UploadInterface
{
    public function save(array $uploads, int $reviewID): void;
}