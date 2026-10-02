import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <p className="kicker">Quarry crew · est. block 0</p>
        <h1>Stoney Apes</h1>
        <p className="lede">
          Carved slow, stacked heavy. A Next.js home for the crew: gallery,
          traits, and the story behind the stone.
        </p>
        <div className="row">
          <Link className="btn" href="/gallery">
            Open the gallery
          </Link>
          <Link className="btn ghost" href="/about">
            Read the cut
          </Link>
        </div>
      </section>
      <section className="grid">
        <article className="card">
          <p className="meta">01</p>
          <h2>Cut</h2>
          <p>Each ape is a face pulled from the same cliff.</p>
        </article>
        <article className="card">
          <p className="meta">02</p>
          <h2>Stack</h2>
          <p>Traits live in data/apes.js. Add a name, the gallery follows.</p>
        </article>
        <article className="card">
          <p className="meta">03</p>
          <h2>Ship</h2>
          <p>npm install, npm run dev, then deploy when the stone settles.</p>
        </article>
      </section>
    </main>
  );
}
