'use client'

import { Container } from '@/components/Container';

export function OurServices() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-5xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl simpl section_title">OUR SERVICES</h2>
          <h2 className="font-display tracking-tight section_subtitle">Making managing mobile technology<span className="simpl"> simpl™</span>.</h2>
          <p className="mt-4 text-lg tracking-tight section_text">
            In an ever evolving technology landscape with more mobile devices being utilized than ever, the management of these
            devices should not be complicated - but <span className='simpl'>simpl™</span>. At <span className='simpl'>simpl technology solutions™</span>we pride ourselves on helping our clients
            create a strong mobile device strategy that eliminates mobile device security risks, drives productivity, and finds
            opportunities to maximize the value of their mobile inventory across its entire lifecycle.
          </p>
        </div>
      </Container>
    </section>
  )
}
