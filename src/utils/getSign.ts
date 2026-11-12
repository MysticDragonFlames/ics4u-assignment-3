export function getSign(s: number, flip: boolean) {
    if (Math.sign(s) >= 0) {
      if (flip === true) {
        return "-";
      } else {
        return "+";
      }
    } else {
      if (flip === true) {
        return "+";
      } else {
        return "-";
      }
    }
  }