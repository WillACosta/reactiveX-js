import { range, fromEvent } from "rxjs";
import { map, pluck, mapTo } from "rxjs/operators";

// range(1, 5)
//   /** Pode-se tipar a entrada e saída do map */
//   .pipe(
//     map<number, string>((x) => (x * 10).toString())
//   )
//   .subscribe(console.log); // Valores devem estar o mais próximo do resultado final, depois de passar pelos operadores

/**
 * Captura a tecla pressionada pelo usuário
 */
const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");

keyUp$
  .pipe(map((event) => event.code))
  .subscribe((code) => console.log("MAP:", code));

/**Pluck */

/** Extrai determinada propiedade de um objeto */
keyUp$.pipe(pluck("key")).subscribe((code) => console.log("PLUCK:", code));

keyUp$
  .pipe(pluck("target", "baseURI")) // Extrai propiedades em camadas mais profundas do objeto
  .subscribe((code) => console.log("PLUCK:", code));

/**mapTo */

keyUp$
  .pipe(mapTo("Tecla pressionada: ")) // Extrai propiedades em camadas mais profundas do objeto
  .subscribe((code) => console.log("MAPTO:", code));
