import {makeProject} from '@motion-canvas/core';

import example from './scenes/example?scene';
import negligibleGravity from './scenes/negligible-gravity?scene';
import quantitative from './scenes/quantitative?scene';

export default makeProject({
  scenes: [example, negligibleGravity, quantitative],
});
