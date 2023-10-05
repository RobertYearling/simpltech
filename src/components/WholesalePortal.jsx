'use client'

import { Container } from '@/components/Container';

export function WholesalePortal() {
  return (
    <section
      id="secondary-features"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32 bg-dark"
    >
      <Container>
        <div className="mx-auto max-w-5xl md:text-center text-white">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl section_title">INTRODUCING OUR EXCLUSIVE WHOLESALE PORTAL</h2>
          <p className="mt-4 text-lg tracking-tight section_text">Say good-bye to the days of excel price-lists and say hello to our easy to use wholesale portal. Our portal was designed with our
          clients in mind so that they can easily see our current inventory, and purchase devices with the click of a button.</p>
          <button className="mt-4 text-lg tracking-tight section_text text-left req_button">REQUEST ACCESS &#62;</button>
        </div>
      </Container>
    </section>
  )
}
