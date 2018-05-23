// 
function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name]
	}
	else
	{
		return getComputedStyle(obj,false)[name]
	}
}

function getByClass(oParent,nClass)
{
	var eLe = oParent.getElementsByTagName('*');
	var aRrent  = [];
	for(var i=0; i<eLe.length; i++)
	{
		if(eLe[i].className == nClass)
		{
			aRrent.push(eLe[i]);
		}
	}
	return aRrent;
}

function startMove(obj,att,add)
{
	clearInterval(obj.timer)
	obj.timer = setInterval(function(){
	   var cutt = 0 ;
	   if(att=='opacity')
	   {
		   cutt = Math.round(parseFloat(getStyle(obj,att)));
	   }
	   else
	   {
		   cutt = Math.round(parseInt(getStyle(obj,att)));
	   }
	   var speed = (add-cutt)/4;
	   speed = speed>0?Math.ceil(speed):Math.floor(speed);
	   if(cutt==add)
	   {
		   clearInterval(obj.timer)
	   }
	   else
	   {
		   if(att=='opacity')
		   {
			   obj.style.opacity = (cutt+speed)/100;
			   obj.style.filter = 'alpha(opacity:'+(cutt+speed)+')';
		   }
		   else
		   {
			   obj.style[att] = cutt+speed+'px';
		   }
	   }
	   
	},30)
}

  window.onload = function()
  {
	  var oDiv = document.getElementById('int_playBox');
	  var oPre = getByClass(oDiv,'int_pre')[0];
	  var oNext = getByClass(oDiv,'int_next')[0];
	  var oUlBig = getByClass(oDiv,'int_oUlplay')[0];
	  var aBigLi = oUlBig.getElementsByTagName('li');
	  var oDivSmall = getByClass(oDiv,'int_smalltitle')[0]
	  var aLiSmall = oDivSmall.getElementsByTagName('li');
	  
	  function tab()
	  {
	     for(var i=0; i<aLiSmall.length; i++)
	     {
		    aLiSmall[i].className = '';
	     }
	     aLiSmall[now].className = 'int_thistitle'
	     startMove(oUlBig,'left',-(now*aBigLi[0].offsetWidth))
	  }
	  var now = 0;
	  for(var i=0; i<aLiSmall.length; i++)
	  {
		  aLiSmall[i].index = i;
		  aLiSmall[i].onclick = function()
		  {
			  now = this.index;
			  tab();
		  }
	 }
	  oPre.onclick = function()
	  {
		  now--
		  if(now ==-1)
		  {
			  now = aBigLi.length;
		  }
		   tab();
	  }
	   oNext.onclick = function()
	  {
		   now++
		  if(now ==aBigLi.length)
		  {
			  now = 0;
		  }
		  tab();
	  }
	  var timer = setInterval(oNext.onclick,2000) //滚动间隔时间设置
	  oDiv.onmouseover = function()
	  {
		  clearInterval(timer)
	  }
	   oDiv.onmouseout = function()
	  {
		  timer = setInterval(oNext.onclick,2000) //滚动间隔时间设置
	  }
	  
	////////banne轮播
	var oDiv2 = document.getElementById('playBox');
	  var oPre2 = getByClass(oDiv2,'pre')[0];
	  var oNext2 = getByClass(oDiv2,'next')[0];
	  var oUlBig2 = getByClass(oDiv2,'oUlplay')[0];
	  var aBigLi2 = oUlBig2.getElementsByTagName('li');
	  var oDivSmall2 = getByClass(oDiv2,'smalltitle')[0]
	  var aLiSmall2 = oDivSmall2.getElementsByTagName('li');
	  
	  function tab2()
	  {
	     for(var i2=0; i2<aLiSmall2.length; i2++)
	     {
		    aLiSmall2[i2].className = '';
	     }
	     aLiSmall2[now2].className = 'thistitle'
	     startMove(oUlBig2,'left',-(now2*aBigLi2[0].offsetWidth))
	  }
	  var now2 = 0;
	  for(var i=0; i<aLiSmall2.length; i++)
	  {
		  aLiSmall2[i].index = i;
		  aLiSmall2[i].onclick = function()
		  {
			  now2 = this.index;
			  tab2();
		  }
	 }
	  oPre2.onclick = function()
	  {
		  now2--;
		  if(now2 ==-1)
		  {
			  now2 = aBigLi2.length;
		  }
		   tab2();
	  }
	   oNext2.onclick = function()
	  {
		   now2++;
		  if(now2 ==aBigLi2.length)
		  {
			  now2 = 0;
		  }
		  tab2();
	  }
	  var timer2 = setInterval(oNext2.onclick,3000) 
	  oDiv2.onmouseover = function()
	  {
		  clearInterval(timer2)
	  }
	   oDiv2.onmouseout = function()
	  {
		  timer2 = setInterval(oNext2.onclick,3000) 
	  }  
	   
  }
  

  
