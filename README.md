## Alterar porta

`package.json` >> scripts.

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

## Operadores de criação SYNC

of : Emite um stream de valores de forma sincrona (SYNC)

    Ex.? of(1,2,3,4)

fromEvent: Emite valores com base em um evento definido (SYNC)

    Ex.: fromEvent<Event>(document, 'scroll');

range: Emite um stream com base em um intervalo (SYNC)

    Ex. range(1,5)

interval: Emite valores a cada x segundos (ASYNC)

    Ex.: interval(1000);

timer: Emite valores depois de x segundos (ASYNC)