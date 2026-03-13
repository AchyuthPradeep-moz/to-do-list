var tasks=[];
var id=1;
function addTask()
{
    const input=document.getElementById("task")
    const text=input.value;
    text=document.getElementById("task").value;
    const task=
    {
        id:id,
        text:text,
        completed:false

    };
    tasks.push(task);
    id++;
    input.value=""
    saveTasks();
    display();
}
function display()
{
    const list=document.getElementById("list");
    list.innerHTML="";
    for(var i=0;i<tasks.length;i++)
    {
        const li=document.createElement("li");
        const checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.checked=tasks[i].completed;
        checkbox.addEventListener("change",function(){toggleTask(tasks[i].id)});
        const span=document.createElement("span");
        span.innerText=tasks[i].text;
        span.addEventListener("dblclick",function(){editTask(tasks[i].id)});
        const del=document.createElement("button");
        del.innerText="Delete task";
        del.addEventListener("click",function(){deleteTask(tasks[i].id)});
        li.appendChild(checkbox);
        li.appendChild(span);
        li.append(del);
        list.appendChild(li);
    }

}