const getImagen = async () => {
  try {
    const apiKey = "bbVbEp21OfKsaZHZ8c2yEGjn3QKqHPo4";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const img = document.createElement("img");
    img.src = data.images.original.url;
    //Lo único que hacen los {variable} es sacar la información
    //que tu indiques, de todo el objeto.
    document.body.append(img);
  } catch (error) {
    //Manejo del error
    console.error(error);
  }
};

getImagen().then(console.log).catch(console.warn);

// const apiKey = "bbVbEp21OfKsaZHZ8c2yEGjn3QKqHPo4";
// const peticion = fetch(
//   `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
// );
// peticion
//   .then((resp) => resp.json())
//   .then(({ data }) => {
//     const { url } = data.images.original;
//     const img = document.createElement("img");
//     img.src = url;
//     document.body.append(img);
//   })
//   .catch(console.warn);
