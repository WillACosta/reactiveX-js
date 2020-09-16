import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

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

from(personagens).pipe(distinctUntilKeyChanged("nome")).subscribe(console.log);
