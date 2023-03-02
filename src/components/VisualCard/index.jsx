import * as React from 'react';
import { cx } from 'linaria';
import { visualCardStyle, iconHolder, titleStyle } from './VisualCard.styles';

function VisualCard({ title, children }) {
  return (
    <div className={cx(visualCardStyle)}>
      <div className={cx(iconHolder)}>{children}</div>
      <span className={cx(titleStyle)}>{title}</span>
    </div>
  );
}

export default VisualCard;
