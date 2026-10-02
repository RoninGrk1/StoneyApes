export const metadata = {
  title: "About · StoneyApes",
};

export default function AboutPage() {
  return (
    <main className="section">
      <p className="kicker">The cut</p>
      <h1>About</h1>
      <p className="lede">
        StoneyApes is a Next.js App Router starter. Pages live in app/, the
        crew list lives in data/apes.js, and styles live in app/globals.css.
      </p>
      <section className="card" style={{ marginTop: 24 }}>
        <p className="meta">Run it</p>
        <h2>Local</h2>
        <p>npm install</p>
        <p>npm run dev</p>
        <p>Open http://localhost:3000</p>
      </section>
    </main>
  );
}
