import { rimraf } from 'rimraf'
import { exec } from 'child_process'
import { rename, writeFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

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

    // Renombrar la carpeta dist a docs
    await rename('dist', 'docs')
    console.log('Carpeta dist renombrada a docs correctamente.')

    // Crear el archivo CNAME
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)
    const filePath = join(__dirname, 'docs', 'CNAME')
    const domain = 'portfolio.martinponce.com.ar'

    await writeFile(filePath, domain)
    console.log(`Archivo CNAME creado en ${filePath} con el dominio ${domain}.`)
  } catch (error) {
    console.error('Error:', error)
    process.exit(1) // Termina el proceso con un error
  }
}

main()
