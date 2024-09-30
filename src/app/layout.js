import { Poppins } from 'next/font/google'
import './globals.css'
import Provider from '@/components/Provider';

import Header from '@/components/Header'
import Script from 'next/script';
import { siteLink, siteName } from '../../config';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '600', '800']
});

export const metadata = {
  title: siteName,
  description: 'a tools website build with nextjs and tailwind css',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
  alternates: {
    canonical: `${siteLink}/`,
  },
}

export default function RootLayout({ children }) {

  return (

    <html lang="en"  className='dark' >
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />

      <Script id="ga-script" strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
    `}
      </Script>
      <body className={poppins.className}>
        <Provider>
          <Header />
          <main className="lg:ml-[15%] p-4 md:px-12  relative after:-z-20  after:absolute after:right-0 after:bottom-0 after:bg-gradient-radial after:h-[100px] after:w-[150px] after:md:w-[40px] after:from-pink-500 after:via-violet-500 after:to-main after:blur-2xl after:dark:opacity-60  after:content-['']">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
