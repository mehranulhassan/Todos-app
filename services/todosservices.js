const todo =require("../Models/todosmodel");
 
let todos=[];



async function createTodos(tododata)
{
    const id =todo.length+1;
    const newtodo = newtodo(id,tododata.text,tododata.text,false)
    return (newtodo);

}



const getAllTodos= () => {

    console.log("done")
    return true;
  
}

//export default todosservices
//async function getAllTodos()
//{
    //return todos;
  //  console.log("todos");
//}

module.exports={createTodos,getAllTodos};