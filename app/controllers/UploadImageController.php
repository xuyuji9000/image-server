<?php
namespace App\Controllers;

use App\Libraries\UploadPicture;

class UploadImageController extends HomeController
{
    public function upload($req, $res,$args)
    {
        $up = new UploadPicture($_FILES);
        $up->save();
    }
    
    public function view($req, $res, $args)
    {
        $this->container['view']->render($res, 'view1.html', array());
    }
}
