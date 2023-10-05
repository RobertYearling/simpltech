'use client'

import { Container } from '@/components/Container';

export function Unified() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-5xl md:text-right">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl simpl section_title">UNIFIED END-POINT MANAGEMENT & <br /> CYBER SECURITY</h2>
          <h2 className="font-display tracking-tight section_subtitle">Unify, Secure, and <span className="simpl">simpl™-fy</span> Your Endpoint Management Solution.</h2>
          <p className="mt-4 text-lg tracking-tight section_text text-left">At <span className="simpl">simpl technology solutions™</span> we take a comprehensive approach to managing and securing all of your devices & endpoints within your organization</p>
          <p className="mt-4 text-lg tracking-tight section_text text-left">These endpoints can include traditional devices like desktop computers and laptops, as well as mobile devices (smartphones and tablets), and even IoT (Internet of Things) devices. Our solutions aim to streamline device management, improve security, and enhance overall productivity by providing a centralized platform for managing all endpoints.</p>
          <button className="mt-4 text-lg tracking-tight section_text text-left req_button">REQUEST QUOTE &#62;</button>
        </div>
      </Container>
    </section>
  )
}
