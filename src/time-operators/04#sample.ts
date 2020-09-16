import { fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";

const intervalo$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, "click");

/**
 * Emite o valor do source apenas quando o segundo observable emite algo
 */
intervalo$.pipe(sample(click$)).subscribe(console.log);
