import { fromEvent, interval } from "rxjs";
import { concatMap, switchMap, take } from "rxjs/operators";

const intervalo$ = interval(500).pipe(take(3));
const click$ = fromEvent<MouseEvent>(document, "click");

/**
 * Emite os valores por ordem de execução
 */
click$.pipe(concatMap(() => intervalo$)).subscribe(console.log);
