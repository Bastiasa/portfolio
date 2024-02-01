import os

FILE_TYPE = input("Tipo de archivo: ")
INPUT_FOLDER = input("Carpeta de entrada: ")

index = 0

for file in os.listdir(INPUT_FOLDER):

    index += 1

    if(file.endswith(FILE_TYPE)):
        file = os.path.join(INPUT_FOLDER, file)
        os.rename(file, os.path.join(INPUT_FOLDER, f"{index:03d}.{FILE_TYPE}"))
