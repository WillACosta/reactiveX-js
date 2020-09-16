import { of, from } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";

const numbers$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numbers$.pipe(distinctUntilChanged()).subscribe({
  next: (val) => console.log("[NEXT]: ", val),
  complete: () => console.log("[COMPLETED]"),
});

interface Personagem {
  nome: string;
}

const personagens: Personagem[] = [
  { nome: "AranhaMan" },
  { nome: "AquaMan" },
  { nome: "Zero" },
  { nome: "PeixeMan" },
  { nome: "Zero" },
  { nome: "PeixeMan" },
  { nome: "PeixeMan" },
];

from(personagens)
  .pipe(distinctUntilChanged((anterior, atual) => anterior.nome === atual.nome))
  .subscribe(console.log);
