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
exports.__esModule = true;
var TransactionController_1 = require("../db/controller/TransactionController");
var transaction_entity_1 = require("../db/entity/transaction.entity");
var UserController_1 = require("../db/controller/UserController");
var AccountController_1 = require("../db/controller/AccountController");
var account_entity_1 = require("../db/entity/account.entity");
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
app.get("/user", function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var user, user_det;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = new UserController_1.UserController();
                return [4 /*yield*/, user.getUser(req.body.username, req.body.password)];
            case 1:
                user_det = _a.sent();
                resp.send(user_det);
                return [2 /*return*/];
        }
    });
}); });
app.get("/acc", function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var acc, acc_det;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                acc = new UserController_1.UserController();
                return [4 /*yield*/, acc.getAccounts(req.body.user_id)];
            case 1:
                acc_det = _a.sent();
                resp.send(acc_det);
                return [2 /*return*/];
        }
    });
}); });
app.get("/transac_made", function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var transc, trans_made;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                transc = new AccountController_1.AccountController();
                return [4 /*yield*/, transc.getTransactions(req.body.acc_id)];
            case 1:
                trans_made = _a.sent();
                resp.send(trans_made);
                return [2 /*return*/];
        }
    });
}); });
app.post("/new_acc", function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var new_acc, ac;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                new_acc = new account_entity_1.Account();
                ac = new AccountController_1.AccountController();
                new_acc.account_no = "12345"; //mock numbers obv
                new_acc.sort_code = "54321";
                new_acc.user_id = req.body.user_id;
                return [4 /*yield*/, ac.insert(new_acc)];
            case 1:
                _a.sent();
                resp.status(200).send();
                return [2 /*return*/];
        }
    });
}); });
app.post("/del_acc", function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var del;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                del = new AccountController_1.AccountController();
                return [4 /*yield*/, del["delete"](req.body.id)];
            case 1:
                _a.sent();
                resp.status(204).send();
                return [2 /*return*/];
        }
    });
}); });
app.post("/new_transac", function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var new_tr, tc;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                new_tr = new transaction_entity_1.Transaction();
                tc = new TransactionController_1.TransactionController();
                new_tr.account_id = req.body.acc_id;
                new_tr.transaction_content = req.body.content;
                new_tr.transaction_value = req.body.val;
                return [4 /*yield*/, tc.insert(new_tr)];
            case 1:
                _a.sent();
                resp.status(200).send();
                return [2 /*return*/];
        }
    });
}); });
exports["default"] = app;
