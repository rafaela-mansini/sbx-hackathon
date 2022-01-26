<?php

namespace Smartbox\ImagesReview\Controller;

class UploadController extends Controller
{

    protected const NAMESPACE = 'Smartbox\ImagesReview\Repository\Uploads';
    protected const REPOSITORY = 'UploadToFile';

    public function __invoke(array $request)
    {
        $params = explode(',', $request['params']);
        $this->repository->save($params, $request['review_id']);
    }

}