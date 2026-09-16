export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf7] text-zinc-900">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-12 py-6">
        <h1 className="text-xl font-bold tracking-widest">STUDIO LASH LAGOS</h1>
        <a href="https://wa.me/2340000000000" className="bg-black text-white px-6 py-2.5 rounded-full text-sm">Book Now</a>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-10 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm tracking-[0.3em] text-zinc-500 mb-4">LAGOS • LUXURY LASHES</p>
          <h2 className="text-5xl md:text-7xl font-light leading-[0.9] mb-6">Lashes That Speak <span className="font-serif italic">Luxury</span></h2>
          <p className="text-zinc-600 max-w-md mb-8 leading-relaxed">Classic, Hybrid & Volume extensions crafted by Lagos' top lash artists. Flawless, lightweight, long-lasting.</p>
          <div className="flex gap-4">
            <a href="https://wa.me/2340000000000" className="bg-black text-white px-8 py-4 rounded-full">Book Appointment</a>
            <a href="#services" className="border border-black px-8 py-4 rounded-full">View Services</a>
          </div>
          <div className="flex gap-8 mt-12">
            <div><p className="text-2xl font-bold">1000+</p><p className="text-xs text-zinc-500">CLIENTS</p></div>
            <div><p className="text-2xl font-bold">5★</p><p className="text-xs text-zinc-500">RATING</p></div>
            <div><p className="text-2xl font-bold">3+ YRS</p><p className="text-xs text-zinc-500">IN LAGOS</p></div>
          </div>
        </div>
        <div className="bg-zinc-200 h-[550px] rounded-[2.5rem] bg-[url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800')] bg-cover bg-center"></div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white px-6 md:px-12 py-20 rounded-t-[3rem]">
        <h3 className="text-3xl font-light mb-12">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {name: "Classic Set", price: "₦25,000", desc: "Natural, elegant, one extension per lash."},
            {name: "Hybrid Set", price: "₦30,000", desc: "Best of both, textured & fluffy. Most popular."},
            {name: "Volume Set", price: "₦35,000", desc: "Full glam, dramatic, ultra-lightweight fans."},
            {name: "Microblading", price: "₦40,000", desc: "Perfect brows, natural hair strokes."},
            {name: "Lash Lift & Tint", price: "₦15,000", desc: "Lift your natural lashes, no extensions."},
            {name: "Refill (2-3wks)", price: "₦15,000", desc: "Keep your set fresh and full."},
          ].map((s) => (
            <div key={s.name} className="border border-zinc-100 p-8 rounded-[1.5rem] hover:bg-zinc-50">
              <div className="flex justify-between mb-4"><h4 className="font-medium">{s.name}</h4><span className="font-bold">{s.price}</span></div>
              <p className="text-sm text-zinc-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white text-center py-24 px-6">
        <h3 className="text-4xl md:text-5xl font-light mb-6">Ready for your dream lashes?</h3>
        <p className="text-zinc-400 mb-8">Lekki • VI • Yaba - Home service available</p>
        <a href="https://wa.me/2340000000000" className="inline-block bg-white text-black px-10 py-4 rounded-full font-medium">Chat on WhatsApp</a>
      </section>

      <footer className="text-center py-8 text-xs text-zinc-400 tracking-widest">© 2026 STUDIO LASH LAGOS</footer>
    </main>
  );
}
