export class CustomElement {
  element: HTMLElement | HTMLInputElement = null

  constructor(selector: string) {
    this.element = document.getElementById(selector)
  }

  addListener(type: string, callback: (e?:Event) => void) {
    this.element.addEventListener(type, callback)
  }

  setInnerText(text: string) {
    this.element.innerText = text;
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
