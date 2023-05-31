import {Circle, Latex, Line, Txt, makeScene2D} from '@motion-canvas/2d';
import {Vector2, all, createRef, createSignal, waitFor, waitUntil} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Create your animations here
  const scale = 10
  const mass = createSignal(1);
  const tex = createRef<Latex>();
  const g = createRef<Latex>();
  const m = createRef<Latex>();
  const r = createRef<Latex>();
  view.add(<>
  
        <Latex ref={tex} tex="{\color{White} F=G\frac{mm}{r^{2}}}" scale={5}></Latex>
        <Latex opacity={0} tex="{\color{White} G}" y={1000} scale={5} ref={g}></Latex>
        <Latex opacity={0} tex="{\color{White} mm}" y={1000} scale={5} ref={m}></Latex>
        <Latex opacity={0} tex="{\color{White} r^{2}}" y={1000} scale={5} ref={r}></Latex>
        </>
        )
    yield * waitUntil("g");
    yield * all(tex().opacity(0, 1), tex().position.y(1000, 1), g().opacity(1, 1), g().position.y(0, 1))
    yield * waitFor(0.5)
    g().tex("{\\color{White} G=6.6743\\cdot 10^{-11}}")
    yield * waitUntil("m")
    yield * all(g().opacity(0, 1), g().position.y(1000, 1), m().opacity(1, 1), m().position.y(0, 1))
    yield * waitUntil("r")
    yield * all(m().opacity(0, 1), m().position.y(1000, 1), r().opacity(1,1), r().position.y(0, 1))


});

function force(m: number, distance: number) {
    return 0.0667 * ((m * m)/(distance * distance))
}