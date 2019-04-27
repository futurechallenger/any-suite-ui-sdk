import { CardWidget } from './CardWidget';
import { CardAction } from '../action/CardAction';

/**
 * Button
 */
class Button extends CardWidget {

  setOnClickAction(action: CardAction): Button {
    return this;
  }
}

export Button;
