async function pagina() {
  const url = await fetch('http://127.0.0.1:5500/src/json.json');
  const json = await url.json().then(mostra => console.log(mostra));
}

pagina();