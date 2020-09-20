import { fromEvent, interval } from "rxjs";
import { exhaustMap, take } from "rxjs/operators";

const intervalo$ = interval(500).pipe(take(3));
const click$ = fromEvent<MouseEvent>(document, "click");

/**
 * Ignora a emissão se algum observable já estiver em stream
 */

click$.pipe(exhaustMap(() => intervalo$)).subscribe(console.log);
