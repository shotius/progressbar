import { Component, Fragment } from 'react';
import { makeRange } from 'src/utils/helpers';
import './MultistepProgressBar.style';
import PropTypes from 'prop-types';
import DoneIconsComponent from '../Icons/DoneIcons.component';

class MultistepProgressBar extends Component {
  renderCurrentStep(step) {
    console.log('current step');
    return (
      <>
        <div className="progress-bar__line progress-bar--done"></div>
        <div className="progress-bar__point progress-bar--done">{step}</div>
      </>
    );
  }
  renderNotDonwStep(step) {
    return (
      <>
        <div className="progress-bar__line"></div>
        <div className="progress-bar__point">{step}</div>
      </>
    );
  }

  renderDoneStep() {
    return (
      <>
        <div className="progress-bar__line progress-bar--done"></div>
        <div className="progress-bar__point progress-bar--done">
          <DoneIconsComponent />
        </div>
      </>
    );
  }

  render() {
    const { steps, stepsDone } = this.props;

    return (
      <div className="progress-bar">
        {makeRange({ end: steps }).map((_, i) => {
          const step = i;
          return (
            <Fragment key={i}>
              {stepsDone > step
                ? this.renderDoneStep()
                : stepsDone === step
                ? this.renderCurrentStep(step + 1)
                : this.renderNotDonwStep(step + 1)}
            </Fragment>
          );
        })}
      </div>
    );
  }
}

MultistepProgressBar.propTypes = {
  steps: PropTypes.number.isRequired,
  stepsDone: PropTypes.number.isRequired,
};

export default MultistepProgressBar;
