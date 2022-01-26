<?php

namespace Smartbox\ImagesReview\Controller;

class Controller
{

    protected $repository;

    public function __construct()
    {
        $className = static::NAMESPACE . '\\' . static::REPOSITORY;
        $this->repository = new $className();
    }

}