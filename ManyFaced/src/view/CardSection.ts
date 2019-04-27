import { CardHeader } from './CardHeader';

/**
 * CardSection
 */
class CardSection {
  addWidget(widget: CardWidget): CardSection {
    return this;
  }

  setHeader(header: CardHeader): CardSection {
    return this;
  }
}

export CardSection;
