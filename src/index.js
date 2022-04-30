import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const ToDo=()=>{
  const [tasks,updateTask] = useState([
    {
      text:"wake up",
      isCompleted:false
    },
    {
      text:"code",
      isCompleted:false
    },
    {
      text:"sleep",
      isCompleted:false
    }
  ]);

  const toggleTask = index =>{
    const newtask=[...tasks];
    if(newtask[index].isCompleted){
      newtask[index].isCompleted=false;
    }
    else{
      newtask[index].isCompleted=true;
    }
    updateTask(newtask);
  }
  const removeTask=index=>{
    const temptask=[...tasks];
    temptask.splice(index,1);
    updateTask(temptask);
  }
const addTask=()=>{
  let temptask=[...tasks];
  const newTask={
    text:document.getElementById('input').value,
    isCompleted:false
  };
  temptask=[...temptask,newTask];
  updateTask(temptask);
  document.getElementById('input').value="";
}
const isenter=(event)=>{
  if (event.key ==="Enter"){
    addTask();
  }
}
return(
  <div className="list-of-task-todo">
    <h1>To Do list</h1>
    {tasks.map((task,index)=>(
        <div className="task-list">
          {index+1}.
         <span onClick={() => toggleTask(index)} className={task.isCompleted?"task completed-task":"task"}> 
           {task.text}
         </span>
         <span onClick={()=>removeTask(index)}  className="material-icons">delete</span>
        </div>
    ))}
    <input type={"text"} id={'input'} placeholder={'Enter new task'} onKeyPress={isenter}/><span onClick={()=>addTask()} className="material-icons">add box</span>
  </div>
)

}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<ToDo/>);