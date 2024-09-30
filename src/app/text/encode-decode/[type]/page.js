import Script from "next/script";
import Faq from "@/components/Faq";
import { FaqsArray, JsonMarkup, MetaSeo } from "../utails";
import Decoder from "./Decoder";
import Decoders from "../Decoders";
import InfoCard from "@/components/InfoCard";
import { notFound } from "next/navigation";
import Feedback from "@/components/Feedback";


export function generateMetadata({ params }) {
    let { type } = params;


    const tools = [
        'base64', 'utf-8' , 'utf-16'];

    if (!tools.includes(type)) {
        return notFound();
    };


    const title = type.toUpperCase();
    return MetaSeo(title, type);
}

export default function DecoderPage({ params }) {
    let { type } = params;

    const title = type.toUpperCase();

    const faqs = FaqsArray(title);
    const jsonLd = JsonMarkup(title, type, faqs);

    return (
        <div >
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <h1 className="capitalize">Encode / Decode {title} Online</h1>
            <p>Have you ever found yourself needing to Encode / Decode your {title} effortlessly? Well, We've got the perfect solution for you – a free online tool that simplifies the process. Let's Encode / Decode {title} with this free {title} Encoder / Decoder tool.</p>
            <h2 className="capitalize">{title} Encoder & Decoder</h2>
            <Decoder type={type} title={title} />
            <Feedback title={title} />
            <section className="px-2 my-10 md:px-4 h-full w-full text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
                <InfoCard
                    icon={"fi-rr-duplicate"}
                    title={"Copy to Clipboard"}
                    dec={`With this tool, you can copy your encoded/decoded text to Clipboard easily with just one click.`}
                />
                <InfoCard
                    icon={"fi-rr-document"}
                    title={".txt File"}
                    dec={`With this ${title} Encoder / Decoder, you can download a .txt file of your encoded/decoded text by clicking on download button.`}
                />
                <InfoCard
                    icon={"fi-bs-share"}
                    title={"Share easily"}
                    dec={'This tool is capable of quickly encodeding / decoding and sharing text to social media platforms in one place.'}
                />
                <InfoCard
                    icon={"fi-rs-infinity"}
                    title={"Free & Unlimited"}
                    dec={`This ${title} Encoder / Decoder is free! Use it as many times as you want to encode or decode unlimited Text.`}
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
                    dec={`This online tool simplifies the process – no downloads, no installations and no Subscriptions.`}
                />
                <InfoCard
                    icon={"fi-rr-universal-access"}
                    title={"Accessibility"}
                    dec={`you can use this tool at anytime, anywhere on any device, with just a few clicks.`}
                />

            </section>
            <h2>Similar Encoders & Decoders</h2>
            <Decoders pathname={`/text/encode-decode/${type}`} />
            <h2>Frequently Asked Questions (FAQs)</h2>
            <Faq faqs={faqs} />
        </div>
    )
}