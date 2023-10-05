import { Container } from '@/components/Container'

export function ProductCycle() {
  return (
        <section className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32">
          <Container>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div className="">
                  <p className="mt-4 flex items-bottom text-base font-medium text-gray-900"><span className='section_subtitle simpl'>1.</span> New / Used Devices</p>
                  <p>As one of the largest aggregators of pre-owned hardware, we're able to offer your organization superior quality devices that will exceed your organization expectations, while helping you drive your business forward.</p>
                </div>
                <div className="">
                  <p className="mt-4 flex items-bottom text-base font-medium text-gray-900"><span className='section_subtitle simpl'>2.</span> Unified End-Point Management & Cyber Security</p>
                  <p>As a certified MSP simpl technology solutions™ partners with organizations to efficiently manage and secure their ever-expanding array of endpoints, ensuring that they remain productive, compliant, and protected against cyber threats.</p>
                </div>
                <div className="">
                  <p className="mt-4 flex items-bottom text-base font-medium text-gray-900"><span className='section_subtitle simpl'>3.</span> Mobile Device Management</p>
                  <p>Our MDM solutions create a hardware environment that saves time, money, and reduces risk. We collaborate with you to create a solution comprised of apps, content, security and device settings of what your team needs without compromising or hindering their experience.</p>
                </div>
                <div className="">
                  <p className="mt-4 flex items-bottom text-base font-medium text-gray-900"><span className='section_subtitle simpl'>4.</span> Device & Hardware Value Recovery</p>
                  <p>Gone are the days of selling your devices for pennies on the dollar to a traditional “recycling” or “buy back” company. With optimizing your devices value at the heart of what we do, we’ve created a custom device profit sharing program called The Device Value Optimization Program™. This program puts your organization in the position to offer your devices to a private network of vendors seeking high quality pre-owned hardware. In turn, driving the value of your devices up and putting more operating cash back into your organization.</p>
                </div>
              </div>
            </div>
          </div>
          </Container>
        </section>
  )
}
