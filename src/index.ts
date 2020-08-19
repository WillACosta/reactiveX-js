import { Observable, Subscriber, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value: any) => console.log("Prox [next]:", value),
  error: (error: any) => console.log("Error [obs]:", error),
  complete: () => console.log("Complete [obs]"),
};
