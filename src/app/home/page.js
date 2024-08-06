export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Inicio',
}

export default function App() {
  return (
    <main className='px-5'>
      <header>
        <h1>{`PÁGINA PRINCIPAL`}</h1>
      </header>

      <section>
        <p>{`Primer párrafo del post. Este párrafo introduce el tema del post.`}</p>
        <p>
          {`Segundo párrafo del post. Aquí se desarrolla el contenido principal.`}
        </p>
        <p>
          {`Tercer párrafo del post. Este párrafo concluye el post y ofrece un resumen o llamada a la acción.`}
        </p>
      </section>
    </main>
  )
}
