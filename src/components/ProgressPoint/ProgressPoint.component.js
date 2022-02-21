import classNames from 'classnames';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

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

export default ProgressPoint;
