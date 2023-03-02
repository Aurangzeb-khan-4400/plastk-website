import React from 'react';

import { I } from './Icon.styles';
import Tooltip from '../Tooltip';

export default function Icon(props) {
  const { css } = props;
  if (props.showTooltip) {
    return (
      <Tooltip width={props.tooltipWidth} type={props.tooltipType} title={props.toolTipContent} css={css}>
        <I className="material-icons-outlined" {...props}>
          {props.iconName}
        </I>
      </Tooltip>
    );
  }
  return (
    <I className="material-icons-outlined" {...props}>
      {props.iconName}
    </I>
  );
}
