import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement("div");

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, sapien sit amet efficitur cursus, arcu mauris fermentum diam, vel feugiat ligula augue et ligula. Sed accumsan nibh sapien, vitae dapibus velit efficitur at. Aliquam cursus laoreet lacus at rhoncus. Sed consequat id mauris vel porta. Etiam rutrum viverra molestie. Maecenas auctor posuere tristique. Donec tempus, eros vitae egestas molestie, neque neque vestibulum neque, a consectetur urna massa sed nunc. Mauris mauris neque, feugiat efficitur posuere efficitur, pellentesque quis metus. Cras interdum elit ex, ac pellentesque justo pellentesque vitae. Vestibulum consectetur dolor ac felis tempor ornare. Curabitur fringilla bibendum nisi eu lacinia. Vivamus eu lacus ac risus ultrices varius ut ac erat.
<br><br>
Suspendisse aliquet eu massa vel semper. Nulla iaculis vestibulum convallis. Nulla vitae massa et massa iaculis tincidunt vitae vel urna. Cras lobortis ligula tortor, ac facilisis risus pellentesque id. Morbi laoreet nunc libero, sed gravida tellus blandit tincidunt. Quisque dignissim congue leo rhoncus elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec luctus fermentum suscipit. Aliquam ac arcu eu ex tempor condimentum. Curabitur nec egestas diam. Mauris quis turpis ac nunc eleifend bibendum non elementum libero. Nulla interdum auctor faucibus.
<br><br>
Proin molestie libero diam, vitae pretium nibh venenatis at. Phasellus ac mi ut erat maximus varius. Aliquam varius efficitur nibh, id rhoncus tortor molestie non. Curabitur eu mauris non dolor ornare suscipit. Nulla enim mi, interdum non aliquam ac, mattis non felis. Donec a congue nisl. Vivamus ac massa imperdiet, rhoncus leo in, semper risus. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ac placerat nulla.
<br><br>
Sed ut pellentesque nisl. Vivamus finibus odio eget efficitur facilisis. Sed bibendum urna aliquam velit ornare condimentum. Pellentesque quis lacinia urna, nec eleifend odio. Pellentesque auctor augue eget ultricies dapibus. Vivamus vitae tempus metus, quis ultricies risus. Curabitur at scelerisque elit.
<br><br>
Etiam tristique arcu ut enim vulputate, sed volutpat quam ullamcorper. In porttitor, lectus nec mollis eleifend, sapien eros mollis enim, quis ornare neque lectus et lorem. Donec at feugiat magna. Fusce et mi nec justo rhoncus posuere eget nec diam. Nulla eget ex aliquet, sagittis magna nec, semper purus. In vestibulum imperdiet enim, quis venenatis nunc sollicitudin sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus placerat augue in erat efficitur, id fermentum dolor tristique. Ut et justo ac velit tempus ullamcorper vel posuere eros. Nam eros ipsum, finibus id mi ac, molestie cursus libero. Fusce sodales sit amet massa venenatis rhoncus. Maecenas luctus suscipit ex ut scelerisque. Cras eleifend erat in sem tristique ultrices. Donec condimentum molestie felis, id rhoncus enim luctus a. Nam scelerisque odio in risus vestibulum, ac lacinia felis auctor. Sed vulputate aliquet dui quis consectetur.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, sapien sit amet efficitur cursus, arcu mauris fermentum diam, vel feugiat ligula augue et ligula. Sed accumsan nibh sapien, vitae dapibus velit efficitur at. Aliquam cursus laoreet lacus at rhoncus. Sed consequat id mauris vel porta. Etiam rutrum viverra molestie. Maecenas auctor posuere tristique. Donec tempus, eros vitae egestas molestie, neque neque vestibulum neque, a consectetur urna massa sed nunc. Mauris mauris neque, feugiat efficitur posuere efficitur, pellentesque quis metus. Cras interdum elit ex, ac pellentesque justo pellentesque vitae. Vestibulum consectetur dolor ac felis tempor ornare. Curabitur fringilla bibendum nisi eu lacinia. Vivamus eu lacus ac risus ultrices varius ut ac erat.
<br><br>
Suspendisse aliquet eu massa vel semper. Nulla iaculis vestibulum convallis. Nulla vitae massa et massa iaculis tincidunt vitae vel urna. Cras lobortis ligula tortor, ac facilisis risus pellentesque id. Morbi laoreet nunc libero, sed gravida tellus blandit tincidunt. Quisque dignissim congue leo rhoncus elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec luctus fermentum suscipit. Aliquam ac arcu eu ex tempor condimentum. Curabitur nec egestas diam. Mauris quis turpis ac nunc eleifend bibendum non elementum libero. Nulla interdum auctor faucibus.
<br><br>
Proin molestie libero diam, vitae pretium nibh venenatis at. Phasellus ac mi ut erat maximus varius. Aliquam varius efficitur nibh, id rhoncus tortor molestie non. Curabitur eu mauris non dolor ornare suscipit. Nulla enim mi, interdum non aliquam ac, mattis non felis. Donec a congue nisl. Vivamus ac massa imperdiet, rhoncus leo in, semper risus. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ac placerat nulla.
<br><br>
Sed ut pellentesque nisl. Vivamus finibus odio eget efficitur facilisis. Sed bibendum urna aliquam velit ornare condimentum. Pellentesque quis lacinia urna, nec eleifend odio. Pellentesque auctor augue eget ultricies dapibus. Vivamus vitae tempus metus, quis ultricies risus. Curabitur at scelerisque elit.
<br><br>
Etiam tristique arcu ut enim vulputate, sed volutpat quam ullamcorper. In porttitor, lectus nec mollis eleifend, sapien eros mollis enim, quis ornare neque lectus et lorem. Donec at feugiat magna. Fusce et mi nec justo rhoncus posuere eget nec diam. Nulla eget ex aliquet, sagittis magna nec, semper purus. In vestibulum imperdiet enim, quis venenatis nunc sollicitudin sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus placerat augue in erat efficitur, id fermentum dolor tristique. Ut et justo ac velit tempus ullamcorper vel posuere eros. Nam eros ipsum, finibus id mi ac, molestie cursus libero. Fusce sodales sit amet massa venenatis rhoncus. Maecenas luctus suscipit ex ut scelerisque. Cras eleifend erat in sem tristique ultrices. Donec condimentum molestie felis, id rhoncus enim luctus a. Nam scelerisque odio in risus vestibulum, ac lacinia felis auctor. Sed vulputate aliquet dui quis consectetur.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, sapien sit amet efficitur cursus, arcu mauris fermentum diam, vel feugiat ligula augue et ligula. Sed accumsan nibh sapien, vitae dapibus velit efficitur at. Aliquam cursus laoreet lacus at rhoncus. Sed consequat id mauris vel porta. Etiam rutrum viverra molestie. Maecenas auctor posuere tristique. Donec tempus, eros vitae egestas molestie, neque neque vestibulum neque, a consectetur urna massa sed nunc. Mauris mauris neque, feugiat efficitur posuere efficitur, pellentesque quis metus. Cras interdum elit ex, ac pellentesque justo pellentesque vitae. Vestibulum consectetur dolor ac felis tempor ornare. Curabitur fringilla bibendum nisi eu lacinia. Vivamus eu lacus ac risus ultrices varius ut ac erat.
<br><br>
Suspendisse aliquet eu massa vel semper. Nulla iaculis vestibulum convallis. Nulla vitae massa et massa iaculis tincidunt vitae vel urna. Cras lobortis ligula tortor, ac facilisis risus pellentesque id. Morbi laoreet nunc libero, sed gravida tellus blandit tincidunt. Quisque dignissim congue leo rhoncus elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec luctus fermentum suscipit. Aliquam ac arcu eu ex tempor condimentum. Curabitur nec egestas diam. Mauris quis turpis ac nunc eleifend bibendum non elementum libero. Nulla interdum auctor faucibus.
<br><br>
Proin molestie libero diam, vitae pretium nibh venenatis at. Phasellus ac mi ut erat maximus varius. Aliquam varius efficitur nibh, id rhoncus tortor molestie non. Curabitur eu mauris non dolor ornare suscipit. Nulla enim mi, interdum non aliquam ac, mattis non felis. Donec a congue nisl. Vivamus ac massa imperdiet, rhoncus leo in, semper risus. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ac placerat nulla.
<br><br>
Sed ut pellentesque nisl. Vivamus finibus odio eget efficitur facilisis. Sed bibendum urna aliquam velit ornare condimentum. Pellentesque quis lacinia urna, nec eleifend odio. Pellentesque auctor augue eget ultricies dapibus. Vivamus vitae tempus metus, quis ultricies risus. Curabitur at scelerisque elit.
<br><br>
Etiam tristique arcu ut enim vulputate, sed volutpat quam ullamcorper. In porttitor, lectus nec mollis eleifend, sapien eros mollis enim, quis ornare neque lectus et lorem. Donec at feugiat magna. Fusce et mi nec justo rhoncus posuere eget nec diam. Nulla eget ex aliquet, sagittis magna nec, semper purus. In vestibulum imperdiet enim, quis venenatis nunc sollicitudin sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus placerat augue in erat efficitur, id fermentum dolor tristique. Ut et justo ac velit tempus ullamcorper vel posuere eros. Nam eros ipsum, finibus id mi ac, molestie cursus libero. Fusce sodales sit amet massa venenatis rhoncus. Maecenas luctus suscipit ex ut scelerisque. Cras eleifend erat in sem tristique ultrices. Donec condimentum molestie felis, id rhoncus enim luctus a. Nam scelerisque odio in risus vestibulum, ac lacinia felis auctor. Sed vulputate aliquet dui quis consectetur.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, sapien sit amet efficitur cursus, arcu mauris fermentum diam, vel feugiat ligula augue et ligula. Sed accumsan nibh sapien, vitae dapibus velit efficitur at. Aliquam cursus laoreet lacus at rhoncus. Sed consequat id mauris vel porta. Etiam rutrum viverra molestie. Maecenas auctor posuere tristique. Donec tempus, eros vitae egestas molestie, neque neque vestibulum neque, a consectetur urna massa sed nunc. Mauris mauris neque, feugiat efficitur posuere efficitur, pellentesque quis metus. Cras interdum elit ex, ac pellentesque justo pellentesque vitae. Vestibulum consectetur dolor ac felis tempor ornare. Curabitur fringilla bibendum nisi eu lacinia. Vivamus eu lacus ac risus ultrices varius ut ac erat.
<br><br>
Suspendisse aliquet eu massa vel semper. Nulla iaculis vestibulum convallis. Nulla vitae massa et massa iaculis tincidunt vitae vel urna. Cras lobortis ligula tortor, ac facilisis risus pellentesque id. Morbi laoreet nunc libero, sed gravida tellus blandit tincidunt. Quisque dignissim congue leo rhoncus elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec luctus fermentum suscipit. Aliquam ac arcu eu ex tempor condimentum. Curabitur nec egestas diam. Mauris quis turpis ac nunc eleifend bibendum non elementum libero. Nulla interdum auctor faucibus.
<br><br>
Proin molestie libero diam, vitae pretium nibh venenatis at. Phasellus ac mi ut erat maximus varius. Aliquam varius efficitur nibh, id rhoncus tortor molestie non. Curabitur eu mauris non dolor ornare suscipit. Nulla enim mi, interdum non aliquam ac, mattis non felis. Donec a congue nisl. Vivamus ac massa imperdiet, rhoncus leo in, semper risus. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ac placerat nulla.
<br><br>
Sed ut pellentesque nisl. Vivamus finibus odio eget efficitur facilisis. Sed bibendum urna aliquam velit ornare condimentum. Pellentesque quis lacinia urna, nec eleifend odio. Pellentesque auctor augue eget ultricies dapibus. Vivamus vitae tempus metus, quis ultricies risus. Curabitur at scelerisque elit.
<br><br>
Etiam tristique arcu ut enim vulputate, sed volutpat quam ullamcorper. In porttitor, lectus nec mollis eleifend, sapien eros mollis enim, quis ornare neque lectus et lorem. Donec at feugiat magna. Fusce et mi nec justo rhoncus posuere eget nec diam. Nulla eget ex aliquet, sagittis magna nec, semper purus. In vestibulum imperdiet enim, quis venenatis nunc sollicitudin sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus placerat augue in erat efficitur, id fermentum dolor tristique. Ut et justo ac velit tempus ullamcorper vel posuere eros. Nam eros ipsum, finibus id mi ac, molestie cursus libero. Fusce sodales sit amet massa venenatis rhoncus. Maecenas luctus suscipit ex ut scelerisque. Cras eleifend erat in sem tristique ultrices. Donec condimentum molestie felis, id rhoncus enim luctus a. Nam scelerisque odio in risus vestibulum, ac lacinia felis auctor. Sed vulputate aliquet dui quis consectetur.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, sapien sit amet efficitur cursus, arcu mauris fermentum diam, vel feugiat ligula augue et ligula. Sed accumsan nibh sapien, vitae dapibus velit efficitur at. Aliquam cursus laoreet lacus at rhoncus. Sed consequat id mauris vel porta. Etiam rutrum viverra molestie. Maecenas auctor posuere tristique. Donec tempus, eros vitae egestas molestie, neque neque vestibulum neque, a consectetur urna massa sed nunc. Mauris mauris neque, feugiat efficitur posuere efficitur, pellentesque quis metus. Cras interdum elit ex, ac pellentesque justo pellentesque vitae. Vestibulum consectetur dolor ac felis tempor ornare. Curabitur fringilla bibendum nisi eu lacinia. Vivamus eu lacus ac risus ultrices varius ut ac erat.
<br><br>
Suspendisse aliquet eu massa vel semper. Nulla iaculis vestibulum convallis. Nulla vitae massa et massa iaculis tincidunt vitae vel urna. Cras lobortis ligula tortor, ac facilisis risus pellentesque id. Morbi laoreet nunc libero, sed gravida tellus blandit tincidunt. Quisque dignissim congue leo rhoncus elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec luctus fermentum suscipit. Aliquam ac arcu eu ex tempor condimentum. Curabitur nec egestas diam. Mauris quis turpis ac nunc eleifend bibendum non elementum libero. Nulla interdum auctor faucibus.
<br><br>
Proin molestie libero diam, vitae pretium nibh venenatis at. Phasellus ac mi ut erat maximus varius. Aliquam varius efficitur nibh, id rhoncus tortor molestie non. Curabitur eu mauris non dolor ornare suscipit. Nulla enim mi, interdum non aliquam ac, mattis non felis. Donec a congue nisl. Vivamus ac massa imperdiet, rhoncus leo in, semper risus. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ac placerat nulla.
<br><br>
Sed ut pellentesque nisl. Vivamus finibus odio eget efficitur facilisis. Sed bibendum urna aliquam velit ornare condimentum. Pellentesque quis lacinia urna, nec eleifend odio. Pellentesque auctor augue eget ultricies dapibus. Vivamus vitae tempus metus, quis ultricies risus. Curabitur at scelerisque elit.
<br><br>
Etiam tristique arcu ut enim vulputate, sed volutpat quam ullamcorper. In porttitor, lectus nec mollis eleifend, sapien eros mollis enim, quis ornare neque lectus et lorem. Donec at feugiat magna. Fusce et mi nec justo rhoncus posuere eget nec diam. Nulla eget ex aliquet, sagittis magna nec, semper purus. In vestibulum imperdiet enim, quis venenatis nunc sollicitudin sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus placerat augue in erat efficitur, id fermentum dolor tristique. Ut et justo ac velit tempus ullamcorper vel posuere eros. Nam eros ipsum, finibus id mi ac, molestie cursus libero. Fusce sodales sit amet massa venenatis rhoncus. Maecenas luctus suscipit ex ut scelerisque. Cras eleifend erat in sem tristique ultrices. Donec condimentum molestie felis, id rhoncus enim luctus a. Nam scelerisque odio in risus vestibulum, ac lacinia felis auctor. Sed vulputate aliquet dui quis consectetur.
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

/** Cálculo do progresso */

const calcScroll = (event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight,
  } = event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

/** Streams */

const scroll$ = fromEvent(document, "scroll");

const progress$ = scroll$.pipe(
  // map((event) => calcScroll(event)),
  map(calcScroll),
  tap(console.log)
);

progress$.subscribe((percent) => {
  progressBar.style.width = `${percent}%`;
});
