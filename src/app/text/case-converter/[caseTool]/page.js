import Script from "next/script";
import Faq from "@/components/Faq";
import { FaqsArray, JsonMarkup, MetaSeo } from "../utails";
import Converter from "./Converter";
import { caseConvertersList } from '@/lib/utails';

import { notFound } from "next/navigation";
import TextConverters from "../TextConverters";
import InfoCard from "@/components/InfoCard";
import Feedback from "@/components/Feedback";


export function generateMetadata({ params }) {
    let { caseTool } = params;

    const cases = caseConvertersList.map(item => item.link.split('/text/case-converter/')[1]);

    if (!cases.includes(caseTool)) {
        return notFound();
    };

    let type;


    const tool = caseTool.split('case')[0];
    const words = `${tool.charAt(0).toUpperCase() + tool.slice(1)} Case`;

    if (words.includes('-')) {
        type = words.split('-').join(' ');
    } else {
        type = words;
    }

    return MetaSeo(type, caseTool);
}

export default function CaseConverter({ params }) {
    let type;


    let { caseTool } = params;

    const tool = caseTool.split('case')[0];
    const words = `${tool.charAt(0).toUpperCase() + tool.slice(1)} Case`;

    if (words.includes('-')) {
        type = words.split('-').join(' ');
    } else {
        type = words;
    }
    const faqs = FaqsArray(type);
    const jsonLd = JsonMarkup(type, caseTool, faqs);

    return (
        <div >
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <h1 className="capitalize">Convert Text to {type} Online</h1>
            <p>Have you ever found yourself needing to convert text to {type} letters effortlessly? Well, fret not! We've got the perfect solution for you – a free online tool that simplifies the process. Let's convert your text to {type} with this free {type} Converter tool.</p>
            <h2 className="capitalize">{type} Converter</h2>
            <Converter type={caseTool} title={type} />
            <Feedback title={`${type} converter`} />
            <section className="px-2 my-10 md:px-4 h-full w-full text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
                <InfoCard
                    icon={"fi-rr-duplicate"}
                    title={"Copy to Clipboard"}
                    dec={`With this tool, you can copy your converted text to Clipboard easily with just one click.`}
                />
                <InfoCard
                    icon={"fi-rr-document"}
                    title={".txt File"}
                    dec={`With this ${type} Converter, you can download a .txt file of your converted text with just one click.`}
                />
                <InfoCard
                    icon={"fi-bs-share"}
                    title={"Share easily"}
                    dec={'This tool is capable of quickly converting and sharing text to social media platforms in one place.'}
                />
                <InfoCard
                    icon={"fi-br-info"}
                    title={"Additional details"}
                    dec={`With this tool, You can view additional details about their input, such as the number of words and letters.`}
                />
                <InfoCard
                    icon={"fi-rs-infinity"}
                    title={"Free & Unlimited"}
                    dec={`This ${type} Converter is free! Use it as many times as you want to convert unlimited Text.`}
                />
                <InfoCard
                    icon={"fi-br-time-fast"}
                    title={"Fast"}
                    dec={`Say goodbye to slow tools, and Experience Fast conversions with this quick and Fast  Tool.`}
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
                    dec={`With this tool, you can convert your text to ${tool} at anytime, anywhere, with just a few clicks.`}
                />

            </section>

            <h2>Similar Text Case Converters</h2>
            <TextConverters pathname={`/text/case-converter/${caseTool}`} />
            <h2>Frequently Asked Questions (FAQs)</h2>
            <Faq faqs={faqs} />
        </div>
    )
}