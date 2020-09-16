import { fromEvent } from "rxjs";
import { first, tap, map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

/**
 * Captura a primeira emissão que satisfaça a condição do first
 */
click$
  .pipe(
    map(({ clientX, clientY }) => ({
      clientX,
      clientY,
    })),
    first((event) => event.clientY >= 150)
  )
  .subscribe({
    next: (val) => console.log("[NEXT]: ", val),
    complete: () => console.log("[COMPLETED]"),
  });
