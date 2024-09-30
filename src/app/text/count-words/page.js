import Script from "next/script";
import Faq from "@/components/Faq";
import Main from "./Main";
import { publisher } from "@/lib/utails";
import Feedback from "@/components/Feedback";

const meta = {
    title: 'Count Words Online - Count Words Instantly for Free',
    dec: 'count words online with our free Word Counter tool. Simply paste your text, and our tool provides an instant and accurate word count. Try it now!',
    link: 'https://yfbtools.com/text/count-words'
}

export function generateMetadata() {

    return {
        title: meta.title,
        description: meta.dec,
        keywords: ['Count Words Online', 'Word Counter', 'free Word Counter', 'Accurate Word Counter'],
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

export default function CountWords() {

    const faqs = [
        {
            question: `How does a word counter differ from a character counter?`,
            answer: `While both count characters, word counters focus on entire words, providing a holistic view of a document's structure.`
        },
        {
            question: `Is the Tool Safe to Use?`,
            answer: `Absolutely! Our online tool is secure and user-friendly. No need to worry about privacy concerns – your text is in safe hands.`
        },
        {
            question: `Can I Use It on Mobile Devices?`,
            answer: `Certainly! The tool is designed to be mobile-friendly, ensuring you can count text on the go.`
        },
        {
            question: `Is It Really Free?`,
            answer: `Absolutely! Our goal is to count text hassle-free for everyone. Enjoy the benefits of the tool without spending a dime.`
        }
    ];

    const jsonLd = {
        "@context": "http://schema.org",
        "@type": "SoftwareApplication",
        "name": "Word Counter",
        "description": meta.dec,
        "url": meta.link,
        "applicationCategory": "Utility",
        "operatingSystem": "Web",
        "author": publisher,
        "inLanguage": "en",
        "softwareVersion": "1.0",
        "keywords": "Count Words Online, Word Counter, free Word Counter, Accurate Word Counter",
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
    };;

    return (
        <div>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <h1 className="capitalize">Count Words Online</h1>
            <p>Have you ever found yourself needing to count your text effortlessly? Well, We've got the perfect solution for you – a free online tool that simplifies the process. Let's count your text with our amazing tool.</p>
            <h2 className="capitalize">Words Counter</h2>
            <Main />
            <Feedback title={"Count Words"} />

                        <h2>What is word counting?</h2>
            <p>Before we dive into the digital realm, let's understand the fundamental concept of word counting. It is the process of determining the number of words in a piece of text. Whether you're a student working on an essay or a content creator crafting an article, keeping track of word count is a common practice.
            </p>
            <h2>Importance of counting words</h2>
            <p>Why does word counting matter? The length of your content can influence its impact on the reader. It aids in meeting specific requirements, such as essay length or article guidelines.
            </p>
            <h2>Traditional Methods</h2>
            <h3>Manual word counting</h3>

            <p>In the past, writers relied on manual methods to count words. This involved physically tallying each word in a document, a time-consuming and error-prone process.
            </p>
            <h3>Limitations of manual counting</h3>

            <p>While manual counting was the norm, it had its drawbacks. The chances of overlooking words or miscounting were high, leading to inaccuracies in the final count. As content creation evolved, so did the need for more efficient solutions.
            </p>
            <h2>Digital Word Counting Tools</h2>
            <h3>Evolution of online word counting</h3>
            <p>With the advent of technology, counting words transitioned into the digital realm. Online word counting tools emerged, providing writers with a faster and more accurate alternative.
            </p>
            <h3>Benefits of digital tools</h3>
            <p>Digital word counting tools offer several advantages. They provide real-time counting, eliminate the risk of human error, and often come with additional features like character counting and readability analysis.
            </p>

            <h2>Frequently Asked Questions (FAQs)</h2>

            <Faq faqs={faqs} />
        </div>
    )
}