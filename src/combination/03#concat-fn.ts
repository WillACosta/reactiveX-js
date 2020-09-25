import { concat, interval, of } from "rxjs";
import { take } from "rxjs/operators";

const intervalo$ = interval(1000);

concat(
  intervalo$.pipe(take(3)),
  intervalo$.pipe(take(2)),
  of([1, 2, 3, 4, 5])
).subscribe(console.log);
