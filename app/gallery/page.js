import { apes } from "../../data/apes";

export const metadata = {
  title: "Gallery · StoneyApes",
};

export default function GalleryPage() {
  return (
    <main className="section">
      <p className="kicker">The faces</p>
      <h1>Gallery</h1>
      <p className="lede">Six from the first cut. Swap the marks for real art when you have it.</p>
      <div className="grid" style={{ marginTop: 28 }}>
        {apes.map((ape) => (
          <article className="card" key={ape.id}>
            <div className="ape-mark" />
            <p className="meta">
              #{ape.id} · {ape.rarity}
            </p>
            <h2>{ape.name}</h2>
            <p>
              {ape.trait}. {ape.blurb}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
