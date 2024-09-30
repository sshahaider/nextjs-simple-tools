import { publisher } from "../../../lib/utails";


export const MetaSeo = (title, link) => {
    const meta = {
        title: `Encode/Decode ${title} Online for Quick Data Magic! 🚀`,
        dec: `Easily encode or decode ${title} online with our tool. Fast, secure, and hassle-free data transformations at your fingertips! Try it now. ⚙️`,
        link: `https://yfbtools.com/text/encode-decode/${link}`
    }

    return {
        title: meta.title,
        description: meta.dec,
        keywords: [`encode ${title}`, `decode ${title}`, `${title} Encoder`, `${title} Decoder`],
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

export const FaqsArray = (type) => {

    return [
        {
            question: `Can I use a ${type} Encode / Decode for coding purposes?`,
            answer: `Yes! This Tool is widely used in coding.`
        },
        {
            question: `Is the Tool Safe to Use?`,
            answer: `Absolutely! Our online tool is secure and user-friendly. No need to worry about privacy concerns – your data is in safe hands.`
        },
        {
            question: `Can I Use It on Mobile Devices?`,
            answer: `Certainly! The tool is designed to be mobile-friendly, ensuring you can Encode / Decode ${type} on the go.`
        },
        {
            question: `Is It Free?`,
            answer: `Absolutely! Our goal is to make the proces hassle-free for everyone. Enjoy the benefits of the tool without spending a dime.`
        }
    ];

}
export const JsonMarkup = (type, tool, faqs) => {

    const link = `https://yfbtools.com/text/encode-decode/${tool}`

    return {
        "@context": "http://schema.org",
        "@type": "SoftwareApplication",
        "name": `${type} Encoder & Decoder`,
        "description": `An online tool that encode / decode ${type}.`,
        "url": link,
        "applicationCategory": "Utility",
        "operatingSystem": "Web",
        "author": publisher,
        "inLanguage": "en",
        "softwareVersion": "1.0",
        "keywords": `Encode / Decode ${type}, ${type} Encoder & Decoder`,
        "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD",
            "availability": "http://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "YFBTools"
            }
        },
        "mainEntity": faqs.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };
}


