"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkBookId = exports.updateBookValidate = exports.createBookValidationMiddleware = void 0;
const schema_1 = require("../../schema");
const createBookValidationMiddleware = (req, res, next) => {
    const parsed = schema_1.createBookSchema.safeParse(req.body);
    if (!parsed.success) {
        next(parsed.error);
        return;
    }
    next();
};
exports.createBookValidationMiddleware = createBookValidationMiddleware;
const updateBookValidate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(Object.keys(req.body));
    if (!req.body || !Object.keys(req.body).length) {
        return next("Body params must not be empty");
    }
    const updatedData = schema_1.updateBookSchema.safeParse(req.body);
    if (!updatedData.success) {
        return next(updatedData.error);
    }
    next();
});
exports.updateBookValidate = updateBookValidate;
const checkBookId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    console.log("Check book id middleware run", id);
    if (!req.params.id) {
        return next("Book id must not be empty");
    }
    if (isNaN(id)) {
        return next("Book id must be a number");
    }
    next();
});
exports.checkBookId = checkBookId;
