import { of, from, Observer } from "rxjs";
import {} from "rxjs/operators";

/**
 * of : Pega argumentos e gera um stream com cada um
 * from : Cria a partir de um array, promise, iterable, observable ...
 */

const observer = {
  next: (val) => console.log("[NEXT]", val),
  complete: () => console.log("[COMPLETE]"),
};

/** Emitir os valores */
const gerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
};

const interavel = gerador();

// for (let id of interavel) {
//   console.log(id);
// }

from(interavel).subscribe(observer);

// const source$ = from([1, 2, 3, 4, 5]);
// const source3$ = of(...[1, 2, 3, 4, 5]); // Semelhante ao from
// const source2$ = of([1, 2, 3, 4, 5]);

// source$.subscribe(observer);
// source2$.subscribe(observer);

const source$ = from(fetch("https://api.github.com/users/willACosta"));

// source$.subscribe(async (res) => {
//   console.log(res);

//   const data = await res.json();
//   console.log(data);
// });
