type imageCoverSizes = "small" | "big";

export const youtubeCover = (url: string, size: imageCoverSizes = "small") => {
  const results = url.match('[\\?&]v=([^&#]*)');
  const video = !results ? url : results[1];

  return `https://img.youtube.com/vi/${video}/${size === "big" ? "0" : "2"}.jpg`;
}
