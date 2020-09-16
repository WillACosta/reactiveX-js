import { of } from "rxjs";
import { map, pluck, catchError } from "rxjs/operators";
import { ajax, AjaxError } from "rxjs/ajax";

/** Fetch API */

const url = "https://api.github.com/users?per_page=5"; //willACosta

const errorHandler = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const fetchPromise = fetch(url);

fetchPromise
  .then(errorHandler)
  .then((response) => response.json().then(console.log))
  .catch((error) => console.warn("Error:", error));

/** rxjs Ajax */

const errorHandlerAjax = (error: AjaxError) => {
  console.warn("Error:", error);
  return of([]);
};

/**
 * CatchError captura um erro na emissão e pode acionar outro observable, ou emitir um erro
 */
ajax(url)
  .pipe(pluck("response"), catchError(errorHandlerAjax))
  .subscribe((users) => console.log("Resultado [AJAX]:", users));
