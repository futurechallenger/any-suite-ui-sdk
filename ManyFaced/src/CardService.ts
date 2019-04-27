import { CardAction } from './action/CardAction';
import { Button } from './view/Button';


/**
 * CardServide
 */
class CardServide {
  private cardBuilder: CardBuilder;

  newCardBuilder(): CardBuilder {
    if(!cardBuilder) {
      this.cardBuilder = new CardBuilder();
    }
  }

  newAction(): CardAction {
    return null;
  }

  newTextButton(): Button {
    return null;
  }
}

export CardServide
