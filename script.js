const showmenu =()=>{
  const both=document.getElementById('both-nav');

  if (both.style.display=='none') {
    both.style.display='flex';
  } else   {
    both.style.display='none';
    
  }
}
const removealert=()=>{
    document.getElementById('alert-container').style.display='none';
}
setTimeout(()=>{
    document.getElementById('alert-container').style.display='flex';
},3000)