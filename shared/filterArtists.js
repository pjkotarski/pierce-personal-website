export const filterArtists = (topArtists) => {
  return topArtists.items.map(artist => {
    return {
      name: artist.name,
      imgUrl: artist.images[0].url
    }
  });
}
