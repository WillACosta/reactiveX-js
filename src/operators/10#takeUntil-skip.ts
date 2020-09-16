import { interval, fromEvent } from "rxjs";
import { takeUntil, skip } from "rxjs/operators";
const btn = document.createElement("button");
btn.innerHTML = "Parar Timer";

document.querySelector("body").append(btn);

const counter$ = interval(1000);
const clickBtn$ = fromEvent<MouseEvent>(btn, "click").pipe(
  skip(1) // A partir do segundo click a emissão começa
);

/**
 * Completa o observable anteriorar assim que o segundo emite um valor
 */
counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: (val) => console.log("[NEXT]: ", val),
  complete: () => console.log("[COMPLETED]"),
});
