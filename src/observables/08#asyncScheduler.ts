import { asyncScheduler } from "rxjs";

/** asyncScheduler cria uma inscrição de setTimeout | setInterval */

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const hello = () => console.log("Hello!");
const hello2 = (name) => console.log(`Hello ${name}`);

/** Passa a função hello como referencia para ser excecutada
 * em determinado tempo
 */
asyncScheduler.schedule(hello, 2000);

// hello() // Executa a função

asyncScheduler.schedule(hello2, 2000, "Will");
// Passar o estado do asyncScheduler como 3° parametro
// E só aceita um parametro

const subs = asyncScheduler.schedule(
  function (state) {
    console.log("STATE: ", state);
    this.schedule(state + 1, 1000); // Chama o proprio Scheduler e passa o valor par a próxima chamada
  },
  2000,
  0
);

// setTimeout(() => {
//   subs.unsubscribe(); // Destrói a inscrição e todo o seu ciclo
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
