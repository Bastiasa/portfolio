<!DOCTYPE html>
<html lang="es">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <?php
        function CreateCurrentGalleryPathMeta(String $folder_path = "") {

            $directory = '../media/galleries-images/'.$folder_path;
            $photos_path_meta_data = '<meta id="meta:files-names" name="file-names" content="';
            
            $files = scandir($directory);
            $current_index = 0;

            if ($files == false) {
                echo '<script>
            
                window.location.replace("../");
                
                </script>';
                die;
            }

            foreach($files as $filename) {

                if($filename == "." || $filename == "..") {
                    continue;
                }

                

                switch(pathinfo($filename, PATHINFO_EXTENSION)){
                    case 'png':
                        #ok
                    break;
                    case 'jpg':
                        #ok
                    break;
                    case 'jpeg':
                        #ok
                    break;
                    case 'svg':
                        #ok
                    break;
                    case 'webp':
                        #ok
                    break;
                    default:
                        $current_index ++;
                        if($current_index+1 == sizeof($files)-1){
                            $photos_path_meta_data = $photos_path_meta_data.'"/>';
                        } else {
                            $photos_path_meta_data = $photos_path_meta_data.",";
                        }
                    continue 2;
                }

                $photos_path_meta_data = $photos_path_meta_data.$filename;
                $current_index ++;

                if($current_index+1 == sizeof($files)-1){
                    $photos_path_meta_data = $photos_path_meta_data.'"/>';
                } else {
                    $photos_path_meta_data = $photos_path_meta_data.",";
                }

                
            }

            echo '<meta id="meta:current-gallery-path" name="current-gallery-path" content="'.$directory.'"/>';
            echo $photos_path_meta_data;
        }

        {
            # code...
        }
        if((!isset($_REQUEST['w']) || $_REQUEST["w"] == null) || (!isset($_REQUEST['lang']) || $_REQUEST['lang'] === null)){
            echo '<script>
            
            window.location.replace("../");
            
            </script>';
            die;
        } else {
            if ($_REQUEST['w'] !== "1" && $_REQUEST['w'] !== "2") {
                echo '<script>
            
                window.location.replace("../");
                
                </script>';
                die;
            }

            define('language', $_REQUEST['lang']);
            define('gallery_id', $_REQUEST['w']);
            

            switch ($_REQUEST['w']) {
                case '1':
                    CreateCurrentGalleryPathMeta("graphics-gallery");
                break;
                
                case '2':
                    CreateCurrentGalleryPathMeta("drews-gallery");
                break;

                default:
                    echo '<script>
                
                    window.location.replace("../");
                    
                    </script>';
                    exit();
            }

            
        }
    
    ?>

    <link rel="stylesheet" href="../css/animations.css">
    <link rel="stylesheet" href="all-style.css">
    
    <title>Bastiasa | <?php switch(language){ case 'en': echo 'Gallery'; break; case 'es': echo 'Galería'; break; default: die;}?></title>
</head>

<body id="main-body">

    <div id="topbanner">
        <div id="get-back-button" class="clickable" onclick="setTimeout(()=>{window.location.assign('../<?php if(language !== 'es'){ echo language; }?>');}, 250);">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><clipPath><path fill="#00f" fill-opacity=".514" d="m-7 1024.36h34v34h-34z"/></clipPath><clipPath><path fill="#aade87" fill-opacity=".472" d="m-6 1028.36h32v32h-32z"/></clipPath></defs><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#4d4d4d"/></svg>
        </div>

        <span id="gallery-name"><?php switch (gallery_id) {

            

            case '1':
                switch(language) {
                    case 'es':
                        echo 'Galería de vectores';
                    break;
                    default:
                        echo 'Vectors gallery';
                    break;
                }
            break;
            case '2':
                switch(language) {
                    case 'es':
                        echo 'Galería de dibujos';
                    break;
                    default:
                        echo 'Drews gallery';
                    break;
                }
            break;
            default:
                echo 'Desconocido';
                break;
        }?></span>
    </div>

    <div id="all-pictures">
        
    </div>

    <footer>
        <?php
        
            switch(language){
                case 'en':
                    echo 'All images shown are the intellectual property of &copy; Santiago Bastidas 2023.';
                break;

                case 'es':
                    echo 'Todas las imágenes presentadas son propiedad intelectual de © Santiago Bastidas 2023.';
                break;
            }
        
        ?>
    </footer>


    <div id="full-image" style="display:none;">
        
        <div id="full-image-box">
            <img id="current-full-image" src="">

            <button class="clickable" id="previous-button">
                <div class="button-background"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><clipPath><path fill="#00f" fill-opacity=".514" d="m-7 1024.36h34v34h-34z"/></clipPath><clipPath><path fill="#aade87" fill-opacity=".472" d="m-6 1028.36h32v32h-32z"/></clipPath></defs><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#4d4d4d"/></svg>
            </button>

            <button class="clickable" id="next-button">
                <div class="button-background"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><clipPath><path fill="#00f" fill-opacity=".514" d="m-7 1024.36h34v34h-34z"/></clipPath><clipPath><path fill="#aade87" fill-opacity=".472" d="m-6 1028.36h32v32h-32z"/></clipPath></defs><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#4d4d4d"/></svg>
            </button>

            <button class="clickable" id="close-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="100px" height="100px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>
            </button>
        </div>

    </div>
  

    <script lang="JavaScript" src="handler.js"></script>
</body>
</html>