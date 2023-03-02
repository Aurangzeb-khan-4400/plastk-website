import * as React from 'react';
import { cx } from 'linaria';
import { loaderParent } from './Loader.styles';
import icon_loader from '../../images/loader.svg';

function MemberCol({ className, ...props }) {
  return (
    <div className={cx(loaderParent, className)} {...props}>
      <div className="loader">
        <img loading="eager" src={icon_loader} alt="loader" />
      </div>
    </div>
  );
}

export default MemberCol;
