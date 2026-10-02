"use client";

import { useEffect, useMemo, useState } from "react";
import { apes, rarities } from "../../data/apes";

const STORAGE_KEY = "stoney-apes-saved";

export default function Gallery() {
  const [query, setQuery] = useState("");
  const [rarity, setRarity] = useState("All");
  const [selectedId, setSelectedId] = useState(null);
  const [saved, setSaved] = useState([]);
  const [onlySaved, setOnlySaved] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setSaved(JSON.parse(raw));
    } catch {
      setSaved([]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  }, [saved]);

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") setSelectedId(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return apes.filter((ape) => {
      const matchesRarity = rarity === "All" || ape.rarity === rarity;
      const matchesSaved = !onlySaved || saved.includes(ape.id);
      const matchesQuery =
        !needle ||
        ape.name.toLowerCase().includes(needle) ||
        ape.trait.toLowerCase().includes(needle) ||
        ape.stone.toLowerCase().includes(needle) ||
        ape.id.includes(needle);
      return matchesRarity && matchesSaved && matchesQuery;
    });
  }, [query, rarity, onlySaved, saved]);

  const selected = apes.find((ape) => ape.id === selectedId) || null;

  function toggleSaved(id) {
    setSaved((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  function revealRandom() {
    const pool = visible.length ? visible : apes;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setSelectedId(pick.id);
  }

  return (
    <div>
      <div className="controls">
        <input
          className="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search name, trait, stone, or id"
          aria-label="Search the crew"
        />
        <div className="chips" role="tablist" aria-label="Rarity">
          {rarities.map((item) => (
            <button
              key={item}
              className={item === rarity ? "chip on" : "chip"}
              onClick={() => setRarity(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="row">
          <button className="btn" type="button" onClick={revealRandom}>
            Reveal a random face
          </button>
          <button
            className={onlySaved ? "btn" : "btn ghost"}
            type="button"
            onClick={() => setOnlySaved((value) => !value)}
          >
            {onlySaved ? "Showing saved" : "Show saved only"} ({saved.length})
          </button>
        </div>
      </div>

      <p className="meta">
        {visible.length} face{visible.length === 1 ? "" : "s"} in the cut
      </p>

      {visible.length === 0 ? (
        <p className="lede">Nothing in this cut. Clear the filter and try again.</p>
      ) : (
        <div className="grid">
          {visible.map((ape) => (
            <article className="card ape-card" key={ape.id}>
              <button className="portrait-btn" type="button" onClick={() => setSelectedId(ape.id)}>
                <img src={ape.image} alt={`${ape.name}, a ${ape.stone} ape`} />
              </button>
              <div className="card-body">
                <p className="meta">
                  #{ape.id} · {ape.rarity}
                </p>
                <h2>{ape.name}</h2>
                <p>
                  {ape.trait}. {ape.blurb}
                </p>
                <div className="row">
                  <button className="btn ghost" type="button" onClick={() => setSelectedId(ape.id)}>
                    Inspect
                  </button>
                  <button className="btn ghost" type="button" onClick={() => toggleSaved(ape.id)}>
                    {saved.includes(ape.id) ? "Saved" : "Save"}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {selected ? (
        <div className="modal" role="dialog" aria-modal="true" aria-label={selected.name}>
          <button className="backdrop" type="button" aria-label="Close" onClick={() => setSelectedId(null)} />
          <div className="sheet">
            <img src={selected.image} alt="" />
            <div>
              <p className="meta">
                #{selected.id} · {selected.rarity} · {selected.stone}
              </p>
              <h2>{selected.name}</h2>
              <p>
                {selected.trait}. {selected.blurb}
              </p>
              <div className="row">
                <button className="btn" type="button" onClick={() => toggleSaved(selected.id)}>
                  {saved.includes(selected.id) ? "Remove save" : "Save this face"}
                </button>
                <button className="btn ghost" type="button" onClick={() => setSelectedId(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
