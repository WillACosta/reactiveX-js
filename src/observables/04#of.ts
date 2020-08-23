import { of } from "rxjs";

/** Of is Sync : Emite um stream de informações de forma sincrona*/

// const obs$ = of(1, 2, 3, 4, 5, 6);

// const obs$ = of(...[1, 2, 3, 4, 5, 6], 2, 3, 5); // OPerador spread envia cada valor do array por vez

const obs$ = of(
  [1, 2],
  { a: 1, b: 2 },
  function () {},
  true,
  Promise.resolve(true)
);

obs$.subscribe(
  (next) => console.log("[NEXT", next),
  null,
  () => console.log("FIM do STREAM.")
);

console.log("Finalização do Obs.");
