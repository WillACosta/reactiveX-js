import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const url = "https://httpbinX.org/delay/1"; /** API de testes */

const errorHandlerAjax = (error: AjaxError) => {
  console.warn("Error:", error.message);
  return of({
    ok: false,
    users: [],
  });
};

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

/** Pode-se tratar os erros por meio da implementação dos metódos do observable */
obs$.pipe(catchError(errorHandlerAjax)).subscribe({
  next: (val) => console.log("[NEXT]", val),
  error: (err) => console.log("[ERROR]", err),
  complete: () => console.log("[COMPLETED]"),
});

obs2$
  .pipe(catchError(errorHandlerAjax))
  .subscribe((data) => console.log("[AJAX]", data));
