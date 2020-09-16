import { fromEvent, asyncScheduler } from "rxjs";
import { pluck, distinctUntilChanged, throttleTime } from "rxjs/operators";

const input = document.createElement("input");

document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup")
  .pipe(
    throttleTime(
      1000,
      asyncScheduler,
      /** Configuração para retornar todo o valor depois que passar o tempo */
      {
        leading: true,
        trailing: true,
      }
    ),
    pluck("target", "value"),
    distinctUntilChanged() /** Não emite o valor até que ele seja diferente do anterior */
  )
  .subscribe(console.log);
