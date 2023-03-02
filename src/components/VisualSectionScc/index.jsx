/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { cx } from 'linaria';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { container } from '../../styles/common';
import {
  visualSection,
  holder,
  textBox,
  scrollDown,
  infoListStyle,
  value,
  infoTitle,
} from '../VisualSection/VisualSection.styles';

import { cardRow, btnMb, sccTextBox, fullWidth, pr40, sccHolder } from './VisualSectionScc.styles';
import Button from '../Button';
import AnimationCircle from '../AnimatedCircle';
import VisualCard from '../VisualCard';
import { moengage } from '../../../utils/moengageEvents';

// eslint-disable-next-line no-unused-vars
function Visual({ title, scrollToId }) {
  return (
    <section className={cx(visualSection)}>
      <div className={cx(container)}>
        <div className={cx(holder, sccHolder, pr40)}>
          <div className={cx(textBox, sccTextBox)}>
            <h1 className="h2 no-border">{title}</h1>

            <div className={cx(cardRow)}>
              <VisualCard title="0% Interest Rate*">
                <StaticImage loading="eager" src="../../images/icon-img01.svg" alt="icon" />
              </VisualCard>
              <VisualCard title="Sign up Bonus*">
                <StaticImage loading="eager" src="../../images/icon-img02.svg" alt="icon" />
              </VisualCard>
              <VisualCard title="Referral Program*">
                <StaticImage loading="eager" src="../../images/icon-img03.svg" alt="icon" />
              </VisualCard>
            </div>
            <Button
              className={cx(btnMb, fullWidth)}
              as={Link}
              to="/sign-up"
              type="primary"
              width={227}
              onClick={() => {
                moengage.secureCreditCardApplyNowTop();
              }}>
              Apply Now
            </Button>
            <ul className={cx(infoListStyle)}>
              <li>
                <span className={cx(value)}>17.99%</span>
                <span className={cx(infoTitle)}>Interest rate</span>
              </li>
              <li>
                <span className={cx(value)}>$48</span>
                <span className={cx(infoTitle)}>Annual Fee</span>
              </li>
              <li>
                <span className={cx(value)}>$6</span>
                <span className={cx(infoTitle)}>Monthly Maintenance Fee</span>
              </li>
            </ul>
          </div>
          <AnimationCircle scc>
            <StaticImage
              loading="eager"
              className="card-img-lg"
              src="../../images/plastk-card.png"
              alt="plastk secured visa card"
              fullWidth
            />
          </AnimationCircle>
        </div>
        <a className={cx(scrollDown)} href={`#${scrollToId}`}>
          <span className="material-icons-outlined ico">arrow_downward</span>
        </a>
      </div>
    </section>
  );
}

export default Visual;
