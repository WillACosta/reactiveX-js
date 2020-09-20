import { fromEvent, interval } from "rxjs";
import { mergeMap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

const intervalo$ = interval(1000);

/**
 * M M : Cria várias fontes de observables emitindo os valores para a saída
 * S M : Cancela as inscrições anteriores e mantém somente uma fonte de emissão
 */
click$
  .pipe(
    // mergeMap(() => intervalo$),
    mergeMap(() => intervalo$)
  )
  .subscribe(console.log);
