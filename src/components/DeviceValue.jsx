'use client'

import { Container } from '@/components/Container';

export function DeviceValue() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-5xl md:text-right">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl simpl section_title">DEVICE VALUE OPTIMIZATION</h2>
          <h2 className="font-display tracking-tight section_subtitle">Stop liquidating, and start maximizing value.</h2>
          <p className="mt-4 text-lg tracking-tight section_text text-left">As your organization's devices come to their end of life cycle and you refresh to newer equipment we are here to help ensure that you get the best value possible for your old equipment. With decades of experience in navigating the secondary wholesale market with used apple devices we have devised a process and business model that allows us to get back<span className="simpl"> market value for your devices.</span></p>
          <p className="mt-4 text-lg tracking-tight section_text text-left">We believe in doing this, not just as a way for you to monetize as much as possible during this transaction, but also to help with making sure these devices are re-used and we are contributing to a positive impact on our environment. We do so by making sure all your data is securely wiped and the devices are properly prepared for reselling on the secondary market.</p>
          <p className="mt-4 text-lg tracking-tight section_text text-left">All of this is done in a seamless flow which will provide a great experience for your organization every time you need to refresh your equipment. <span className="simpl">On average we have been able to recover 20 - 30% more value than traditional buy-back or e-waste companies.</span></p>  
        </div>
      </Container>
    </section>
  )
}
