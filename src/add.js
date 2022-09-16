import { selector } from "./app.js";

/*llamada de url para los datos*/
export async function pagina() {
  const url = await fetch('http://127.0.0.1:5500/src/json.json');
  const json = await url.json().then(mostra => array.push(mostra));
}

/*contenedor para almacenar los datos llamados*/
const array = [];


/*primera forma de de resolver el probleama */
const nombreEtiquetas = ["nombre", "apellido", "telefono", "amigos", "direccion"];


/*tiempo de espera para mostra los datos*/
setTimeout(() => {
for( const etiquetas of nombreEtiquetas){
    const elementosOption = document.createElement("option");
    elementosOption.append(etiquetas);
    selector.appendChild(elementosOption);
  }
}, 4000);



/****cosas por resolver********
1)llamadas para los datos que pidia el usuario
2)mostrar los datos mediante html 
3)poner tiempo de espera para el pedido
*/


/********IDEA DE COMO RESOLVER EL PROBLEMA PARA LOS NOMBRES ******
 * 1)sur un array para colocar los nombres de las etiquetas
 * 2)
 * 
 * 
 * 
 * */