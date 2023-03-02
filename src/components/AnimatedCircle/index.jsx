import * as React from 'react';
import { cx } from 'linaria';
import { contentBox, imgBox, rotatingCircle, medCircle, sccContentBox } from './AnimatedCircle.styles';

function AnimationCircle({ scc, children }) {
  return (
    <div className={cx(contentBox, scc && sccContentBox)}>
      <div className={cx(imgBox)}>{children}</div>
      <div className={cx(rotatingCircle)}>
        <div className={cx(medCircle)} />
      </div>
    </div>
  );
}

export default AnimationCircle;
