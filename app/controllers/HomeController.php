<?php
namespace App\Controllers;

use Interop\Container\ContainerInterface as ContainerInterface;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

class HomeController implements HomeControllerInterface
{
    public function __construct(ContainerInterface $container) {
        $this->container= $container;
    }

    public function setSuccessJson($res, $data)
    {
        return $res->withJson([
            'state' => true,
            'data' => $data
        ]);
    }

    public function setFailMessageJson($res, $msg)
    {
        return $res->withJson([
            'state' => false,
            'message' => $msg
        ]);
    }
}
