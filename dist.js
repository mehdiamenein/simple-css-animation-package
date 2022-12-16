var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var SimpleCSSAnimationPackage = function (animationSeq, targetId, startWait) {
    if (startWait === void 0) { startWait = 0; }
    return __awaiter(_this, void 0, void 0, function () {
        var _loop_1, index;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(startWait > 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, wait(startWait)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    _loop_1 = function (index) {
                        var seq, elements, _loop_2, index2;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    seq = animationSeq[index];
                                    if (!((seq === null || seq === void 0 ? void 0 : seq._simpleAnimationSequenceWaiting) > 0)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, wait(seq._simpleAnimationSequenceWaiting)];
                                case 1:
                                    _b.sent();
                                    _b.label = 2;
                                case 2:
                                    elements = document.querySelectorAll("[simple-ca=\"".concat(targetId, "\"]"));
                                    _loop_2 = function (index2) {
                                        var element;
                                        return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0:
                                                    element = elements[index2];
                                                    if (!((seq === null || seq === void 0 ? void 0 : seq._simpleAnimationWaitPerElement) > 0)) return [3 /*break*/, 2];
                                                    return [4 /*yield*/, wait(seq._simpleAnimationWaitPerElement)];
                                                case 1:
                                                    _c.sent();
                                                    _c.label = 2;
                                                case 2:
                                                    if ((seq === null || seq === void 0 ? void 0 : seq._simpleAnimationIncrease) > 0) {
                                                        wait(index2 * (seq === null || seq === void 0 ? void 0 : seq._simpleAnimationIncrease)).then(function () {
                                                            element.style.transition =
                                                                seq._simpleAnimationDuration + "ms all";
                                                            Object.keys(seq).forEach(function (key) {
                                                                if ((element === null || element === void 0 ? void 0 : element.style[key]) != undefined) {
                                                                    element.style[key] = seq[key];
                                                                }
                                                            });
                                                        });
                                                    }
                                                    else {
                                                        element.style.transition =
                                                            seq._simpleAnimationDuration + "ms all";
                                                        Object.keys(seq).forEach(function (key) {
                                                            if ((element === null || element === void 0 ? void 0 : element.style[key]) != undefined) {
                                                                element.style[key] = seq[key];
                                                            }
                                                        });
                                                    }
                                                    return [2 /*return*/];
                                            }
                                        });
                                    };
                                    index2 = 0;
                                    _b.label = 3;
                                case 3:
                                    if (!(index2 < elements.length)) return [3 /*break*/, 6];
                                    return [5 /*yield**/, _loop_2(index2)];
                                case 4:
                                    _b.sent();
                                    _b.label = 5;
                                case 5:
                                    index2++;
                                    return [3 /*break*/, 3];
                                case 6: return [2 /*return*/];
                            }
                        });
                    };
                    index = 0;
                    _a.label = 3;
                case 3:
                    if (!(index < animationSeq.length)) return [3 /*break*/, 6];
                    return [5 /*yield**/, _loop_1(index)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    index++;
                    return [3 /*break*/, 3];
                case 6: return [2 /*return*/];
            }
        });
    });
};
var wait = function (timer) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("");
        }, timer);
    });
};
function SimpleCSSFlushInlineCSS(targetId) {
    var elements = document.querySelectorAll("[simple-ca=\"".concat(targetId, "\"]"));
    elements.forEach(function (element) {
        element.setAttribute("style", "");
    });
}
module.exports = { SimpleCSSAnimationPackage: SimpleCSSAnimationPackage, SimpleCSSFlushInlineCSS: SimpleCSSFlushInlineCSS };
