import os
import subprocess
import shutil

def convert_images(root_folder):
    # Carpeta de destino para los archivos originales
    replaced_folder = os.path.join(root_folder, "replaced_resources")

    # Verificar si la carpeta de destino ya existe, y si no, crearla
    if not os.path.exists(replaced_folder):
        os.makedirs(replaced_folder)

    # Recorrer todas las carpetas y subcarpetas
    for dirpath, dirnames, filenames in os.walk(root_folder):
        # Recorrer todos los archivos en la carpeta actual
        for filename in filenames:
            # Obtener la ruta completa del archivo
            file_path = os.path.join(dirpath, filename)

            # Verificar si el archivo es una imagen
            if is_image_file(file_path):
                # Convertir el archivo a .webp utilizando FFMPEG (asegúrate de tener FFMPEG instalado en tu sistema)
                webp_file = convert_to_webp(file_path)

                # Mover el archivo original a la carpeta de reemplazo
                replaced_file = os.path.join(replaced_folder, filename)
                shutil.move(file_path, replaced_file)

                print(f"Archivo original movido a: {replaced_file}")

def is_image_file(file_path):
    # Verificar si el archivo tiene una extensión de imagen válida
    valid_extensions = [".jpg", ".jpeg", ".png", ".gif"]
    _, ext = os.path.splitext(file_path)
    return ext.lower() in valid_extensions

def convert_to_webp(file_path):
    # Obtener la ruta del archivo convertido a .webp
    webp_file = os.path.splitext(file_path)[0] + ".webp"

    # Convertir el archivo a .webp utilizando FFMPEG (asegúrate de tener FFMPEG instalado en tu sistema)
    subprocess.run(["ffmpeg", "-i", file_path, "-compression_level", "6", "-q:v", "80", webp_file], capture_output=True)

    print(f"Archivo convertido a: {webp_file}")

    return webp_file

# Carpeta raíz donde se buscarán los archivos de imagen
root_folder = "C:/xampp/htdocs/board/media/images"

# Llamar a la función para convertir los archivos de imagen
convert_images(root_folder)
