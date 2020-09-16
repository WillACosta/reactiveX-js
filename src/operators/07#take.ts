import { of } from "rxjs";
import { take } from "rxjs/operators";

const number$ = of(1, 2, 3, 4, 5);

/**
 * take cancela a emissão do observable
 */
number$.pipe(take(3)).subscribe({
  next: (val) => console.log("[NEXT]: ", val),
  complete: () => console.log("[COMPLETED]"),
});
