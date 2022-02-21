import { Component } from 'react';
import PropTypes from 'prop-types';
import MultistepProgressBar from './MultistepProgressBar.component';

class MutliStepProgressBarContainer extends Component {
  static propTypes = {
    steps: PropTypes.number.isRequired,
    stepsDone: PropTypes.number.isRequired,
  };
  render() {
    return <MultistepProgressBar {...this.props} />;
  }
}

export default MutliStepProgressBarContainer;
