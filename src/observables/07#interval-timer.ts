import { timer, interval } from "rxjs";

const observer = {
  next: (val) => console.log("[NEXT]", val),
  complete: () => console.log("[COMPLETE]"),
};

const dateNow = new Date();

dateNow.setSeconds(dateNow.getSeconds() + 5); // Soma 5 segundos

// const intervalo$ = interval(1000);
// const timer$ = timer(2000);

/** Inicie a segunda execução(1s) depois de 2segs.  */
// const timer$ = timer(2000, 1000);

const timer$ = timer(dateNow); // Completa o observador em determinado tempo

// intervalo$.subscribe(observer);

timer$.subscribe((value) => {
  console.log({
    mess: "Tarefa concuída!",
    tempo: dateNow.getSeconds(),
  });
});

console.log("ASYNC.");
