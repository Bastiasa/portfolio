import sys
import os
import argparse

from PIL import Image


parser = argparse.ArgumentParser(description="Script para convertir imágenes a PDF.")

parser.add_argument(
    "-f", "--format",
    type=str,
    help="Formato de imagen (por ejemplo, jpeg, png, etc.)",
    required=False,
    default="png",
)

parser.add_argument(
    "-d", "--dir",
    type=str,
    help="Carpeta a convertir.",
    required=False,
    default=os.getcwd(),
)



ARGS = parser.parse_args()

FOLDER_PATH = ARGS.dir
IMAGES_FORMAT = ARGS.format

if not os.path.exists(FOLDER_PATH):
    print("Given path does not exists.")
    exit(1)

if not os.path.isdir(FOLDER_PATH):
    print("Given path is not a folder.")
    exit(1)


FILENAMES_LIST = os.listdir(FOLDER_PATH)


if len(FILENAMES_LIST) < 1:
    print("The folder is empty.")
    exit(0)

for filename in FILENAMES_LIST:

    if not filename.lower().endswith(("."+IMAGES_FORMAT if not IMAGES_FORMAT.startswith(".") else IMAGES_FORMAT)):
        continue
    
    filepath = os.path.join(FOLDER_PATH, filename)
    pdf_output_path = filepath.rsplit(".", 1)[0] + ".pdf"

    if os.path.exists(pdf_output_path):
        print("PDF Already exists: ", pdf_output_path)
        continue

    try:

        image = Image.open(filepath)
        image.save(pdf_output_path, format="PDF")
    except Exception as e:
        print("Error converting ", filepath)
        print(e)
    
    print("Converted ", filepath)

print("Finished")