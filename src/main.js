import {
  btn_1$, btn_2$, btn_3$, btn_4$, btn_5$, btn_6$, btn_7$, btn_8$, btn_9$, btn_0$,
  mas$, menos$, multi$, divi$, clear$, igual$, result$
} from "./DomElements";

import { Calculator } from './calculator'

const calculadora = new Calculator(result$)

window.addEventListener('DOMContentLoaded', () => calculadora.render())

btn_1$.addEventListener('click', () => calculadora.pushToNumber(1))
btn_2$.addEventListener('click', () => calculadora.pushToNumber(2))
btn_3$.addEventListener('click', () => calculadora.pushToNumber(3))
btn_4$.addEventListener('click', () => calculadora.pushToNumber(4))
btn_5$.addEventListener('click', () => calculadora.pushToNumber(5))
btn_6$.addEventListener('click', () => calculadora.pushToNumber(6))
btn_7$.addEventListener('click', () => calculadora.pushToNumber(7))
btn_8$.addEventListener('click', () => calculadora.pushToNumber(8))
btn_9$.addEventListener('click', () => calculadora.pushToNumber(9))
btn_0$.addEventListener('click', () => calculadora.pushToNumber(0))


clear$.addEventListener('click', () => calculadora.clear())
igual$.addEventListener('click', () => calculadora.getResult())
mas$.addEventListener('click', () => calculadora.Operation('+'))
menos$.addEventListener('click', () => calculadora.Operation('-'))
multi$.addEventListener('click', () => calculadora.Operation('x'))
divi$.addEventListener('click', () => calculadora.Operation('/'))

