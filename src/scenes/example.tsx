import {Circle, Line, Txt, makeScene2D} from '@motion-canvas/2d';
import {Vector2, all, createRef, createSignal, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Create your animations here
const myCircle = createRef<Circle>();
const mass = createSignal(1);
const force = createSignal(() => (mass() * 9.81))
const scale = 140;
view.add(
  <>
  
  <Circle
  ref={myCircle}
      width={1}
      height={1}
      scale={() => mass() * scale}
      fill="#e13238"
      >

  </Circle><Txt y={() => mass() * scale * -1 + 50} text={() => mass().toFixed(2) + "kg"} fill="#ffffff" fontSize={50}></Txt><Line
        points={[
          Vector2.zero,
          () => Vector2.down.scale(scale * force() * -1 / 10),
        ]}
        lineDash={[20, 20]}
        
        endArrow
        endOffset={8}
        lineWidth={8}
        stroke={'#ffffff'}
      />
      <Txt fill="#ffffff" x={100} y={() => force() /20 * scale} text={() => force().toFixed(2) + "N"}></Txt></>
)
  yield* all(mass(0.5, 1).to(3, 1).to(2, 0.5).to(1, 0.5));
});
