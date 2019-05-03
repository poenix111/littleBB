from flask import Flask, request, make_response, jsonify
import mysql.connector
from libro import Libro
from material import Material
from usuario import Usuario
from flask_cors import CORS, cross_origin
from db import DB
from prestamo import Prestamo

app = Flask(__name__)
core = CORS(app)

""" host = 'poenix111.mysql.pythonanywhere-services.com'
user = 'poenix111'
password = '@ashe123'
database = 'poenix111$biblioteca'
 """

host = "localhost"
password = "ashe123"
user = "brian"
database = "biblioteca"

db = DB(host, user, password, database)
@app.before_request
def before_request_callback():
    db.conectar()


@app.after_request
def after_request_callback(response):
    db.desconectar()
    return response


@app.route('/registrar-usuario', methods=['POST'])
@cross_origin()
def registrarUsuario():
    user = Usuario(db)
    data = request.get_json(force=True)
    user.crear(data)
    respuesta = make_response("Registro exitoso", 200)
    respuesta.headers.add("Access-Control-Allow-Origin", "*")
    return respuesta


@app.route("/registrar-libro", methods=['POST'])
@cross_origin()
def registrarLibro():
    libro = Libro(db)
    """ nombre = request.args.get('nombre')
    autor = request.args.get('autor')
    genero = request.args.get('genero')
    edicion = request.args.get('edicion')
    editorial = request.args.get('editorial')
    idioma = request.args.get('idioma')
    isbn = request.args.get('isbn')
    descripcion = request.args.get('descripcion') """

    data = request.get_json(force=True)
    libro.crear(data)
    print(data)
    respuesta = make_response("Hello World")
    respuesta.headers.add("Access-Control-Allow-Origin", "*")
    return respuesta


@app.route("/registrar-material", methods=['POST'])
def registrarMaterial():
    material = Material(db)
    """ tipo = request.args.get('tipo')
    marca = request.args.get('marca')
    descripcion = request.args.get('descripcion')
    numSerie = request.args.get('numSerie') """
    data = request.get_json(force=True)
    material.crear(data)
    respuesta = make_response("Hello World")
    respuesta.headers.add("Access-Control-Allow-Origin", "*")
    return respuesta


@app.route('/recuperar-libros/', methods=['GET'])
def recuperarLibros():
    libro = Libro(db)
    result = libro.mostrarAll()
    print(result)
    return jsonify(result)


@app.route('/recuperar-material/', methods=['GET'])
def recuperarMaterial():
    material = Material(db)
    result = material.mostrarAll()
    print(result)
    return jsonify(result)


@app.route('/recuperar-usuarios', methods=['GET'])
def recuperarUsuarios():
    usuario = Usuario(db)
    result = usuario.mostrarAll()
    return jsonify(result)


@app.route('/editar-usuario', methods=['POST'])
def editarUsuario():
    user = Usuario(db)
    data = request.get_json(force=True)
    print(data)
    user.actualizar(data)
    respuesta = make_response("Hello World")
    respuesta.headers.add("Access-Control-Allow-Origin", "*")
    return respuesta


@app.route('/editar-libro', methods=['POST'])
def editarLibro():
    libro = Libro(db)
    data = request.get_json(force=True)
    libro.actualizar(data)
    respuesta = make_response("Hello World")
    respuesta.headers.add("Access-Control-Allow-Origin", "*")
    return respuesta


@app.route('/editar-material', methods=['POST'])
def editarMaterial():
    material = Material(db)
    data = request.get_json(force=True)
    material.actualizar(data)
    respuesta = make_response("Hello World")
    respuesta.headers.add("Access-Control-Allow-Origin", "*")
    return respuesta


@app.route('/login', methods=['POST'])
def login():
    usuario = Usuario(db)
    data = request.get_json(force=True)
    return jsonify(usuario.login(data['usuario'], data['contra']))


@app.route('/exists', methods=['POST'])
def exists():
    usuario = Usuario(db)
    data = request.get_json(force=True)
    """   data = {}
    data['usuario'] = request.args.get('usuario') """
    if(usuario.exists(data['usuario'])):
        return 'True'
    else:
        return 'False'


@app.route('/book-exists', methods=['POST'])
def bookExists():
    libro = Libro(db)
    data = request.get_json(force=True)
    if(libro.exists(data['isbn']) != 'False'):
        return jsonify(libro.JsonExists(data['isbn']))
    else:
        return 'False'


@app.route('/book', methods=['POST'])
def book():
    libro = Libro(db)
    data = request.get_json(force=True)
    return libro.exists(data['isbn'])


@app.route('/user-info', methods=['POST'])
def userInfo():
    usuario = Usuario(db)
    user = request.get_json(force=True)
    if(usuario.exists(user['usuario'])):
        return jsonify(usuario.showInfo(user['usuario']))


@app.route('/next-value')
def nextValue():
    prestamo = Prestamo(db)
    return str(prestamo.nextValue())


@app.route('/prestamo-libro', methods=['POST'])
def prestamoLibro():
    prestamo = Prestamo(db)
    data = request.get_json(force=True)
    prestamo.crear(data)
    respuesta = make_response("Prestamo Creado")
    respuesta.headers.add("Access-Control-Allow-Origin", "*")
    return respuesta


@app.route('/has-copy', methods=['POST'])
def hasCopy():
    libro = Libro(db)
    data = request.get_json(force=True)
    isbn = data['isbn']
    return str(libro.hasCopys(isbn))


@app.route('/remove-copy', methods=['POST'])
def removeCopy():
    libro = Libro(db)
    data = request.get_json(force=True)
    isbn = data['isbn']
    return str(libro.removeCopy(isbn))


@app.route('/turn-unic', methods=['POST'])
def turnUnic():
    libro = Libro(db)
    data = request.get_json(force=True)
    isbn = data['isbn']
    return str(libro.turnIntoUnic(isbn))


@app.route('/penalizar', methods=['POST'])
def penalizar():
    usuario = Usuario(db)
    data = request.get_json(force=True)
    id_user = data['usuario']
    return usuario.penalizar(id_user)


@app.route('/delete-user', methods=['POST'])
def deleteUser():
    user = Usuario(db)
    data = request.get_json(force=True)
    id_user = data['id_usuario']
    if(user.borrarUser(id_user)):
        respuesta = make_response("Borrado exitoso")
        respuesta.headers.add("Access-Control-Allow-Origin", "*")
        return respuesta
    else:
        respuesta = make_response("Error")
        respuesta.headers.add("Access-Control-Allow-Origin", "*")
        return respuesta

@app.route('/return-book', methods = ['POST'])
def returnBook():
        prestamo = Prestamo(db)
        data = request.get_json(force = True)
        if(prestamo.returnBook(data)):
                respuesta = make_response("Retorno exitoso")
                respuesta.headers.add("Access-Control-Allow-Origin", "*")
                return respuesta
        else:
                respuesta = make_response("Usuario penalizado")
                respuesta.headers.add("Access-Control-Allow-Origin", "*")
                return respuesta
@app.route('/show-lend', methods = ['POST'])
def showLend():
        prestamo = Prestamo(db)
        data = request.get_json(force = True)
        folio = data['folio']
        return jsonify(prestamo.showLend(folio))
app.run(debug=True)
