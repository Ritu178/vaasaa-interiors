import Link from "next/link";

export default function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand via-brand2 to-brand bg-[length:200%_200%] py-20 text-white animate-gradient">
      {/* animated shapes */}
      <div className="absolute -right-20 -top-24 size-96 animate-drift rounded-full bg-gold/30 blur-3xl" />
      <div className="absolute -bottom-24 left-1/4 size-80 animate-float-slow rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-[12%] top-1/2 hidden size-40 -translate-y-1/2 animate-spin-slow rounded-full border-2 border-dashed border-gold/50 md:block" />
      <div className="absolute right-[18%] top-[30%] hidden size-4 animate-float rounded-full bg-gold md:block" />
      <div className="absolute right-[8%] top-[65%] hidden size-3 animate-float-slow rounded-full bg-white/70 md:block" />
      <div className="absolute right-[26%] top-[70%] hidden size-6 animate-float rotate-45 border-2 border-gold/70 md:block" />

      <div className="container-x relative">
        <nav className="mb-4 animate-slide-left text-sm opacity-80" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-gold">Home</Link> / <span className="text-gold">{title}</span>
        </nav>
        <h1 className="animate-fade-up text-5xl text-white [animation-delay:150ms] md:text-6xl">{title}</h1>
        <span className="mt-4 block h-1 w-24 origin-left animate-grow rounded-full bg-gold" />
        {sub && <p className="mt-5 max-w-xl animate-fade-up text-lg opacity-90 [animation-delay:350ms]">{sub}</p>}
      </div>
    </section>
  );
}
