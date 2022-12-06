export class Calculator {
  numbers = []
  stringsInSreen = []
  operation = undefined
  numbersInOperation = []
  numsRender

  constructor(render) {
    this.numsRender = render
  }
  render() {
    if (this.stringsInSreen.length === 0) {
      this.numsRender.innerText = 0
    } else {
      this.numsRender.innerText = this.stringsInSreen.join('')
    }
  }

  pushToNumber(num) {
    this.numbers.push(num)
    this.stringsInSreen.push(num)
    if (this.stringsInSreen.length > 0) {
      this.operation = null
    }
    this.render()
  }

  Operation(oper) {
    if (this.stringsInSreen.length > 0) {
      let lastItemNum = this.numbersInOperation.length - 1
      let lasItem = this.numbersInOperation[lastItemNum]
      let num
      switch (oper) {
        case '+':
          if (typeof lasItem === 'string' && this.numbers.length == 0) {
            this.numbersInOperation[lastItemNum] = '+'
            this.stringsInSreen.push('+')
            break
          }
          num = parseInt(this.numbers.join(''))
          this.numbersInOperation.push(num)
          this.numbersInOperation.push('+')
          this.stringsInSreen.push('+')
          this.numbers = []
          break

        case '-':
          if (typeof lasItem === 'string' && this.numbers.length == 0) {
            this.numbersInOperation[lastItemNum] = '-'
            this.stringsInSreen.push('-')
            break
          }
          num = parseInt(this.numbers.join(''))
          this.numbersInOperation.push(num)
          this.numbersInOperation.push('-')
          this.stringsInSreen.push('-')
          this.numbers = []
          break

        case 'x':
          if (typeof lasItem === 'string' && this.numbers.length == 0) {
            this.numbersInOperation[lastItemNum] = 'x'
            this.stringsInSreen.push('x')
            break
          }
          num = parseInt(this.numbers.join(''))
          this.numbersInOperation.push(num)
          this.numbersInOperation.push('x')
          this.stringsInSreen.push('x')
          this.numbers = []
          break

        case '/':
          if (typeof lasItem === 'string' && this.numbers.length == 0) {
            this.numbersInOperation[lastItemNum] = '/'
            this.stringsInSreen.push('/')
            break
          }
          num = parseInt(this.numbers.join(''))
          this.numbersInOperation.push(num)
          this.numbersInOperation.push('/')
          this.stringsInSreen.push('/')
          this.numbers = []
          break

        default:
          break;
      }
      this.stringsInSreen = [...this.numbersInOperation]
      this.render()
    }
  }

  getResult() {
    if (this.numbers.length > 0) {
      let number = parseInt(this.numbers.join(''))
      this.numbersInOperation.push(number)
    }
    if (this.numbersInOperation.length > 0) {
      let result = this.numbersInOperation.reduce((count, item) => {
        if (typeof item === 'number' && count.result == 0) {
          return { operation: '', result: item }
        }
        switch (typeof item) {
          case 'string':
            return { operation: item, result: count.result }
          case 'number':
            if (count.operation === '+') {
              return { operation: count.operation, result: count.result + item }
            } else if (count.operation === '-') {
              return { operation: count.operation, result: count.result - item }
            } else if (count.operation === 'x') {
              return { operation: count.operation, result: count.result * item }
            } else if (count.operation === '/') {
              return { operation: count.operation, result: count.result / item }
            }
          default:
            break;
        }
      }, { operation: '', result: 0 })

      this.clear()
      this.stringsInSreen = [result.result]
      this.numbers.push(result.result)
      this.render()
    }
  }

  clear() {
    this.numbers = []
    this.stringsInSreen = []
    this.operation = undefined
    this.numbersInOperation = []
    this.render()
  }
}