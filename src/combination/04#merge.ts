import { fromEvent, merge } from "rxjs";

const keyup = fromEvent(document, "keyup");
const click = fromEvent(document, "click");

/**
 * Combina os observables assim que se completam
 */
merge(keyup, click).subscribe(console.log);
