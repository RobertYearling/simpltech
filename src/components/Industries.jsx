'use client'

import { Container } from '@/components/Container';

export function Industries() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-5xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl simpl section_title">INDUSTRIES</h2>
          <h2 className="font-display tracking-tight section_subtitle">Solutions catered to your industry, to better serve you.</h2>
          <p className="mt-4 text-lg tracking-tight section_text">
          At <span className="simpl">simpl technology solutions™</span> we have experience working with organization of all types. We understand that different industries, and businesses have differing needs when it comes to their technology. That is why our team is comprised of experts that can help ensure your service is catered to support your specific industry.
          </p>
        </div>
      </Container>
    </section>
  )
}
