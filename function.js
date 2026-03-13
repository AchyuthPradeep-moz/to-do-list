var tasks=[];
var id=1;
function addTask()
{
    var text=document.getElementById("add").value;
    var task=
    {
        id:id,
        text:itemValue,
        completed:false

    };
    tasks.push(task);
    id++;
    display();
}
function display()
{
    var list=document.getElementById("list");
    list.innerHTML="";
    for(var i=0;i<tasks.length;i++)
    {
        var li=document.createElement("li");
        li.innerText=tasks[i].text;
        list.appendChild(li);
    }
}