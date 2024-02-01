<?php
// Verificar si la solicitud proviene del servidor
if ($_SERVER['SERVER_ADDR'] === $_SERVER['REMOTE_ADDR']) {
    // Obtener la ruta de la imagen solicitada
    $imagePath = 'galleries-images/drews-gallery/@camila.zapata_hc.jpeg';

    // Verificar si el archivo existe
    if (file_exists($imagePath)) {
        // Establecer el tipo de contenido
        header('Content-Type: image/jpeg');

        // Leer y enviar el contenido de la imagen
        readfile($imagePath);
        exit;
    } else {
        // La imagen no existe, retornar un error o realizar alguna acción adicional
        http_response_code(404);
        echo "Imagen no encontrada";
        exit;
    }
} else {
    // La solicitud no proviene del servidor, retornar un error o realizar alguna acción adicional
    http_response_code(403);
    echo "Acceso no autorizado";
    exit;
}
?>
