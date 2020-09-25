## Anotações sobre o estudo de extensões reativas

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

## Operadores de criação de Observables

of : Emite um stream de valores de forma sincrona (SYNC)
Ex.? of(1,2,3,4)

fromEvent: Emite valores com base em um evento definido (SYNC)
Ex.: fromEvent<Event>(document, 'scroll');

range: Emite um stream com base em um intervalo (SYNC)
Ex. range(1,5)

interval: Emite valores a cada x segundos (ASYNC)
Ex.: interval(1000);

timer: Emite valores depois de x segundos (ASYNC)

## Operadores

    Filtram os enormes fluxos de dados dos observables

- map

  Transforma a informação ou emite uma nova

- pluck

  Captura a propiedade de determiado objetoI
  EX.: { v: 1 } ; pluck('v') = 1

- mapTo

  Emite qualquer entradas para uma específica
  Ex.: mapTo('a') : 1 , 2, 3 = a, a, a

- filter

  Filtra a entrada de dados e só emite a saída para o subject apenas se satisfazer a condição

- tap

  Dispara efeitos secundários, usado para disparar alguma ação enquanto a informação flue pelo observable

- reduce

  Aplicar uma função acumuladora para um observable
  Só emite o valor final depois que o observable se completa, então traz o valor acumulado ao longo do processo

- scan

  Realiza a mesma tarefa do reducer, porém emite cada valor acumulado para saída

- take

  Limita a quantidade de emissões de um observable

- first

  Considera apenas a primeira emissão do observable, depois completa. Pode-se completar também com base em uma consição.

- takeWhile

  Emite os valores para a saída enquanto satisfazer uma determinada condição. E depois completa o observable.

- takeUntil

  Emite os valores até um determinado acontecimento (Quando um segundo observable emita seu primeiro valor)

- skip(3)

  Ignora determinadas quantidades de emissões informadas:

- distinc

  Emite os valores que não foram emitidos ainda

- distinctUntilChanged

  Emite os valores sempre que a emissão anterior não é seja a mesma (Explicitamente a diretamente anterior)

- distinctUntilKeyChanged

  Emite os valores sempre que a chave e valor seja diferente da anterior

- debounceTime

  Emite os valores a partir de determinado ms

- throttleTime

  A partir de cada emissão dentro de um determinado tempo ignora qualquer valor dentro do intervalo (Emite o valor e depois aguarda o tempo)

- sampleTime

  Obtêm o último valor da emissão em determinado tempo

- sample

  Emite o último valor emitido depois que um outro observable emitiu

- auditTIme

  Emite o último valor emitido pelo observable dentro de um determinado tempo

---

# Operadores de transformação (Nivelamento)

    Concatenam um ou mais observables em um mesmo fluxo de stream. Internamente realizam a inscrição dos observables que serão emitidos e emite a saída do valor.

- MergeAll

  Concatena todos os valores emitidos pelas linhas de tempo do source

- MergeMap

  Concatena os valores emitidos pelas linhas em vários subscribers

- switchMap

  Considera apeas uma única fonte de emissão dos valores e logo em seguida concatena-os

- concatMap

  Emite os valores para n emissões do source e cria as inscrições para cada um.

  Quando o source emite um novo valor, assim que a primeira emissão terminar, continua com os próximos

- exhaustMap

  Emite os valores até a emissão do source se completar, ignora qualquer outro valor que seja emitido enquanto a primeira inscrição estiver em fluxo
