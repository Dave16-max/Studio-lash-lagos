export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfbf7] text-[#1a1a1a]">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="font-bold tracking-widest text-xl">STUDIO LASH • LAGOS</h1>
        <a href="https://wa.me/2340000000000" className="bg-black text-white px-6 py-2 rounded-full text-sm">Book Now</a>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm tracking-[0.3em] mb-4">LEKKI • LAGOS</p>
          <h2 className="text-5xl md:text-7xl font-light leading-[0.9] mb-6">Lashes that<br/><span className="italic font-serif">speak luxury</span></h2>
          <p className="text-gray-600 mb-8 max-w-md">Premium lash extensions, brow sculpting & soft glam. Clean studio, soft hands, long-lasting retention.</p>
          <div className="flex gap-4">
            <a href="https://wa.me/2340000000000" className="bg-black text-white px-8 py-4 rounded-full">WhatsApp Booking</a>
            <a href="#services" className="border border-black px-8 py-4 rounded-full">View Menu</a>
          </div>
        </div>
        <div className="bg-[#e8ddd0] h-[500px] rounded-[40px] flex items-center justify-center">
          <p className="text-6xl">✨</p>
        </div>
      </section>

      <section id="services" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-light mb-10">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border p-8 rounded-[24px]">
              <h4 className="font-semibold mb-2">Classic Set - ₦20k</h4>
              <p className="text-sm text-gray-600">Natural, everyday elegance. 90 mins</p>
            </div>
            <div className="border p-8 rounded-[24px] bg-black text-white">
              <h4 className="font-semibold mb-2">Hybrid / Volume - ₦30k</h4>
              <p className="text-sm text-white/70">Full, fluffy, camera-ready. 120 mins</p>
            </div>
            <div className="border p-8 rounded-[24px]">
              <h4 className="font-semibold mb-2">Brow Sculpt + Tint - ₦15k</h4>
              <p className="text-sm text-gray-600">Snatched brows that frame you.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500">
        Studio Lash Lagos • Lekki Phase 1 • Open Daily 9am - 7pm
      </footer>
    </main>
  );
}
