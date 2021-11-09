import { CustomElement } from "./dom";

export class ElectronChat extends CustomElement {
  messages: TMessage[] = [];

  constructor(selector: string) {
      super(selector)
  }

  getMessage(message: string) {
    this.messages.push({message, own: false})
    this._updateInnerHTML()
    
  }

  sendMessage(message: string) {
    this.messages.push({message, own: true})
    this._updateInnerHTML()
  }

  _updateInnerHTML() {
    const inner = this.messages.reduce((prev, el) => {
        const elem = `
          <div class="chat-message-${el.own ? 'left' : 'right'}">
            ${el.message}
          </div>
        `
        return prev + elem
    }, '')

    this.element.innerHTML = inner
    this.element.scrollTop = this.element.scrollHeight
  }
}

type TMessage = {
    message: string;
    own: boolean;
}
