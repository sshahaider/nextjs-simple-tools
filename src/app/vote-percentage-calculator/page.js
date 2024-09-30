import Script from "next/script"
import InfoCard from "@/components/InfoCard";
import Faq from "@/components/Faq";
import Main from "./Main";

const meta = {
    title: "Online Vote Percentage Calculator",
    dec: "Improve your web design with our Neumorphism CSS Generator. easily create sleek, modern UIs with this powerful tool. Boost your site's user experience now.",
    link: "https://yfbtools.com/vote-percentage-calculator"
}

export function generateMetadata() {

    return {
        title: meta.title,
        description: meta.dec,
        keywords: ['Vote Percentage Calculator', 'Vote Percentage Calculator', 'Votes Calculator'],
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

export default function PercentageCalculator() {


    const jsonLd = {
        "@context": "http://schema.org",
        "@type": "SoftwareApplication",
        "name": "Vote Percentage Calculator",
        "description": "A free online tool for Calculate Vote Percentage.",
        "url": meta.link,
        "applicationCategory": "Utility",
        "operatingSystem": "Web",
        "author": {
            "@type": "Organization",
            "name": "YFBTools"
        },
        "datePublished": "2024-01-08",
        "inLanguage": "en",
        "softwareVersion": "1.0",
        "keywords": "Vote Percentage Calculator, Vote Percentage Calculator, Votes Calculator",
        "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD",
            "availability": "http://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "YFBTools"
            }
        }
    }


    const faqs = [
        {
            question: "How is vote percentage calculated in ",
            answer: "In  the vote percentage is calculated by taking the total number of votes cast for a particular candidate or party and expressing it as a percentage of the total valid votes. The formula is simple: (Votes for Candidate/Party / Total Valid Votes) * 100.",
        },
        {
            question: "Is It Free?",
            answer: "Absolutely! Our goal is to make vote calculations hassle-free for everyone. Enjoy the benefits of the tool without spending a dime.",
        },
        {
            question: `Is the Tool Safe to Use?`,
            answer: `Absolutely! Our online tool is secure and user-friendly. No need to worry about privacy concerns.`
        },
    ];



    return (
        <div className="min-h-screen mb-16">
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <h1>Vote Percentage Calculator</h1>
            <p>Have you found yourself needing to calculate your Votes effortlessly? Well, We've got the perfect solution for you – a free online tool that simplifies the process. Let's Calculate your Votes with this free Vote Percentage Calculator</p>
            <Main />

            <section className="px-2 my-10 md:px-4 h-full w-full text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
                <InfoCard
                    icon={"fi-rs-infinity"}
                    title={"Free & Unlimited"}
                    dec={`This Calculator is free! Use it as many times as you want to Calculate unlimited votes.`}
                />
                <InfoCard
                    icon={"fi-br-time-fast"}
                    title={"Fast"}
                    dec={`Say goodbye to slow tools, and Experience Fast conversions with this quick and Fast Tool.`}
                />
                <InfoCard
                    icon={"fi-rr-users-alt"}
                    title={"User Friendly"}
                    dec={"The tool is designed to be user-friendly. So, Advanced knowledge is not required it's easy to use."}
                />
                <InfoCard
                    icon={"fi-rr-puzzle-alt"}
                    title={"Hassle-Free Tool"}
                    dec={`A online tool that simplifies the process – no downloads, no installations and no Subscriptions.`}
                />
                <InfoCard
                    icon={"fi-rr-universal-access"}
                    title={"Accessibility"}
                    dec={`With this tool, you can Calculate your votes at anytime, anywhere, with just a few clicks.`}
                />

            </section>

            <h2>Importance of Accurate Voting Data</h2>
            <p>Accurate vote percentage calculations empower citizens, political parties, and election commissions to make informed decisions and foster trust in the electoral process.</p>

            <h2>what is Vote Percentage Calculator</h2>
            <p>The Vote Percentage Calculator is a tool designed to determine the proportion of votes each candidate or party receives in an election. Its primary purpose is to provide a clear and concise representation of the electorate's choices.</p>

            <h2>Frequently Asked Questions (FAQs)</h2>
            <Faq faqs={faqs} />


        </div>
    )

}