'use client'

import { Container } from "@/components/Container";

export function Spacer() {
    return (
        <section
            id="secondary-features"
            aria-label="Features for simplifying everyday business tasks"
            className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
        >
            <Container>
            <div className="md:text-right">
                <button className="mt-4 text-lg tracking-tight section_text text-left req_button">REQUEST QUOTE &#62;</button>
            </div>
            </Container>
        </section>
    )
}