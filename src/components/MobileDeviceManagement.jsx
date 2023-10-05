'use client'

import { Container } from '@/components/Container';

export function MobileDeviceManagement() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-5xl md:text-left">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl simpl section_title">MOBILE DEVICE MANAGEMENT</h2>
          <h2 className="font-display tracking-tight section_subtitle">We help manage your devices, so you can do what you do best.</h2>
          <p className="mt-4 text-lg tracking-tight section_text text-left">CONFIGURATION</p>
          <p className="mt-4 text-lg tracking-tight section_text text-left">During configuration our MDM team works closely with you to build and assign user groups. We then create tailored blueprints comprised of what apps, content, security settings and device settings your employees need to be successful. This ensures that your organization is in complete control of its devices and its content without compromising the employee's experience.</p>
          <p className="mt-4 text-lg tracking-tight section_text text-left">DEPLOYMENT & MANAGEMENT</p>
          <p className="mt-4 text-lg tracking-tight section_text text-left">With the utilization of zero touch deployment tools, MDM device configuration has never been more seamless. Device management can be time-consuming, especially if you do not have dedicated I.T. support. With our mobile device management services, our tailored approach to serving your organization allows you and your team to focus on work, and not the devices you're using to get your work done. With our mobile device management admin services, we take the I.T. headache of managing technology out of your hands.</p>
          <button className="mt-4 text-lg tracking-tight section_text text-left req_button">REQUEST QUOTE &#62;</button>
        </div>
      </Container>
    </section>
  )
}
