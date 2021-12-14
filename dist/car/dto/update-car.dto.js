"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCarDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const car_dto_1 = require("./car.dto");
class UpdateCarDto extends (0, mapped_types_1.PartialType)(car_dto_1.CarDto) {
}
exports.UpdateCarDto = UpdateCarDto;
//# sourceMappingURL=update-car.dto.js.map