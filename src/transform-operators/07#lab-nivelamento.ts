import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  pluck,
  switchMap,
  tap,
} from "rxjs/operators";
import { fromEvent, of, scheduled } from "rxjs";
import { ajax } from "rxjs/ajax";

// Helper

const getUser = (pass) =>
  ajax.post("https://reqres.in/api/login?delay=1", pass).pipe(
    pluck("response", "token"),
    catchError((err) => of("123"))
  );

const form = document.createElement("form");
const iptEmail = document.createElement("input");
const inptPass = document.createElement("input");
const sBtn = document.createElement("button");

iptEmail.type = "email";
iptEmail.placeholder = "Email";
iptEmail.value = "eve.holt@reqres.in";

inptPass.type = "password";
inptPass.placeholder = "Senha";
inptPass.value = "cityslicka";

sBtn.innerHTML = "Entrar";

form.append(iptEmail, inptPass, sBtn);

document.querySelector("body").append(form);

// Streams

const submit$ = fromEvent<Event>(form, "submit")
  .pipe(
    tap((ev) => ev.preventDefault()), // Previnir o recarregamento da página com o enter
    map((ev) => ({ email: ev.target[0].value, password: ev.target[1].value })),
    exhaustMap(getUser)
  )
  .subscribe((token) => {
    console.log(token);
  });
