import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import { ContentWrapper } from 'SourceComponent/ContentWrapper/ContentWrapper.component';
import './Checkout.extension.style';
import MultistepProgressBar from 'src/components/MultistepProgressBar';

const steps = ['shipping', 'Review & Payment'];

class Checkout extends SourceCheckout {
  getCurrentStep() {
    const pathname = window.location.pathname
    switch(pathname) {
      case "/checkout/shipping": return 0; 
      case "/checkout/billing": return 1; 
      case "/checkout/success": return 2;
      default: return 0
    }
  }
  render() {
    return (
      <main block="Checkout">
        <MultistepProgressBar steps={steps} stepsDone={this.getCurrentStep()} />
        <ContentWrapper
          wrapperMix={{ block: 'Checkout', elem: 'Wrapper' }}
          label={__('Checkout page')}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
