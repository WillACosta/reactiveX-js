import { ajax, AjaxError } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1"; /** API de testes */

const obs$ = ajax.getJSON(url, {
  "Content-Type": "application/json",
  token: "AAasqweqwesd123",
});

obs$.subscribe((data) => console.log("[DATA]", data));
