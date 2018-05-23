// JavaScript Document
window.onload=function() 
{var zhezhao=document.getElementById("zhezhao"); 
 var login_infor=document.getElementById("login_infor"); 
 var denglu=document.getElementById("denglu"); 
 var dl_close=document.getElementById("dl_close"); 
denglu.onclick=function() 
{zhezhao.style.display="block"; 
 login_infor.style.display="block"; } 
dl_close.onclick=function() 
{zhezhao.style.display="none"; 
 login_infor.style.display="none";  } 
} 