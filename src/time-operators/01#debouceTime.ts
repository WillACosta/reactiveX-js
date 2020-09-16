import { fromEvent } from "rxjs";
import { debounceTime, pluck, distinctUntilChanged } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(debounceTime(1000)).subscribe(console.log);

const input = document.createElement("input");

document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup")
  .pipe(
    debounceTime(1000),
    pluck("target", "value"),
    distinctUntilChanged() /** Não emite o valor até que ele seja diferente do anterior */
  )
  .subscribe(console.log);
