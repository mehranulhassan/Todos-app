//todo.controller.js
const express = require("express");
const todoService = require("../services/todosservices");

const createNewTodoItem = async (req, res) => {
    try {   
        const newItem = await todoService.createTodo(req.body);
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Bad request' });
    }
};
const updateTodoItem = async (req, res) => {
    try {
        const updatedItem = await todoService.updateTodo(req.params.id, req.body);
        res.json(updatedItem);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Bad request' });
    }
};


const getAllTodoItems = async (req, res) => {
    try {
        const item =  todoService.getAllTodos(req.body);
        res.json(item);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Bad request' });
    }
};

const deleteTodoItem = async (req, res) => {
    try {
        await todoService.deleteTodo(req.params.id);
        res.json({ message: 'Todo item deleted' });
    } catch (error) 
    {
        console.log(error);
        res.status(400).json({ error: 'Bad request' });
    }
};



module.exports = { createNewTodoItem, getAllTodoItems, deleteTodoItem, updateTodoItem };