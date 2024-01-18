import "isomorphic-fetch";
export const getImagen = async () => {
  try {
    const apiKey = "bbVbEp21OfKsaZHZ8c2yEGjn3QKqHPo4";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    return url;
    //Lo único que hacen los {variable} es sacar la información
    //que tu indiques, de todo el objeto.
  } catch (error) {
    //Manejo del error
    console.log("No se encontró el héore");
  }
};
