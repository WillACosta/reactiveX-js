import { fromEvent, interval, of } from "rxjs";
import { map, mergeMap, take, takeUntil } from "rxjs/operators";

const words$ = of("a", "b", "c");

words$.pipe(
  mergeMap((word) =>
    interval(1000).pipe(
      map((i) => word + i),
      take(3)
    )
  )
);
//   .subscribe({
//     next: (value) => console.log("[Next]", value),
//     complete: () => console.log("Complete."),
//   });

const mouseDown$ = fromEvent<MouseEvent>(document, "mousedown");
const mouseUp$ = fromEvent<MouseEvent>(document, "mouseup");
const interval$ = interval();

/**
 * Quando o usuário solta o click do mouse, o interval começa a contar
 */
mouseDown$
  .pipe(mergeMap(() => interval$.pipe(takeUntil(mouseUp$))))
  .subscribe(console.log);
