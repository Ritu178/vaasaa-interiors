import Link from "next/link";

export default function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden bg-brand py-14 text-white">
      <div className="absolute -right-16 -top-16 size-72 animate-float rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -bottom-20 left-10 size-60 animate-float-slow rounded-full bg-brand2/60 blur-3xl" />
      <div className="container-x relative">
        <nav className="mb-3 animate-fade-up text-sm opacity-75" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-gold">Home</Link> / <span>{title}</span>
        </nav>
        <h1 className="animate-fade-up text-4xl text-white [animation-delay:100ms] md:text-5xl">{title}</h1>
        {sub && <p className="mt-2 max-w-xl animate-fade-up opacity-85 [animation-delay:200ms]">{sub}</p>}
      </div>
    </section>
  );
}
