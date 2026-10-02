export const metadata = {
  title: "About · StoneyApes",
};

export default function AboutPage() {
  return (
    <main className="section">
      <p className="kicker">The cut</p>
      <h1>About</h1>
      <p className="lede">
        StoneyApes is a Next.js App Router site. The gallery is a client view: search, rarity
        chips, a random reveal, and saves kept in this browser.
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
