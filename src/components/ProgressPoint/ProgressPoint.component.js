import { PureComponent } from 'react';

class ProgressPoint extends PureComponent {
  render() {
    const { children, label, className, ...rest } = this.props;
    return (
      <div className={className} {...rest}>
        {children}
        <div>{label}</div>
      </div>
    );
  }
}

export default ProgressPoint;
