import { Observable, Subscriber, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value: any) => console.log("[next]:", value),
  error: (error: any) => console.warn("[Error]:", error),
  complete: () => console.log("[Complete]"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  let count = 0;

  const inter = setInterval(() => {
    count++;
    subscriber.next(count);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  // Terminar o intervalo assim que completar o observable
  return () => {
    clearInterval(inter);
    console.log("Intervalo destruído!");
  };
});

/**
 * A cada inscrição uma nova instância do observable se inicia
 */
const subs = intervalo$.subscribe(observer);
const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);

// Encadear subscrições
subs.add(subs1).add(subs2);

setTimeout(() => {
  // subs.unsubscribe();
  // subs1.unsubscribe();
  // subs2.unsubscribe();

  subs.unsubscribe(); // Remove a inscrição dos outros encadeados

  console.log("Comlete setTimeout");
}, 3000);
