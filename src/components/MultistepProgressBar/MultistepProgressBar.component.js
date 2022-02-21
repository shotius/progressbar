import { Component, Fragment } from 'react';
import DoneIconsComponent from '../Icons/DoneIcons.component';
import ProgressLine from '../ProgressLine';
import ProgressPoint from "../ProgressPoint"
import './MultistepProgressBar.style';

class MultistepProgressBar extends Component {
  renderCurrentStep(step, label) {
    return (
      <>
        <ProgressLine done={true} phase="doing" />
        <ProgressPoint done={true} label={label}>
          {step}
        </ProgressPoint>
      </>
    );
  }
  renderNotDonwStep(step, label) {
    return (
      <>
        <ProgressLine phase={'not done'} />
        <ProgressPoint done={false} label={label}>
          {step}
        </ProgressPoint>
      </>
    );
  }

  renderDoneStep(label) {
    return (
      <>
        <ProgressLine phase={'done'} />
        <ProgressPoint done={true} label={label}>
          <DoneIconsComponent />
        </ProgressPoint>
      </>
    );
  }

  render() {
    const { steps, stepsDone } = this.props;
    const stepsToProceed = steps.concat(''); // since we hide the last point

    return (
      <div className="progress-bar">
        {stepsToProceed.map((step, i) => {
          return (
            <Fragment key={step}>
              {stepsDone > i
                ? this.renderDoneStep(step)
                : stepsDone === i
                ? this.renderCurrentStep(i + 1, step)
                : this.renderNotDonwStep(i + 1, step)}
            </Fragment>
          );
        })}
      </div>
    );
  }
}

export default MultistepProgressBar;
