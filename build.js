import { rimraf } from 'rimraf'
import { exec } from 'child_process'

// Convertir exec a una función basada en Promesas
const execAsync = (command) =>
  new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(err)
      } else {
        resolve({ stdout, stderr })
      }
    })
  })

const main = async () => {
  try {
    // Eliminar la carpeta docs (si existe)
    await rimraf('docs')
    console.log('Carpeta docs eliminada correctamente.')

    // Ejecutar el comando de build
    console.log('Generando nuevo build...')
    const { stdout, stderr } = await execAsync('npm run viteBuild')
    console.log('Build generado con éxito.')
    console.log(stdout)
    if (stderr) {
      console.error(stderr)
    }
  } catch (error) {
    console.error('Error:', error)
    process.exit(1) // Termina el proceso con un error
  }
}

main()
