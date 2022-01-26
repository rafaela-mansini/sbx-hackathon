<?php

namespace Smartbox\ImagesReview\Repository\Uploads;

class UploadToFile implements UploadInterface
{
    private const FOLDER = 'public';
    private const FILE = 'uploaded.txt';

    public function save(array $uploads, int $reviewID): void
    {
        $dirname = $_SERVER['DOCUMENT_ROOT'];
        $filename = $dirname . DIRECTORY_SEPARATOR . self::FOLDER . DIRECTORY_SEPARATOR . self::FILE;
        $content = $this->getContent($uploads, $reviewID);

        file_put_contents(
            $filename,
            $content,
            FILE_APPEND
        );
    }

    private function getContent(array $uploads, int $reviewID): string
    {
        $uploadsInString = implode(', ', $uploads);
        return $reviewID . ': ' . $uploadsInString . PHP_EOL;
    }
}