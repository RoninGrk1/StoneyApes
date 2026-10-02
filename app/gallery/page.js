import Gallery from "./gallery";

export const metadata = {
  title: "Gallery · StoneyApes",
};

export default function GalleryPage() {
  return (
    <main className="section">
      <p className="kicker">The faces</p>
      <h1>Gallery</h1>
      <p className="lede">
        Filter the crew, save a face, or let the quarry pick one. Click a portrait to inspect it.
      </p>
      <Gallery />
    </main>
  );
}
