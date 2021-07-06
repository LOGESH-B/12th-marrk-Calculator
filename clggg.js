
var mmax1=document.querySelectorAll(".max");

var mmax11=document.querySelectorAll(".max1");

var m11=document.querySelectorAll("#nine");

var mmax12=document.querySelectorAll(".max2");

var cal=document.querySelector("#bt");

var ten,ten11,ten12,t,total=0,tot,t11=0;
var maxx=0,maxx1,maxxx,M1=0;
var mark=new Array (6);
var maxx11=new Array (6);
var M,Num;
var maxx12=new Array (6);
var maxxx12;
var i;

for(i=0;i<mmax1.length;i++)
{
    mmax1[i].addEventListener("change",function(){
        ten=Number(this.value);
        maxx=maxx+ten;
     });
}

    m11.forEach(function(m11,index){
        m11.addEventListener("change",function(){
            ten11=Number(this.value);
            maxx11[index]=elt(ten11);
        });
    });
 
        mmax11.forEach(function(mmax11,index){
            mmax11.addEventListener("change",function(){
                ten11=Number(this.value);
                maxx11[index+3]= max11(ten11);
        });              
    });
    function elt(Num)
    {
           M=Math.round(((Num*20)/90));
        return M;  
    }
   
      mmax12.forEach(function(mmax12,index){
        mmax12.addEventListener("change",function(){
            ten12=Number(this.value);           
            maxx12[index]= ten12;
            if(index<3){
                mul(maxx12[index],maxx12,index);
            }
    });        
     });


function mul(maxxx12,maxx12,index){
     maxx12[index]=Number(maxxx12*3);

}
function max11(maxx11){
    maxxx11=Math.round(((maxx11)*20)/70);
    return(maxxx11);
}

function max(maxx){
    maxxx=Math.round(((maxx)*0.5)/3);
    return (maxxx);
}
function tol(maxx11,maxx12,maxx){
    total=0;
    for(var i=0;i<6;i++)
    {
    mark[i]=Math.round(maxx+maxx11[i]+maxx12[i]);
    total=total+mark[i];
    }
    return total;
}

 cal.addEventListener("click", function()
 {
     maxxx=max(maxx);
    tot=tol(maxx11,maxx12,maxxx);
    alert("TAMIL="+mark[0]+"\nENGLISH="+mark[1] +"\nMATHS="+mark[2]+"\nPHYSICS="+mark[3]+"\nCHEMISTRY="+mark[4]+"\nBIO/COMPUTER="+mark[5]+"\n-----------------------"+"\nYOUR TOTAL :"+tot+"\n-----------------------");   
});



