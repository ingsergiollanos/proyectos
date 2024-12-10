const input= document.querySelector('input');
const addbtn=document.querySelector('.botonadd');
const ul=document.querySelector('ul');
const vacio= document.querySelector('.empty');

addbtn.addEventListener('click', (e)=>{
    e.preventDefault();

    const text= input.value;
    if(input.value=== ''){
        alert('ingresar una Tarea');
        return;
    }

    const li= document.createElement('li');
    const p=document.createElement('p');
    p.textContent=text;

    li.appendChild(p);
    li.appendChild(adddeletebtn());
    ul.appendChild(li);

    input.value="";
    vacio.style.display="none";
    
});


function adddeletebtn(){
const deletebtn= document.createElement('button');

deletebtn.textContent="X";
deletebtn.className="btn-delete"

deletebtn.addEventListener('click', (e)=>{
const item=e.target.parentElement;
ul.removeChild(item);


const items=document.querySelectorAll('li');
if(items.length===0);{
vacio.style.display="";
}
});
return deletebtn;

};

