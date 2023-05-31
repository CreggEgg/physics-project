import {Circle, Latex, Line, Txt, makeScene2D} from '@motion-canvas/2d';
import {Vector2, all, createRef, createSignal, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Create your animations here
  const scale = 10
  const mass = createSignal(1);
  
  view.add(<><Circle width={1} height={1} x={-500} scale={() =>mass() * scale} fill="#e13238"></Circle>
  <Circle width={1} height={1} x={500} scale={() =>mass() * scale} fill="#07f5f5"></Circle><Line lineDash={[20, 20]}
        startArrow
        endArrow
        endOffset={8}
        lineWidth={() => 0.5 * mass()}
        stroke={'#ffffff'} points={[Vector2.left.scale(500), Vector2.right.scale(500)]}></Line>
        <Txt fill="#ffffff" y={100} text={() => (force(mass(), 5)).toFixed(2) + "N"}></Txt>
        
        </>
        )
    yield * mass(100, 5);

});

function force(m: number, distance: number) {
    return 0.0667 * ((m * m)/(distance * distance))
}