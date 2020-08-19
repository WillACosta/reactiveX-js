import { Observable, Subscriber, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value: any) => console.log("Prox [next]:", value),
  error: (error: any) => console.log("Error [obs]:", error),
  complete: () => console.log("Complete [obs]"),
};

/** Criar Observable */

// const obs$ = Observable.create((subscriber) => {})

/**
 * É necessário existir inscrições para notificarem
 * aos interessados os dados
 */
const obs$ = new Observable<string>((subs) => {
  subs.next("W");
  subs.next("I");
  subs.next("L");
  subs.next("L");

  // Forçar error
  const a = undefined;
  a.err = "Erro!";

  subs.complete(); // Finaliza o stream de dados e não emite nenhuma informação

  subs.next("A");
});

// obs$.subscribe(console.log);

// obs$.subscribe((response) => {
//   console.log(response);
// });

/** Outra forma de chamar o subscriber, chamando todas as funções opcionais */
// obs$.subscribe(
//   (value) => console.log("Next:", value),
//   (error) => console.warn("Error:", error),
//   () => console.info("Completed!")
// );

obs$.subscribe(observer); // Abstrair as informações para a interface do Observer
