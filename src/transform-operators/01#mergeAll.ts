import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll, pluck } from "rxjs/operators";
import { GitHubUsers, User } from "../interfaces/github-users.interface";

const body = document.querySelector("body");
const textInpt = document.createElement("input");
const orderList = document.createElement("ol");

body.append(textInpt, orderList);

// Helpers
const viewUsers = (users: User[]) => {
  console.log(users);
  orderList.innerHTML = "";
  for (const u of users) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = u.avatar_url;

    const link = document.createElement("a");
    link.href = u.html_url;
    link.text = "View User";
    link.target = "_blank";

    li.append(img);
    li.append(u.login + " ");
    li.append(link);

    orderList.append(li);
  }
};

// Streams

const input$ = fromEvent<KeyboardEvent>(textInpt, "keyup");

/**
 * Problematização do uso de operadores de transformação
 *
 * Um Observable de eventos do teclado emite os valores a serem pesquisados
 * e logo em seguida emitimos outro observable com a req. ajax
 *
 * Tipar a entrada e saída
 */

input$
  .pipe(
    debounceTime<KeyboardEvent>(1000),
    pluck<KeyboardEvent, string>("target", "value"),
    map<string, Observable<GitHubUsers>>(
      (text) => ajax.getJSON(`https://api.github.com/search/users?q=${text}`) // Neste ponto, retorna um novo observable
    ),
    mergeAll<GitHubUsers>(), // Concatena o observable do map com o source
    pluck<GitHubUsers, User[]>("items")
  )
  .subscribe(viewUsers); // Devemos ter a informação transformada
