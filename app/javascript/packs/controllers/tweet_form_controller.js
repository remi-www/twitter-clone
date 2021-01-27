import { Controller } from "stimulus";
export default class extends Controller {
  static targets = ["body", "characterCount"];
  initialize() {
    this.update();
  }

  update() {
    let count = this.bodyTarget.value.length;
    if (count === 1) {
      this.characterCountTarget.textContent = "1 character";
    } else {
      this.characterCountTarget.textContent = `${count} characters`;
    }
  }
}
