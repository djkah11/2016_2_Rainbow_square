import Block from "../block/block"

export  default  class Menu extends Block {
  constructor(options = {data: {}}) {
    super('div');
    this.data = options.data;
    console.log(window.fest["menu/menu.tmpl"]);
    console.log("hh");
    this.template = window.fest["menu/menu.tmpl"];

    this.render();
  }

  /**
   * Обновляем HTML
   */
  render() {
    this._updateHtml();
  }

  /**
   * Обновить html компонента
   */
  _updateHtml() {
    this._el.innerHTML = this.template(this.data);
  }
}