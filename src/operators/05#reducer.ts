import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acc: number, atual: number) => acc + atual;

const total = numbers.reduce(totalReducer, 0);

console.log("Total Array:", total);

interval(500)
  .pipe(
    take(6) /** take completa o observable dentro do intervalo especificado */,
    tap(console.log),
    reduce(totalReducer, 0)
  )
  .subscribe({
    next: (val) => console.log("NEXT", val),
    complete: () => console.log("COMPLETED"),
  });
