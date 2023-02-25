"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get("/", (req, res, next) => {
    res.status(200).json({ todo: todos });
});
router.post("/todo", (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    res.status(200).json({ todo: newTodo });
});
router.put("/todo/:id", (req, res, next) => {
    const body = req.body;
    const params = req.params;
    const id = params.id;
    const i = todos.findIndex((todo) => todo.id == id);
    if (i >= 0) {
        todos[i] = { id: todos[i].id, text: body.text };
        res.status(200).json({ message: "updated", todos: todos });
    }
    else {
        res.status(400).json({ message: "Not Found" });
    }
});
router.delete("/todo/:id", (req, res, next) => {
    const params = req.params;
    const id = params.id;
    todos = todos.filter((todo) => todo.id !== id);
    res.status(200).json({ message: "Deleted", todos: todos });
});
exports.default = router;
