import { Container } from '@/components/Container'
export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">Your I.T. Asset Management Partner</h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">From device purchase and management up to device monetization, we help organizations <span className="simpl">simpl™-fy</span> it all.</p>
      <div className="mt-4 lg:mt-7">
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          <ul
            role="list"
            className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0 simpl"
          >
            <li>New / Used<br/>Devices</li>
            <li>Unified End-Point Management & Cyber Security</li>
            <li>Mobile Device<br />Management</li>
            <li>Device & Hardware Value Recovery</li>
          </ul>
        </ul>
      </div>
    </Container>
  )
}
