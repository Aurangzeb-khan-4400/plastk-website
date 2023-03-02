import * as React from 'react';
import { cx } from 'linaria';
import { container } from '../../styles/common';
import { downloadAppCta, offerBox, pt100 } from './DownloadAppCta.styles';
import PlastkAppBtns from '../PlastkAppBtns';

function DownloadAppCta() {
  return (
    <section className={cx(downloadAppCta)}>
      <div className={cx(container, pt100)}>
        <div className={cx(offerBox)}>
          <h2 className="no-border">Download Plastk App now !</h2>
          <p>The newest and best way to build your credit and get rewarded for it</p>

          <PlastkAppBtns center noMargin />
        </div>
      </div>
    </section>
  );
}

export default DownloadAppCta;
