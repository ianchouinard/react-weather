
export class Transforms {

  /**
   * Creates special formatting for the forecast entry date.
   * Formats as MM/DD HHpm/am
   */
  static date(dt) {
    const date = new Date(dt * 1000)
    const month = date.getMonth() + 1
    const day = date.getDate()
    const time = date.toLocaleString('en-US', { hour: 'numeric', hour12: true })
    return `${month}.${day} ${time}`
  }

}
