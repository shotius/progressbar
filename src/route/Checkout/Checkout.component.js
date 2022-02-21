import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import { ContentWrapper } from 'SourceComponent/ContentWrapper/ContentWrapper.component';
import './Checkout.extension.style';
import MultistepProgressBar from 'src/components/MultistepProgressBar/MultistepProgressBar.component';

const steps = ['shipping', 'Review & Payment', "", "", ""];

class Checkout extends SourceCheckout {
  render() {
    return (
      <main block="Checkout">
        <MultistepProgressBar steps={steps} stepsDone={2} />
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
