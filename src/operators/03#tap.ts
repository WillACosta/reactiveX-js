import { range } from "rxjs";
import { tap, map } from "rxjs/operators";

const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap((valor) => console.log("Antes", valor)),
    map((valor) => valor * 10),
    /** Define um observable parcial para trabalhra com o fluxo */
    tap({
      next: (valor) => console.log("Antes", valor),
      complete: () => console.log("Finalizado."),
    })
  )
  .subscribe((x) => console.log("Saída", x));
