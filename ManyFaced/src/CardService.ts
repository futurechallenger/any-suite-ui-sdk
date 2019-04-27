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
}

export CardServide
