import { Observable, Subscriber, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value: any) => console.log("[next]:", value),
  error: (error: any) => console.warn("[Error]:", error),
  complete: () => console.log("[Complete]"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  const intervalID = setInterval(() => subscriber.next(Math.random()), 1000);

  // Finaliza o intervalo com o unsubscriber do observable
  return () => {
    clearInterval(intervalID);
    console.log("Intervalo FIM.");
  };
});

/** Valores diferentes emitidos ao longo do tempo */
// const subs1 = intervalo$.subscribe(observer);
// const subs2 = intervalo$.subscribe(observer);

/**
 * I - Cast multiplo para vários observadores
 * II - Observer
 * III - Pode-se manipular next,error e complete
 */

const subeject$ = new Subject();
const interSubj = intervalo$.subscribe(subeject$);

/** Valores iguais emitidos ao longo do tempo para todos os observadores inscritos */
const subs1 = subeject$.subscribe(observer);
const subs2 = subeject$.subscribe(observer);

/**
 * Pode-se introduzir informações dentro do fluxo do observable
 * usando o subject
 *
 * Informação produzida pelo observable: Cold Observable
 * Informação produzida fora do observable: Hot Observable
 *
 */
setTimeout(() => {
  subeject$.next(10);
  subeject$.complete();
  interSubj.unsubscribe();
}, 3500);
