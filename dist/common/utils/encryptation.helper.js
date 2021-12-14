'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Encryptation = void 0;
const bcrypt = require('bcrypt');
class Encryptation {
  static async encryptPassword(password) {
    return await bcrypt.hash(password, 10);
  }
  static async comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }
}
exports.Encryptation = Encryptation;
//# sourceMappingURL=encryptation.helper.js.map
