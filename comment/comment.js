const postDisplay=document.querySelector('#display');

async function getResult(){
  let res = await fetch('https://jsonplaceholder.typicode.com/comments');
  let jsonData= await res.json();
  let countData =jsonData.slice(0,10);
  let Data = JSON.stringify(countData);

    postDisplay.innerText = Data;
}