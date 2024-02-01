import os
import shutil
import uuid

# Obtener la ruta del archivo actual
ruta_actual = os.path.dirname(os.path.abspath(__file__))

# Obtener la carpeta padre
ruta_directorio = os.path.dirname(ruta_actual)

archivo_py = os.path.basename(__file__)

# Verificar si el archivo .py se encuentra en el directorio padre
if archivo_py in os.listdir(ruta_directorio):
    print("El archivo .py ya existe en el directorio padre. La ejecución se ha ignorado.")
else:
    def mover_archivo(ruta_archivo, ruta_destino):
        # Obtener el nombre y la extensión del archivo
        nombre_archivo, extension_archivo = os.path.splitext(os.path.basename(ruta_archivo))

        # Generar un sufijo único para evitar colisiones
        sufijo_unico = str(uuid.uuid4())[:8]

        # Construir el nuevo nombre de archivo con el sufijo único
        nuevo_nombre_archivo = f"{nombre_archivo}_{sufijo_unico}{extension_archivo}"

        # Obtener la ruta completa del nuevo archivo
        ruta_nuevo_archivo = os.path.join(ruta_destino, nuevo_nombre_archivo)

        # Mover el archivo a la carpeta padre con el nuevo nombre
        shutil.move(ruta_archivo, ruta_nuevo_archivo)

    def borrar_carpetas_recursivamente(ruta):
        for carpeta_actual, subcarpetas, archivos in os.walk(ruta):
            for archivo in archivos:
                # Obtener la ruta completa del archivo
                ruta_archivo = os.path.join(carpeta_actual, archivo)

                # Mover el archivo a la carpeta padre con un sufijo único para evitar colisiones
                mover_archivo(ruta_archivo, ruta_directorio)

            for subcarpeta in subcarpetas:
                subcarpeta_completa = os.path.join(carpeta_actual, subcarpeta)
                borrar_carpetas_recursivamente(subcarpeta_completa)

                # Verificar si la subcarpeta está vacía después de eliminar archivos
                if not os.listdir(subcarpeta_completa):
                    os.rmdir(subcarpeta_completa)

    borrar_carpetas_recursivamente(ruta_directorio)
