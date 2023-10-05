'use client'

import { Container } from '@/components/Container';

export function DevicePurchasing() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-5xl md:text-left">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl simpl section_title">DEVICE PURCHASING</h2>
          <h2 className="font-display tracking-tight section_subtitle">The devices you need, at industry leading pricing and guaranteed quality.</h2>
          <p className="mt-4 text-lg tracking-tight section_text text-left">Our purchasing team has been in the used device business for over a decade and only procures devices that meet the standards of quality that your organization needs. Whether you are looking for gently used apple equipment to deploy to your team, or just need devices that power-on, we are able to source and deliver in the requested condition, guaranteed.</p>
          <p className="mt-4 text-lg tracking-tight section_text text-left"><span className="simpl">Our rigorous device grading process , which is carried out in a certified R2 facility, tests for key functionality and device quality in a 29+ point inspection.</span> We are an industry leader in quality, and have built a reptuation for exceeding industry standards in our grading process giving us the confidence that allows us to guarantee the quality of your investment when purchasing devices from us.</p>
          <button className="mt-4 text-lg tracking-tight section_text text-left req_button">REQUEST QUOTE &#62;</button>
        </div>
      </Container>
    </section>
  )
}
