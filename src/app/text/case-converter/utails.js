import { publisher } from "../../../lib/utails";


export const MetaSeo = (type, link) => {
    const meta = {
        title: `${type} Converter: Convert text to ${type} letters`,
        dec: `need to convert your text to ${type}? Use our free ${type} Converter tool to convert your text easily. Just Paste, convert, and Copy!`,
        link: `https://yfbtools.com/text/case-converter/${link}`
    }

    return {
        title: meta.title,
        description: meta.dec,
        keywords: [`Convert Text to ${type}`, `${type} Converter`, `text to ${type} converter`],
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
            question: `Can I use a ${type} converter for coding purposes?`,
            answer: `Yes! This Tool is widely used in coding to maintain consistency and readability.`
        },
        {
            question: `Is the Tool Safe to Use?`,
            answer: `Absolutely! Our online tool is secure and user-friendly. No need to worry about privacy concerns – your text is in safe hands.`
        },
        {
            question: `Can I Use It on Mobile Devices?`,
            answer: `Certainly! The tool is designed to be mobile-friendly, ensuring you can convert text to ${type} on the go.`
        },
        {
            question: `Is the ${type} Text SEO-Friendly?`,
            answer: `Yes, ${type} text is SEO-friendly. Search engines appreciate consistency, and using ${type} text contributes positively to your SEO efforts.`
        },
        {
            question: `Is It Free?`,
            answer: `Absolutely! Our goal is to make text conversion hassle-free for everyone. Enjoy the benefits of the tool without spending a dime.`
        }
    ];

}
export const JsonMarkup = (type, tool, faqs) => {

    const link = `https://yfbtools.com/text/case-converter/${tool}`;

    return {
        "@context": "http://schema.org",
        "@type": "SoftwareApplication",
        "name": `${type} Converter`,
        "description": `An online tool that converts text to ${type}.`,
        "url": link,
        "applicationCategory": "Utility",
        "operatingSystem": "Web",
        "author": publisher,
        "inLanguage": "en",
        "softwareVersion": "1.0",
        "keywords": `Convert Text to ${type}, ${type} Converter`,
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


