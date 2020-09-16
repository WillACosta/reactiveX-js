import { ajax, AjaxError } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

// ajax.get(url);

// ajax
//   .post(
//     url,
//     {
//       id: 1,
//       nome: "Teste",
//     },
//     {
//       "x-access-token": "123aaAA",
//     }
//   )
//   .subscribe(console.log);

ajax({
  url,
  method: "POST",
  headers: {
    "x-access-token": "123aaAA",
  },
  body: { id: 776, desc: "Test" },
}).subscribe(console.log);
