import hashlib
from datetime import datetime

class Usuario:
    def __init__(self, conexion, cursor):
        self.conexion = conexion
        self.cursor = cursor

    def crear(self, nombre, usuario, contra, tipo, email, telefono, area):
        insertar = ('INSERT INTO usuario(id_usuario, nombre, tipo, email, telefono, pass, estado, fechaRegistro, penalizaciones, area) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)')
        """   h = hashlib.new('sha256', bytes(contra, 'utf-8'))
        h = h.hexdigest() """
        date = datetime.now()
        estado = True
        penalizaciones = 0
        tipoReal = type(int)
        if(tipo == 'Bibliotecario'):
            tipoReal = 3
        elif(tipo == "Maestro"):
            tipoReal = 2
        elif(tipo == "Estudiante"):
            tipoReal = 1

        self.cursor.execute(insertar, (usuario, nombre, tipoReal, email,telefono, contra, estado, date, penalizaciones, area))
        self.conexion.commit()

    def login(self, usuario, contra):
        select = ('SELECT * FROM usuario id_usuario = %s AND pass = %s')
        h = hashlib.new('sha256',bytes(contra, 'utf-8'))
        h = h.hexdigest()
        self.cursor.execute(select,(usuario,h))
        resultado = self.cursor.fetchall()
        if resultado:
            return True
        else: 
            return False

    def actualizar(self):
        pass

    def mostrarAll(self):
        query = ('SELECT * FROM usuario')
        self.cursor.execute(query)
        consulta = self.cursor.fetchall()

        resultados = []

        for u in consulta:
            usuario = {
                "id_usuario":u[0],
                "nombre":u[1],
                "tipo":u[2],
                "email":u[3],
                "telefono":u[4],
                "pass":u[5],
                "estado":u[6],
                "fechaRegistro":u[7],
                "penalizaciones":u[8],
                "area":u[9]
            }
            resultados.append(usuario)
        return resultados
