import { rimraf } from 'rimraf'
import { exec } from 'child_process'
import { rename } from 'fs/promises'

// Eliminar la carpeta dist (si existe)
rimraf('docs')
  .then(() => {
    console.log('Carpeta docs eliminada correctamente.')

    // Ejecutar el comando de build, por ejemplo, "npm run build"
    console.log('Generando nuevo build')
    exec('npm run viteBuild', async (err, stdout, stderr) => {
      if (err) {
        console.error('Error al generar el build:', err)
        process.exit(1) // Termina el proceso con un error
      }

      console.log('Build generado con éxito.')
      console.log(stdout)
      if (stderr) {
        console.error(stderr)
      }

      // Renombrar la carpeta dist a docs
      try {
        await rename('dist', 'docs')
        console.log('Carpeta dist renombrada a docs correctamente.')
      } catch (renameErr) {
        console.error('Error al renombrar la carpeta dist a docs:', renameErr)
        process.exit(1) // Termina el proceso con un error
      }
    })
  })
  .catch((error) => {
    console.error('Error al eliminar la carpeta docs:', error)
    process.exit(1) // Termina el proceso con un error
  })
