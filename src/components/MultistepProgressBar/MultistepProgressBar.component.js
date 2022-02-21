import { Component, Fragment, PureComponent } from 'react';
import { makeRange } from 'src/utils/helpers';
import './MultistepProgressBar.style';
import PropTypes from 'prop-types';
import DoneIconsComponent from '../Icons/DoneIcons.component';
import classNames from 'classnames';

class ProgressLine extends PureComponent {
  static propTypes = {
    done: PropTypes.bool,
  };

  render() {
    const cn = classNames('progress-bar__line', {
      'progress-bar__line--done': this.props.done,
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
        <ProgressLine done={true} />
        <ProgressPoint done={true} label={label}>
          {step}
        </ProgressPoint>
      </>
    );
  }
  renderNotDonwStep(step, label) {
    return (
      <>
        <ProgressLine done={false} />
        <ProgressPoint done={false} label={label}>
          {step}
        </ProgressPoint>
      </>
    );
  }

  renderDoneStep(label) {
    return (
      <>
        <ProgressLine done={true} />
        <ProgressPoint done={true} label={label}>
          <DoneIconsComponent />
        </ProgressPoint>
      </>
    );
  }

  render() {
    const { steps, stepsDone } = this.props;

    return (
      <div className="progress-bar">
        {steps.map((step, i) => {
          return (
            <Fragment key={step}>
              {stepsDone > i
                ? this.renderDoneStep(step)
                : stepsDone === i
                ? this.renderCurrentStep(i + 1, step)
                : this.renderNotDonwStep(i + 1)}
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
