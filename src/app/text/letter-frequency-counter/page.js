import Script from "next/script";
import Faq from "@/components/Faq";
import Main from "./Main";
import { publisher } from "@/lib/utails";
import InfoCard from "@/components/InfoCard";
import Feedback from "@/components/Feedback";

const meta = {
    title: 'Online Letter Frequency Counter - Count Letters Frequency',
    dec: 'Letter Frequency Counter: Get an accurate letter frequency count instantly by pasting your text into our tool. Try it now!',
    link: 'https://yfbtools.com/text/letter-frequency-counter',
    keyw: "Letter Frequency Counter"
}

export function generateMetadata() {

    return {
        title: meta.title,
        description: meta.dec,
        keywords: [meta.keyw, 'Frequency Counter', 'Calculate letter frequencies'],
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
            question: `Do I need to download software to use it?`,
            answer: `No, This Letter Frequency Counter is web-based and require no downloads.`
        },
        {
            question: `Can I Use It on Mobile Devices?`,
            answer: `Certainly! The tool is designed to be mobile-friendly, ensuring you can count Frequency of letters on the go.`
        },
        {
            question: `Is It Really Free?`,
            answer: `Absolutely! Our goal is to Count Letter Frequency hassle-free for everyone. Enjoy the benefits of the tool without spending a dime.`
        }
    ];

    const jsonLd = {
        "@context": "http://schema.org",
        "@type": "SoftwareApplication",
        "name": meta.keyw,
        "description": meta.dec,
        "url": meta.link,
        "applicationCategory": "Utility",
        "operatingSystem": "Web",
        "author": publisher,
        "inLanguage": "en",
        "softwareVersion": "1.0",
        "keywords": "Letter Frequency Counter, Frequency Counter, free Letter Counter, Calculate letter frequencies",
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
            <h1 className="capitalize">Letter Frequency Counter</h1>
            <p>Have you ever found yourself needing to Count Letter Frequency effortlessly? Well, We've got the perfect solution for you – a free online tool that simplifies the process. Let's count Letter Frequency online with our free & amazing tool.</p>
            <h2>Count Letter Frequency</h2>
            <Main />
            <Feedback title={meta.keyw} />
            <section className="px-2 my-10 md:px-4 h-full w-full text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
                <InfoCard
                    icon={"fi-rs-infinity"}
                    title={"Free & Unlimited"}
                    dec={`This tool is completely free of cost. You can use it as many times as you want without any restrictions..`}
                />
                <InfoCard
                    icon={"fi-br-time-fast"}
                    title={"Fast"}
                    dec={`Say goodbye to slow tools, and Experience Fast Counting with this quick and Fast Tool.`}
                />
                <InfoCard
                    icon={"fi-rr-users-alt"}
                    title={"User Friendly"}
                    dec={"The tool is designed to be user-friendly. So, Advanced knowledge is not required it's easy to use."}
                />
                <InfoCard
                    icon={"fi-rr-universal-access"}
                    title={"Accessibility"}
                    dec={`With this tool, you can count Letter frequency at anytime, anywhere, with just no clicks and easily.`}
                />

            </section>
            <h2>What is a letter frequency counter?</h2>
            <p>A Letter frequency counter is a tool or software application used to analyze the frequency of letters in a given text or document.</p>
            <h2>How to Use it</h2>
            <p>Performing letter frequency analysis is very simple:</p>
            <al>
                <li>insert or copy and paste your text into the input field to be analyzed.</li>
                <li>and done!</li>
            </al>
            <p>yes! It is that simple, now you can see the analysis on the right side of the input field (in mobile phones it will be on the bottom of the input field).</p>
            <h2>Frequently Asked Questions (FAQs)</h2>
            <Faq faqs={faqs} />
        </div>
    )
}
