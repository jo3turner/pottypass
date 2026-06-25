import Image from 'next/image';

function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 1C11.163 1 4 8.163 4 17C4 28.5 20 45 20 45C20 45 36 28.5 36 17C36 8.163 28.837 1 20 1Z"
        fill="#4CB6F4"
      />
      <circle cx="15" cy="13" r="3" fill="white" />
      <circle cx="25" cy="13" r="3" fill="white" />
      <path
        d="M11 24C11 19.5 13.5 17 15.5 17C17 17 18 17.5 20 17.5C22 17.5 23 17 24.5 17C26.5 17 29 19.5 29 24"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

const features = [
  {
    title: 'Find Instantly',
    description: 'Open the app and see verified restrooms nearby on a live map — sorted by distance.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#4CB6F4" />
        <circle cx="12" cy="9" r="2.5" fill="white" />
      </svg>
    ),
  },
  {
    title: 'Trusted & Clean',
    description: 'Every location is hand-vetted. No surprises — just verified, high-quality restrooms.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" fill="#4CB6F4" />
        <path d="M8 12L10.5 14.5L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Made for Everyone',
    description: 'Locals, tourists, parents, professionals — relief is always just a tap away.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="6" r="3" fill="#4CB6F4" />
        <circle cx="15" cy="6" r="3" fill="#4CB6F4" />
        <path d="M3 20C3 15.5 5.5 13 9 13C10.5 13 12 13.5 12 13.5C12 13.5 13.5 13 15 13C18.5 13 21 15.5 21 20" stroke="#4CB6F4" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <LogoIcon size={30} />
            <span className="font-bold text-lg text-[#334155] tracking-tight">PottyPass</span>
          </div>
          <a
            href="https://instagram.com/pottypassapp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#334155]/60 hover:text-[#4CB6F4] transition-colors"
            aria-label="PottyPass on Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Left — copy + form */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E6F7FE] text-[#1F4D7A] text-xs font-semibold px-4 py-2 rounded-full mb-8 uppercase tracking-wide">
              <span className="w-1.5 h-1.5 bg-[#4CB6F4] rounded-full animate-pulse" />
              Coming Soon · New York City
            </div>

            {/* Headline */}
            <h1 className="text-[52px] lg:text-[64px] font-bold text-[#334155] leading-[1.05] mb-6 tracking-tight">
              Restrooms<br />
              when you<br />
              <span className="text-[#4CB6F4]">need them.</span>
            </h1>

            {/* Sub */}
            <p className="text-lg text-[#334155]/60 leading-relaxed mb-10 max-w-[420px]">
              PottyPass is NYC&apos;s curated network of clean, private restrooms — available on‑demand, exactly when you need it most.
            </p>

            <a
              href="https://0cc9a36e.sibforms.com/serve/MUIFAM8udK9KTVBHDLq_TuSqDnVk6f4jajuiQje8xFcFOz2FO5iNj3mdJ-Mdm_vrWJS_U--Q0v7fa6Wc_hE8Xlk4aoHcH6K2KbQxU8D_pwz-GD15_hyqdcfBuSUsSNzzPk4kog7ISg7DlgZvjvfsc9iiicR8PQxeCZnf7R3TLo14bAaAYu5ve2nD5C975izGB_oQEGljN96-xsu4Ew=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#4CB6F4] text-white text-sm font-semibold rounded-xl hover:bg-[#1F4D7A] transition-colors duration-200"
            >
              Join the Waitlist
            </a>

            <p className="text-sm text-[#334155]/35 mt-4">
              No spam. Just a heads-up when we launch.
            </p>
          </div>

          {/* Right — phone mockup */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background glow */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(76,182,244,0.18) 0%, transparent 70%)',
                  transform: 'scale(1.4)',
                }}
              />

              {/* Second phone (behind, slightly offset) */}
              <div
                className="absolute"
                style={{
                  top: '30px',
                  right: '-50px',
                  zIndex: 1,
                  transform: 'rotate(6deg)',
                  opacity: 0.85,
                }}
              >
                <div
                  className="rounded-[36px] shadow-xl overflow-hidden"
                  style={{
                    width: '200px',
                    background: '#1a1a1a',
                    padding: '8px',
                  }}
                >
                  <div className="rounded-[28px] overflow-hidden">
                    <Image
                      src="/screens/detail.png"
                      alt="PottyPass venue detail"
                      width={184}
                      height={398}
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
              </div>

              {/* Primary phone */}
              <div className="relative z-10">
                <div
                  className="rounded-[44px] shadow-2xl"
                  style={{
                    background: '#1a1a1a',
                    padding: '10px',
                    width: '260px',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.08)',
                  }}
                >
                  {/* Dynamic island */}
                  <div
                    className="absolute left-1/2 bg-black rounded-full z-20"
                    style={{
                      top: '18px',
                      transform: 'translateX(-50%)',
                      width: '88px',
                      height: '28px',
                    }}
                  />
                  {/* Screen */}
                  <div className="rounded-[36px] overflow-hidden">
                    <Image
                      src="/screens/explore.png"
                      alt="PottyPass app — find nearby restrooms"
                      width={240}
                      height={520}
                      className="w-full h-auto block"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="bg-[#F3FAFE] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(76,182,244,0.12)' }}
                >
                  {f.icon}
                </div>
                <h3 className="font-semibold text-[#334155] text-base mb-2">{f.title}</h3>
                <p className="text-[#334155]/55 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E5E7EB] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <LogoIcon size={20} />
            <span className="text-[#334155]/50 text-sm">© 2026 PottyPass</span>
          </div>
          <a
            href="https://instagram.com/pottypassapp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#334155]/40 hover:text-[#4CB6F4] text-sm transition-colors"
          >
            @pottypassapp
          </a>
        </div>
      </footer>

    </div>
  );
}
