import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";


export function AccordionDemo() {
    return (
        <Accordion type="single" collapsible className="  w-[80%]">
            <AccordionItem value="item-1"  >
                <AccordionTrigger className="text-white md:text-xl hover:no-underline text-nowrap ">Onlyfans Account Management</AccordionTrigger>
                
                <AccordionContent className="text-white ">
                    You will have an account manager who will take care of you 24/7
                </AccordionContent>
                <AccordionContent className="text-white ">
                    Onlyfans Chatter
                </AccordionContent>
                <AccordionContent className="text-white ">
                    Guides to help you with content creation
                </AccordionContent>
                <AccordionContent className="text-white ">
                    Fan management (refunds, recoveries,…)
                </AccordionContent>
                <AccordionContent className="text-white ">
                    PPV + tip sales and upsell management
                </AccordionContent>
                <AccordionContent className="text-white ">
                    General weekly audits and reports for social media and OnlyFans.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-white md:text-xl hover:no-underline text-nowrap">Onlyfans Account Audit
                </AccordionTrigger>
                <AccordionContent className="text-white">
                    Complete audit of all your account performance, revenue, chats, and your account
                </AccordionContent>
                <AccordionContent className="text-white">
                    Audits to better understand where weaknesses lie and where potential exists
                </AccordionContent>
                <AccordionContent className="text-white">
                    Precise steps to turn these weaknesses into strengths and significantly increase your revenue with less time spent on them
                </AccordionContent>
                <AccordionContent className="text-white">
                    + Social media audits to get the most out of your brand
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-white md:text-xl hover:no-underline text-nowrap">Account Growth & Onlyfans Marketing</AccordionTrigger>
                <AccordionContent className="text-white">
                    Social media management for existing or new accounts (Instagram, Reddit, Twitter and many more).
                </AccordionContent>
                <AccordionContent className="text-white">
                    Daily Reddit promotion (with our automations we make sure to post there 24/7).
                </AccordionContent>
                <AccordionContent className="text-white">
                    We take care of your direct messages on social media
                </AccordionContent>
                <AccordionContent className="text-white">
                    We organize promotions like shoutouts, GGS and much more
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
