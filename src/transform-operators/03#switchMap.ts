import { fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { pluck, switchMap } from "rxjs/operators";

const body = document.querySelector("body");
const textInpt = document.createElement("input");

body.append(textInpt);

const input$ = fromEvent<KeyboardEvent>(textInpt, "keyup");

const url = "https://httpbin.org/delay/1?arg=";

/**
 * Calcela as inscrições anteriores sempre que o source emite novos valores
 */
input$
  .pipe(
    pluck("target", "value"),
    switchMap((text) => ajax.getJSON(url + text))
  )
  .subscribe(console.log);
