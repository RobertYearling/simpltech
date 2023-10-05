'use client'

import Image from 'next/image'

import { Container } from '@/components/Container'
import computer from '@/images/Layer-6.png'

export function KeyFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32 sm:text-center"
    >
      <Container>
        <h2 className="font-display text-3xl tracking-tight simpl sm:text-4xl text-left">KEY FEATURES</h2>   
          <div className="-mx-auto grid gap-y-10 gap-x-8 sm:grid-cols-1 lg:grid-cols-2 sm:text-center lg:max-w-none">
            <div className="mt-16 grid sm:text-center sm:grid-cols-2">
              <div className="p-2 text-left">
                <p className="section_title"><span className="simpl-lg">1. </span>24/7 LIVE ACCESS</p>
                <p className="">Our portal gives you a live look at all of our current inventory that is available for purchase. Once you have a login it as easy as signing in, browsing devices by model, and selecting what you need.</p>
              </div>
              <div className="p-2 text-left">
                <p className="section_title"><span className="simpl-lg">2. </span>NON-AUCTION ENVIRONMENT</p>
                <p className="">We are not a fan of auctions and having to compete with multiple buyers for the devices that you need. That is why our portal allows you to quickly browse, purchase, and get your equipment without the need to haggle or bid.</p>
              </div>
              <div className="p-2 text-left">
                <p className="section_title"><span className="simpl-lg">3. </span>EASY CHECK-OUT</p>
                <p className="">Our portal allows you to save bank and/or credit card information to your profile so you can easily complete the purchasing flow. Additionally, all units purchased include free ground standard shipping within the continental United States.</p>
              </div>
              <div className="p-2 text-left">
                  <p className="section_title"><span className="simpl-lg">4. </span>GUARANTEED DEVICE QUALITY</p>
                  <p className="">Due to our rigorous inspection and grading process we guarantee that the devices you purchase are in the condition they are described. We stand behind our device grading quality, and are commited to making sure you are device purchase.</p>
              </div>
            </div>
            <div className="flex text-center">
              <Image src={computer} className="key_image mt-16 p-2"/>
            </div>
          </div>
      </Container>
    </section>
  )
}
