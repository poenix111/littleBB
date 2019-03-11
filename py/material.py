class Material:
    def __init__(self, conexion, cursor):
        self.conexion = conexion
        self.cursor = cursor

    def crear(self, tipo, marca, descripcion, numSerie):
        insert = ('INSERT INTO material(tipo, marca, descripcion, numSerie VALUES (%s,%s,%s,%s)')
        self.conexion.execute(insert, (tipo, marca, descripcion. numSerie))
        self.cursor.commit()
                

    def mostrarAll(self):
        query = ('SELECT * FROM material')
        self.cursor.execute(query)
        consulta = self.cursor.fetchall()

        resultados = []

        for r in consulta:
            material = {
                "id_material":r[0],
                "tipo":r[1],
                "marca":r[2],
                "descripcion":r[3],
                "numSerie":r[4]
            }
            resultados.append(material)
        return resultados
    

