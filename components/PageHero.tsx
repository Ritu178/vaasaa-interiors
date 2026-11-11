import Link from "next/link";

export default function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden bg-brand py-16 text-white">
      <div className="absolute -right-24 -top-28 size-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="container-x relative">
        <nav className="mb-4 animate-fade-up text-sm opacity-80" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-gold">Home</Link> / <span className="text-gold">{title}</span>
        </nav>
        <h1 className="animate-fade-up text-5xl text-white [animation-delay:100ms] md:text-6xl">{title}</h1>
        <span className="mt-4 block h-1 w-20 origin-left animate-grow rounded-full bg-gold" />
        {sub && <p className="mt-5 max-w-xl animate-fade-up text-lg opacity-90 [animation-delay:250ms]">{sub}</p>}
      </div>
    </section>
  );
}
