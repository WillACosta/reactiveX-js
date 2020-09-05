import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalAcumulador = (acc: number, atual: number) => acc + atual;

// REDUCE
from(numbers)
  .pipe(reduce(totalAcumulador, 0))
  .subscribe({
    next: (val) => console.log("NEXT", val),
    complete: () => console.log("COMPLETED"),
  });

//SCAN
from(numbers)
  .pipe(scan(totalAcumulador, 0))
  .subscribe({
    next: (val) => console.log("[NEXT SCAN]", val),
    complete: () => console.log("[COMPLETED SCAN]"),
  });

/**
 * Scan muito utilizado no padrão REDUX, na qual deve-se acumular
 * os valores do store em uma árvore única de objetos
 */

//REDUX
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  idade?: number;
}

const user: Usuario[] = [
  { id: "1", autenticado: false, token: null },
  { id: "1", autenticado: true, token: "QWER1213156QAQ" },
  { id: "1", autenticado: true, token: "878asqww256Aq" },
];

const state$ = from(user).pipe(
  scan<Usuario>(
    (acc, curr) => {
      return { ...acc, ...curr }; // Desestrutura os objetos e envia todos os seus valores
    },
    { idade: 23 }
  )
);

const id$ = state$.pipe(map((state) => state.id));

id$.subscribe(console.log);
