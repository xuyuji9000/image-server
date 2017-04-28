<?php
namespace App\Controllers;

use App\Libraries\UploadPicture;

class UploadImageController extends HomeController
{
    public function upload($req, $res,$args)
    {
        $up = new UploadPicture($_FILES);

        $image_url = $up->save();

        if($image_url)
            $res = $this->setSuccessJson($res, $image_url);
        else
            $res = $this->setFailMessageJson($res, 'Upload image failed.');

        return $res;
    }
    
    public function view($req, $res, $args)
    {
        $this->container['view']->render($res, 'upload.html', array());
    }
}
