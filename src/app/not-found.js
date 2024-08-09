/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import { PATH_HOME } from '@/constants'

export const metadata = {
  title: 'Parece que te perdiste - Error 404',
}

export default function NotFound() {
  const now = new Date()
  const nowSeconds = now.getSeconds()
  let imageUrl = '/images/error-ntsh.webp'

  if (nowSeconds <= 20) {
    imageUrl = '/images/error-key.webp'
  } else if (nowSeconds <= 40) {
    imageUrl = '/images/error-kevin.webp'
  }

  return (
    <main>
      <header>
        <h1 className='p-5 font-bold text-2xl sm:text-3xl text-center'>
          {`¡Ups! Esta página no existe 😅`}
        </h1>
        <p className='px-5 text-center text-xl'>
          {`La página que buscas ya no existe o nunca existió`}
        </p>
      </header>

      <section className='py-5 sm:py-8'>
        <img src={imageUrl} alt='Error 404' className='mx-auto h-64 sm:h-80' />
      </section>

      <section className='flex justify-center'>
        <Link href={PATH_HOME} className='btn btn-secondary btn-wide text-lg'>
          {`Volver`}
        </Link>
      </section>
    </main>
  )
}
