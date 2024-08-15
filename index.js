export class Log {
  static success(string) {
    return `\x1b[32m${string}\x1b[0m`; // Green text
  }

  static danger(string) {
    return `\x1b[31m${string}\x1b[0m`; // Red text
  }

  static info(string) {
    return `\x1b[30m\x1b[43m${string}\x1b[0m`; // Black text with yellow background
  }
}
