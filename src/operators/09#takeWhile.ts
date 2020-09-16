import { map, takeWhile } from "rxjs/operators";
import { fromEvent } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    /** O segundo parametro inclue o ultimo valor encontrado da condição */
    takeWhile(({ y }) => y <= 150, true)
  )
  .subscribe({
    next: (val) => console.log("[NEXT]: ", val),
    complete: () => console.log("[COMPLETED]"),
  });
