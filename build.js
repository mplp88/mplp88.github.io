import { rimraf } from 'rimraf'
import { exec } from 'child_process'
import { rename } from 'fs/promises'
import { writeFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

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
        const __filename = fileURLToPath(import.meta.url)
        const __dirname = dirname(__filename)
        const filePath = join(__dirname, 'docs', 'CNAME')

        const domain = 'portfolio.martinponce.com.ar'

        writeFile(filePath, domain, (err) => {
          if (err) {
            console.error('Error al crear el archivo CNAME:', err)
          } else {
            console.log(`Archivo CNAME creado en ${filePath} con el dominio ${domain}`)
          }
        })
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
