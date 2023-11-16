// Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log();

fetch("https://api.agify.io?name=michael")
  .then((response) => {
    if (!response.ok) {
      throw new Error("la red no respondió");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Hibo in problema con la solicitud fetch:", error);
  });
