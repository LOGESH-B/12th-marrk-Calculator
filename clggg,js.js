
var mmax1=document.querySelectorAll(".max");

var mmax11=document.querySelectorAll(".max1");

var m11=document.querySelectorAll("#nine");

var mmax12=document.querySelectorAll(".max2");

var cal=document.querySelector("#bt");

var ten,ten11,ten12,t,total=0,tot,t11=0;
var maxx=0,maxx1,maxxx,M1=0;
var mark=new Array (6);
var maxx11=new Array (6);
var M,Num,N=0,N1=3,n2=0;
var maxx12=new Array (6);
var maxxx12;

for(var i=0;i<mmax1.length;i++)
{
    mmax1[i].addEventListener("change",function(){
        ten=Number(this.value);
        maxx=maxx+ten;
     });
}
 for(var i=0;i<m11.length;i++)
{
     m11[i].addEventListener("change",function(){
            ten11=Number(this.value);
            maxx11[N]=elt(ten11); 
            N++;
        });
 }
    for(var i=0;i<mmax11.length;i++){
         mmax11[i].addEventListener("change",function(){
            ten11=Number(this.value);
            maxx11[N1]= max11(ten11);    
            N1++;          
     });
    }

    function elt(Num)
    {
           M=Math.round(((Num*20)/90));
        return M;  
    }
 

 for (var i=0;i<6;i++)
{
    mmax12[i].addEventListener("change",function(){
        ten12=Number(this.value);           
        maxx12[n2]= ten12; 
      n2++;
     });
}

function mul(maxx12){
   for(var i=0;i<3;i++)
 {
     maxx12[i]=Number(maxx12[i])*3;
 }
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
    for(var i=0;i<6;i++)
    {
    mark[M1]=Math.round(maxx+maxx11[M1]+maxx12[M1]);
    total=total+mark[M1];
    M1++;
    }
    return total;

}

 cal.addEventListener("click", function()
 {
     maxxx=max(maxx);
    mul(maxx12);
    tot=tol(maxx11,maxx12,maxxx);
    alert("YOUR TOTAL :"+tot);
    console.log(maxxx)
    
});



