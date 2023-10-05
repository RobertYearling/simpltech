import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { OurServices } from '@/components/OurServices'
import { ProductCycle } from '@/components/ProductCycle'
import { DevicePurchasing } from '@/components/DevicePurchasing'
import { Unified } from '@/components/Unified'
import { MobileDeviceManagement } from '@/components/MobileDeviceManagement'
import { DeviceValue } from '@/components/DeviceValue'
import { ProductFlow } from '@/components/ProductFlow'
import { Spacer } from '@/components/Spacer'
import { WholesalePortal } from '@/components/WholesalePortal'
import { KeyFeatures } from '@/components/KeyFeatures'
import { Industries } from '@/components/Industries'
import { AboutUs } from '@/components/AboutUs'
import { Footer } from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurServices />
        <ProductCycle />
        <DevicePurchasing />
        <Unified />
        <MobileDeviceManagement />
        <DeviceValue />
        <ProductFlow />
        <Spacer />
        <WholesalePortal />
        <KeyFeatures />
        <Industries />
        <AboutUs />
      </main>
      <Footer /> 
    </>
  )
}
