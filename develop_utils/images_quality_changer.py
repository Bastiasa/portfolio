import argparse
import os

from PIL import Image

parser = argparse.ArgumentParser(description="Script para escalar el tamaño de imágenes")

parser.add_argument(
    "-s", "--scale",
    type=int,
    help="Nueva escala de la imagen.",
    required=True
)

parser.add_argument(
    "-d", "--dir",
    type=str,
    help="Directorio donde se ubican las imágenes.",
    required=False,
    default=os.getcwd(),
)

parser.add_argument(
    "-f", "--format",
    type=str,
    help="Formato aceptado de las imágenes (Ej. png, jpeg, webp, ...).",
    required=False,
    default="png",
)

parser.add_argument(
    "-r", "--replace",
    action="store_true",
    help="Indicar si se desea reemplazar las imágenes eliminando las originales.",
    required=False
)

ARGS = parser.parse_args()

FORMAT = ARGS.format
SCALE = ARGS.scale
DIRECTORY = ARGS.dir
REPLACE = ARGS.replace

FILESLIST = os.listdir(DIRECTORY)

for filename in FILESLIST:
    if not filename.lower().endswith("."+FORMAT):
        continue
    
    filepath = os.path.join(DIRECTORY, filename)

    try:

        image = Image.open(filepath)

        image_size = image.size

        scaled_size = (
            max(1, int((SCALE * image_size[0]) / 100)),
            max(1, int((SCALE * image_size[1]) / 100))
        )

        image = image.resize(scaled_size)

        if not REPLACE:   
            image.save(filepath.rsplit(".", 1)[0] + " (Scaled)."+FORMAT, FORMAT)
        else:
            os.remove(filepath)
            image.save(filepath)

        image = None

        print(filepath, "scaled")
    except Exception as e:
        print("Error scaling ", filepath)
        print(e)

print("Finished")