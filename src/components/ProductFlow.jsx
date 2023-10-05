import Image from 'next/image'
import { Container } from '@/components/Container'
import icobus from '@/images/logos/icobus.png'
import icobox from '@/images/logos/icobox.png'
import icophone from '@/images/logos/icophone.png'
import icocheck from '@/images/logos/icocheck.png'
import icolapi from '@/images/logos/icolapi.png'
import icodollar from '@/images/logos/icodollar.png'

export function ProductFlow() {
  return (
        <section className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32 pricing">
          <Container>
          <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
              <div>
                <div className="">
                  <Image src={icobus} className="object-center icons" />
                  <p className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">COORDINATE INVENTORY PICK UP OR SHIPMENT</p>
                </div>
              </div>
              <div>
                <div className="">
                  <Image src={icobox} className="object-center icons" />
                  <p className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">PRODUCT RECIEVED & INVENTORY VALIDATED</p>
                </div>
              </div>
              <div>
                <div className="">
                  <Image src={icophone} className="object-center icons" />
                  <p className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">DEVICES ARE WIPED, RENEWED, GRADED & TESTED FOR KEY FUNCTIONALITY IN R2 FACILITY</p>
                </div>
              </div>
              <div>
                <div className="">
                  <Image src={icocheck} className="object-center icons" />
                  <p className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">DEVICES REPORT REVIEWED & VALIDATED WITH SELLER</p>
                </div>
              </div>
              <div>
                <div className="">
                  <Image src={icolapi} className="object-center icons" />
                  <p className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">DEVICES LISTED ON OUR WHOLESALE E-COMMERCE PORTAL</p>
                </div>
              </div>
              <div>
                <div className="">
                  <Image src={icodollar} className="object-center icons" />
                  <p className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">YOU GET PAID AT WHOLESALE VALUE (NOT BUY BACK VALUE!)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
