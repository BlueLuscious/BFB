from flask import Flask, render_template, request
import mysql.connector

app = Flask(__name__)

# Configuración de la conexión a la base de datos
db = mysql.connector.connect(
    host="nombre_del_servidor",
    user="nombre_de_usuario",
    password="contraseña",
    database="nombre_de_la_base_de_datos"
)

# Ruta para el formulario
@app.route('/', methods=['GET', 'POST'])
def formulario():
    if request.method == 'POST':
        # Obtener los datos del formulario
        email = request.form['email']
        nombre = request.form['nombre']
        apellido = request.form['apellido']

        # Guardar los datos en la base de datos
        cursor = db.cursor()
        sql = "INSERT INTO usuarios (email, nombre, apellido) VALUES (%s, %s, %s)"
        val = (email, nombre, apellido)
        cursor.execute(sql, val)
        db.commit()

        return 'Datos almacenados correctamente.'

    return render_template('formulario.html')

if __name__ == '__main__':
    app.run()
