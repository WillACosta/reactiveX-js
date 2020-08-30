## Alterar porta

`package.json` >> scripts.

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

## Operadores de criação de Observables SYNC

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

# map : Transforma a informação ou emite uma nova

# pluck : Captura a propiedade de determiado objetoI

    EX.: { v: 1 }  ;  pluck('v')  =  1

# mapTo : Emite qualquer entradas para uma específica

    Ex.: mapTo('a')  : 1 , 2, 3 = a, a, a

# filter : Filtra a entrada de dados e só emite a saída para o subject apenas se satisfazer a condição

# tap : Dispara efeitos secundários, usado para disparar alguma ação enquanto a informação flue pelo observable