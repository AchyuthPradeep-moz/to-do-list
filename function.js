var tasks=[];
var id=1;
windowndow.onload=function()
{
    const savedTasks=localStorage.getItem("tasks")
    if(savedTasks)
    {
        tasks=JSON.parse(savedTasks);
        id=tasks.length+1;
        display();
    }
}
document.getElementById("add").addEventListener("click",addTask);
function addTask()
{
    const input=document.getElementById("task");
    const text=input.value;
    const task=
    {
        id:id,
        text:text,
        completed:false

    };
    tasks.push(task);
    id++;
    saveTasks();
    display();
}
function display()
{
    const list=document.getElementById("list");
    list.innerHTML="";
    for(var i=0;i<tasks.length;i++)
    {
        const tasksid=tasks[i].id
        const li=document.createElement("li");
        const checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.checked=tasks[i].completed;
        checkbox.addEventListener("change",function(){toggleTask(tasksid)});
        const span=document.createElement("span");
        span.innerText=tasks[i].text;
        span.addEventListener("dblclick",function(){editTask(tasksid)});
        const del=document.createElement("button");
        del.innerText="Delete task";
        del.addEventListener("click",function(){deleteTask(tasksid)});
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(del);
        list.appendChild(li);
    }

}
function toggleTask(tasksid)
{
    for(var i=0;i<tasks.length;i++)
    {
        if(tasks[i].id==tasksid)
        {
            tasks[i].completed=!tasks[i].completed;
        }
    }
    
    saveTasks();
    display();
}
function deleteTask(tasksid)
{
    tasks=tasks.filter(function(task)
    {
        return task.id != tasksid;
    });
    saveTasks();
    display();
}
function editTask(tasksid)
{
    const newText=prompt("Edit task");
    for(var i=0;i<tasks.length;i++)
    {
        if(tasks[i].id==tasksid)
        {
            tasks[i].text=newText;
        }
    }
    saveTasks();
    display();

}
document.getElementById("clear").addEventListener("click",clearCompleted);
function clearCompleted()
{
    
    tasks=tasks.filter(function(task){return task.completed ===false;});
    saveTasks();
    display();
}
function saveTasks()
{
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
