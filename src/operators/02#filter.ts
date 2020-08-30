import { range, of, from, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

// range(1, 10)
//   .pipe(filter((value) => value % 2 === 1))
//   .subscribe(console.log);

// range(1, 10)
//   .pipe(
//     filter((value, index) => {
//       console.log("[i]:", index);
//       return value % 2 === 1;
//     })
//   )
//   .subscribe(console.log);

interface Personagem {
  tipo: string;
  nome: string;
}

const personagens: Personagem[] = [
  {
    tipo: "Herói",
    nome: "Batman",
  },
  {
    tipo: "Anti-Herói",
    nome: "Gru",
  },
  {
    tipo: "Vilão",
    nome: "Vector",
  },
  {
    tipo: "Anti-Herói",
    nome: "Riddick",
  },
];

from(personagens)
  .pipe(filter((p) => p.tipo === "Anti-Herói"))
  .subscribe(console.log);

/** Imprime o código da tecla apeas se for um Enter */
const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code),
  filter((key) => key === "Enter")
);

keyUp$.subscribe(console.log);
