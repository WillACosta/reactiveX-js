import { fromEvent } from "rxjs";

/**
 * Eventos do DOM
 */
const src$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (val) => console.log("[next]", val),
};

src$.subscribe(({ x, y }) => {
  console.log("X:", x);
  console.log("Y:", y);
});

src2$.subscribe((event) => {
  console.log(event.key);
});
