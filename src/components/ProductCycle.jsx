'use client'

import Image from 'next/image'
import wheel from '@/images/wheel.png'

import { Container } from '@/components/Container'

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      <div>
        <div className='flex justify-center'>
          <Image src={wheel}/>
        </div>
        <div className="">
          <p className="mt-4 flex items-bottom text-base font-medium text-gray-900"><span className='section_subtitle simpl'>1.</span> New / Used Devices</p>
          <p>As one of the largest aggregators of pre-owned hardware, we're able to offer your organization superior quality devices that will exceed your organization expectations, while helping you drive your business forward.</p>
        </div>
      </div>
      <div>
        <div className="">
          <p className="mt-4 flex items-bottom text-base font-medium text-gray-900"><span className='section_subtitle simpl'>2.</span> Unified End-Point Management & Cyber Security</p>
          <p>As a certified MSP simpl technology solutions™ partners with organizations to efficiently manage and secure their ever-expanding array of endpoints, ensuring that they remain productive, compliant, and protected against cyber threats.</p>
        </div>
      </div>
      <div>
        <div className="">
          <p className="mt-4 flex items-bottom text-base font-medium text-gray-900"><span className='section_subtitle simpl'>3.</span> Mobile Device Management</p>
          <p>Our MDM solutions create a hardware environment that saves time, money, and reduces risk. We collaborate with you to create a solution comprised of apps, content, security and device settings of what your team needs without compromising or hindering their experience.</p>
        </div>
      </div>
      <div>
        <div className="">
          <p className="mt-4 flex items-bottom text-base font-medium text-gray-900"><span className='section_subtitle simpl'>4.</span> Device & Hardware Value Recovery</p>
          <p>Gone are the days of selling your devices for pennies on the dollar to a traditional “recycling” or “buy back” company. With optimizing your devices value at the heart of what we do, we’ve created a custom device profit sharing program called The Device Value Optimization Program™. This program puts your organization in the position to offer your devices to a private network of vendors seeking high quality pre-owned hardware. In turn, driving the value of your devices up and putting more operating cash back into your organization.</p>
        </div>
      </div>
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Container className="">
      <div className="hidden lg:block">
        <div className="">
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-x-2 items-top">
              <div className="flex flex-col grid-cols-1">
                <div className="">
                  <p className="mt-4 flex items-top text-base font-medium text-gray-900 product_features"><span className='section_subtitle simpl'>1.</span> New / Used Devices</p>
                  <p>As one of the largest aggregators of pre-owned hardware, we're able to offer your organization superior quality devices that will exceed your organization expectations, while helping you drive your business forward.</p>
                  <button className="mt-4 mb-6 text-lg tracking-tight section_text text-left req_button">EXPLORE &#62;</button>
                </div>
                <div className="">
                  <p className="mt-4 flex items-bottom text-base font-medium text-gray-900 product_features"><span className='section_subtitle simpl'>4.</span> Device & Hardware Value Recovery</p>
                  <p>Gone are the days of selling your devices for pennies on the dollar to a traditional “recycling” or “buy back” company. With optimizing your devices value at the heart of what we do, we’ve created a custom device profit sharing program called The Device Value Optimization Program™. This program puts your organization in the position to offer your devices to a private network of vendors seeking high quality pre-owned hardware. In turn, driving the value of your devices up and putting more operating cash back into your organization.</p>
                  <button className="mt-4 mb-6 text-lg tracking-tight section_text text-left req_button">EXPLORE &#62;</button>
                </div>
              </div>
              <Image src={wheel} className="mt-16 mx-auto max-w-auto lg:gap-x-8" />
              <div className="flex flex-col grid-cols-1">
                <div className="">
                  <p className="mt-4 flex items-top text-base font-medium text-gray-900 product_features"><span className='section_subtitle simpl'>2.</span> Unified End-Point Management & Cyber Security</p>
                  <p>As a certified MSP simpl technology solutions™ partners with organizations to efficiently manage and secure their ever-expanding array of endpoints, ensuring that they remain productive, compliant, and protected against cyber threats.</p>
                  <button className="mt-4 mb-6 text-lg tracking-tight section_text text-left req_button">EXPLORE &#62;</button>
                </div>
                <div className="">
                  <p className="mt-4 flex items-bottom text-base font-medium text-gray-900 product_features"><span className='section_subtitle simpl'>3.</span> Mobile Device Management</p>
                  <p>Our MDM solutions create a hardware environment that saves time, money, and reduces risk. We collaborate with you to create a solution comprised of apps, content, security and device settings of what your team needs without compromising or hindering their experience.</p>
                  <button className="mt-4 mb-6 text-lg tracking-tight section_text text-left req_button">EXPLORE &#62;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export function ProductCycle() {
  return (
    <section>
      <Container>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
