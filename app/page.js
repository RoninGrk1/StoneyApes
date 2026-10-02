import Link from "next/link";
import { apes } from "../data/apes";

export default function HomePage() {
  const featured = apes.slice(0, 3);

  return (
    <main>
      <section className="hero">
        <div>
          <p className="kicker">Quarry crew · est. block 0</p>
          <h1>Stoney Apes</h1>
          <p className="lede">
            Carved slow, stacked heavy. Search the crew, save a face, and open the stone up close.
          </p>
          <div className="row">
            <Link className="btn" href="/gallery">
              Open the gallery
            </Link>
            <Link className="btn ghost" href="/about">
              Read the cut
            </Link>
          </div>
        </div>
        <img className="hero-portrait" src="/api/portrait/granite" alt="Granite, a basalt ape" />
      </section>
      <section className="grid">
        {featured.map((ape) => (
          <Link className="card ape-card" href="/gallery" key={ape.id}>
            <img src={ape.image} alt="" />
            <div className="card-body">
              <p className="meta">
                #{ape.id} · {ape.rarity}
              </p>
              <h2>{ape.name}</h2>
              <p>{ape.trait}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
