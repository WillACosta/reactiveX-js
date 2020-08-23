import { range, asyncScheduler } from "rxjs";

/** SYNC
 * Emissões dentro do intervalo
 */
const src$ = range(1, 5, asyncScheduler);

//asyncScheduler : Transforma o stream como asincrono

console.log("INIT");
src$.subscribe((x) => console.log(x));
console.log("FIM");
