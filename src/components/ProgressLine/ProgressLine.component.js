import { PureComponent } from 'react';

class ProgressLine extends PureComponent {
  render() {
    const { className, children, ...rest } = this.props;
    return <div className={className} {...rest}></div>;
  }
}

export default ProgressLine;
