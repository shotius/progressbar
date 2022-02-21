import { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressPoint from './ProgressPoint.component';
import classNames from 'classnames';

class ProgressPointContainer extends Component {
  static propTypes = {
    done: PropTypes.bool,
    label: PropTypes.string,
  };
  
  render() {
    const cn = classNames('progress-bar__point', {
      'progress-bar__point--done': this.props.done,
    });

    return <ProgressPoint {...this.props} className={cn} />;
  }
}

export default ProgressPointContainer;
