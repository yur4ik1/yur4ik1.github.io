<?php
    $image = $_POST['image'];
    $image = str_replace('data:image/webp;base64,', '', $image);
    $image = str_replace(' ', '+', $image);
    $imageName = $_POST['image_name'];
    $file = "screenshots/" . $imageName;
    file_put_contents($file,
base64_decode($image));
echo $file;
