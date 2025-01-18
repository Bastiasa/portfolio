from threading import Thread

import fitz
import sys
import os

if sys.argv.__len__() < 2:
    print("No given folder path")
    sys.exit(1)

FOLDER_PATH = sys.argv[1]

if not os.path.exists(FOLDER_PATH):
    print("Nonexistent path ", FOLDER_PATH)
    sys.exit(1)

if not os.path.isdir(FOLDER_PATH):
    print("Given path is not a folder")
    sys.exit(1)

def convert_pdf(pdf_path:str):

    image_output_path = os.path.join(FOLDER_PATH, pdf_path.removesuffix(".pdf") + ".webp")
    
    if os.path.exists(image_output_path):
        print("The image ", image_output_path, " already exists.")
        return

    document = fitz.open(pdf_path)
    page:fitz.Page = document[0]
    pixmap = page.get_pixmap(dpi=300)
    pixmap.pil_save(image_output_path, format="WEBP")

    
    print("Converted ", pdf_path)

files = os.listdir(FOLDER_PATH)
converter_threads:set[Thread] = set()

for filename in files:

    if not filename.lower().endswith(".pdf"):
        continue
    
    file_path = os.path.join(FOLDER_PATH, filename)
    convert_pdf(file_path)

    continue

    thread = Thread(target=convert_pdf, args=[file_path])
    converter_threads.add(thread)

    thread.start()

print("Finished")