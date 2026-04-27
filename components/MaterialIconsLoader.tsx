"use client";

import { useEffect } from "react";

/**
 * Loads the Material Symbols Outlined font asynchronously after first paint
 * so it does not render-block initial HTML. The same icon font is used across
 * the site; we only inject one stylesheet, never a second icon set.
 */
export default function MaterialIconsLoader() {
  useEffect(() => {
    const id = "material-symbols-stylesheet";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
}
