const fs = require('fs');

const registrar = (nombre,edad,tipo,color,enfermedad) => {
  const registros = JSON.parse(fs.readFileSync('./citas.json', 'utf-8'))
  const nuevoAnimal = {
    nombre,
    edad,
    tipo,
    color,
    enfermedad
  }
  registros.push(nuevoAnimal)
  fs.writeFileSync('./citas.json', JSON.stringify(registros))
}

const leer = () => {
  const registros = fs.readFileSync('./citas.json', 'utf-8')

  const registroJSON = JSON.parse(registros)
  for(const registro of registroJSON){
    console.log(registro)
  }
}

module.exports = {registrar,leer}