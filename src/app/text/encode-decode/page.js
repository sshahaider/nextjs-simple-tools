import Decoders from './Decoders';

const meta = {
    title: 'Online Case Converters List - Converter Your Text to All Cases for Free',
    dec: 'Unlock text transformation possibilities with our free online case converters tools. Effortlessly switch between cases for enhanced content formatting.',
    link: 'https://yfbtools.com/text/decode'
}

export function generateMetadata() {

    return {
        title: meta.title,
        description: meta.dec,
        keywords: ['Case Converter', 'Online Case Converters'],
        alternates: {
            canonical: meta.link,
        },
        openGraph: {
            title: meta.title,
            description: meta.dec,
            url: meta.link,
            locale: 'en-US',
            siteName: 'YFBTools',
            type: 'website',
        },
    }
}

export default function CaseConverters() {


    return (
        <div className="min-h-screen">
            <h1>All Encoders & Decoders</h1>
            <Decoders />

        </div>
    )
}
