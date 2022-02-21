import { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressLine from './ProgressLine.component';
import classNames from 'classnames';

class ProgressLineContainer extends Component {
  static propTypes = {
    phase: PropTypes.oneOf(['done', 'doing', 'not done']),
  };

  render() {
    const cn = classNames('progress-bar__line', {
      'progress-bar__line--done': this.props.phase === 'done',
      'fill-in-animation progress-bar__line--done':
        this.props.phase === 'doing',
    });
    
    return <ProgressLine {...this.props} className={cn} />;
  }
}

export default ProgressLineContainer;
