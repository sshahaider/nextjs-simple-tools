import Script from "next/script";
import Faq from "@/components/Faq";
import Main from "./Main";
import { publisher } from "@/lib/utails";
import Feedback from "@/components/Feedback";

const meta = {
    title: 'Count Letters Online - Count Letters Instantly for Free',
    dec: 'count letters online with our free Letter Counter tool. Simply paste your text, and our tool provides an instant and accurate letter count. Try it now!',
    link: 'https://yfbtools.com/text/count-letters'
}

export function generateMetadata() {

    return {
        title: meta.title,
        description: meta.dec,
        keywords: ['Count Letters Online', 'Letter Counter', 'free Letter Counter', 'Accurate Letter Counter'],
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

export default function CountLetters() {

    const faqs = [
        {
            question: `Is online letter counting tool accurate?`,
            answer: `Yes, this tool is known for their accuracy in counting letters.`
        },
        {
            question: `Do I need to download software to use online letter counters?`,
            answer: `No, This online letter counting tool is web-based and require no downloads..`
        },
        {
            question: `Can I Use It on Mobile Devices?`,
            answer: `Certainly! The tool is designed to be mobile-friendly, ensuring you can count letters on the go.`
        },
        {
            question: `Is It Really Free?`,
            answer: `Absolutely! Our goal is to count letters hassle-free for everyone. Enjoy the benefits of the tool without spending a dime.`
        }
    ];

    const jsonLd = {
        "@context": "http://schema.org",
        "@type": "SoftwareApplication",
        "name": "Letter Counter",
        "description": meta.dec,
        "url": meta.link,
        "applicationCategory": "Utility",
        "operatingSystem": "Web",
        "author": publisher,
        "inLanguage": "en",
        "softwareVersion": "1.0",
        "keywords": "Count Letters Online, Letter Counter, free Letter Counter, Accurate Letter Counter",
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

    return (
        <div>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <h1 className="capitalize">Count Letters Online</h1>
            <p>Have you ever found yourself needing to count your text effortlessly? Well, We've got the perfect solution for you – a free online tool that simplifies the process. Let's count your text with our amazing tool.</p>
            <h2 className="capitalize">Letters Counter</h2>
            <Main />            <Feedback title={"Count Letters"} />

            <h2>Manual vs. Online Letter Counting</h2>
            <p>Traditionally, counting letters involved manually tallying each character—a tedious and time-consuming task. Thanks to technological advancements, we now have the luxury of efficient online tools that simplify this process.</p>
            <h2>Benefits of Using Online Letter Counters</h2>
            <p>Online letter counters offer a plethora of advantages. They not only save time but also ensure accuracy. Additionally, many tools provide features such as real-time character limit checks, making them indispensable for writers and content creators.</p>
            <h2>Frequently Asked Questions (FAQs)</h2>
            <Faq faqs={faqs} />
        </div>
    )
}
