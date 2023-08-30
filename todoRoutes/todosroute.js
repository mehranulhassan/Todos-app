const express = require('express');
const router= express.Router();
const todocontroller= require("../controllers/todoscontroller");


router.post('/',todocontroller.createNewTodoItem);
router.get('/',todocontroller.getAllTodoItems);
router.delete('/',todocontroller.deleteTodoItem);
router.put('/',todocontroller.updateTodoItem);



module.exports=router;
