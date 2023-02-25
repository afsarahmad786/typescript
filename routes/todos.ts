import { Router } from "express";
import { Todo } from "../models/todo";
const router = Router();
let todos: Todo[] = [];
router.get("/", (req, res, next) => {
  res.status(200).json({ todo: todos });
});
router.post("/todo", (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };
  todos.push(newTodo);
  res.status(200).json({ todo: newTodo });
});

router.put("/todo/:id", (req, res, next) => {
  const id = req.params.id;
  const i = todos.findIndex((todo) => todo.id == id);
  if (i >= 0) {
    todos[i] = { id: todos[i].id, text: req.body.text };
    res.status(200).json({ message: "updated", todos: todos });
  } else {
    res.status(400).json({ message: "Not Found" });
  }
});

router.delete("/todo/:id", (req, res, next) => {
  const id = req.params.id;
  todos = todos.filter((todo) => todo.id !== id);

  res.status(200).json({ message: "Deleted", todos: todos });
});
export default router;
