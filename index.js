export class Log {
  static success(string) {
    return `%c ${string}`, "color: green;";
  }

  static danger(string) {
    return `%c ${string}`, "color: red;";
  }

  static info(string) {
    return `%c ${string}`, "color: black; background: yellow;";
  }
}
