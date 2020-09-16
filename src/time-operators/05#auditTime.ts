import { fromEvent } from "rxjs";
import { auditTime, tap, map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    tap((valor) => console.log("TAP:", valor)),
    auditTime(2000)
  )
  .subscribe((x) => console.log("Eimitiu depois de 2s:", x));
