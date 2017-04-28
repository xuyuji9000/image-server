<?php

namespace App\Controllers;

interface HomeControllerInterface
{

    public function setSuccessJson($response, $data);

    public function setFailMessageJson($response, $message);

}
