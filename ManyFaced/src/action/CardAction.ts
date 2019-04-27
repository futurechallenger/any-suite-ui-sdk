/**
 * CardAction, base class of actions
 */
class CardAction {
  private _fn: string;
  private _params: any;

  setFunctionName(fn: string): CardAction {
    this._fn = fn;
    return this;
  }

  setParameters(params: any): CardAction {
    this._params = params;
    return this;
  }
}

export CardAction;
