export const youtubeVideoId = (url: string): string => {
  const results = url.match('[\\?&]v=([^&#]*)');

  return results ? results[1] : "";
}
