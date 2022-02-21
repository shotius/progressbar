import classNames from 'classnames';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

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

export default ProgressLine;
