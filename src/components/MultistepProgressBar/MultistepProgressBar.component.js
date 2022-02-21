import { Component, Fragment, PureComponent } from 'react';
import { makeRange } from 'src/utils/helpers';
import './MultistepProgressBar.style';
import PropTypes from 'prop-types';
import DoneIconsComponent from '../Icons/DoneIcons.component';
import classNames from 'classnames';

class ProgressLine extends PureComponent {
  static propTypes = {
    phase: PropTypes.oneOf(['done', 'doing', 'not done']),
  };

  render() {
    const cn = classNames('progress-bar__line', {
      'progress-bar__line--done': this.props.phase === 'done',
      'fill-in-animation progress-bar__line--done':
        this.props.phase === 'doing',
    });
    return <div className={cn}></div>;
  }
}

class ProgressPoint extends PureComponent {
  static propTypes = {
    done: PropTypes.bool,
    label: PropTypes.string,
  };

  render() {
    const cn = classNames('progress-bar__point', {
      'progress-bar__point--done': this.props.done,
    });

    return (
      <div className={cn}>
        {this.props.children}
        <div>{this.props.label}</div>
      </div>
    );
  }
}

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

MultistepProgressBar.propTypes = {
  steps: PropTypes.number.isRequired,
  stepsDone: PropTypes.number.isRequired,
};

export default MultistepProgressBar;
