'use client'

import { Container } from '@/components/Container';

export function AboutUs() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-5xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl simpl section_title">ABOUT US</h2>
          <h2 className="font-display tracking-tight section_subtitle">Our commitment to us, and to you.</h2>
          <p className="mt-4 text-lg tracking-tight section_text text-left">Our passion at <span className="simpl">simpl technology solutions™</span> has been and will always be connecting businesses and people to technology. With the complexities that already exist in the crowded digital space, we believe that using technology to propel your life and your business shouldn't be complicated. Our focus is on building long lasting relationships with trust and transparency at the center of everything we do.</p>
          <p className="mt-4 text-lg tracking-tight section_text text-left">Today's I.T. leaders are tasked with the impossible job of improving the end user experience, refreshing equipment faster, providing multichannel support, and being flexible to the business - all the while making sure the I.T. environment is secure. All of this that's being doing has the expectation of lowered cost and that's where we step in and help. We do the heavy lifting for you and your organization, making you sure you get the best value, so you can get back to doing what you do best.</p>
          <p className="mt-4 text-lg tracking-tight section_subtitle text-left simpl">WHAT WE'RE KNOWN FOR</p>
          <p className="text-lg tracking-tight section_text text-left">
          Global hardware sourcing and procurement,<br />
          Mobile device configuration,<br />
          Deployment and management administration,<br />
          Recycling
          </p>
          <p className="mt-4 text-lg tracking-tight section_subtitle text-left simpl">WHAT YOU CAN EXPECT</p>
          <p className="text-lg tracking-tight section_text text-left">
          Global hardware sourcing and procurement,<br />
          Mobile device configuration,<br />
          Deployment and management administration,<br />
          Recycling
          </p>
        </div>
      </Container>
    </section>
  )
}
