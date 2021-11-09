export class CustomElement {
  static elementsContainder: Map<string, HTMLElement | HTMLInputElement> = new Map()
  element: HTMLElement | HTMLInputElement = null

  constructor(selector: string) {
    if (CustomElement.elementsContainder.has(selector)) {      
      this.element = CustomElement.elementsContainder.get(selector)
    } else {
      this.element = document.getElementById(selector)
      CustomElement.elementsContainder.set(selector, this.element)
    }
  }

  addListener(type: string, callback: (e?:Event) => void) {
    this.element.addEventListener(type, callback)
  }

  setInnerText(text: string) {
    this.element.innerText = text;
  }

  handleClick(callback: (e?:Event) => void) {
    this.addListener('click', callback)
  }

  handleInput(callback: (e?:Event) => void) {
    if (this.element instanceof HTMLInputElement) this.addListener('input', callback)    
  }

  getValue() {
    if (this.element instanceof HTMLInputElement) return this.element.value
  }
}

export class TriggerCSSClassWithMouse extends CustomElement {
  className: string
  target: HTMLElement | HTMLInputElement

  constructor(selector: string, className: string, target?: CustomElement ) {
    super(selector)
    this.className = className
    this.target = target ? target.element : this.element
    this.mouseEnter()
    this.mouseLeave()
  }

  mouseEnter() {
    this.element.addEventListener('mouseenter', () => {
      this.target.classList.add(this.className)
    })
  }

  mouseLeave() {
    this.element.addEventListener('mouseleave', () => {
      this.target.classList.remove(this.className)
    })
  }
}
