// A)Print odd numbers in an array.
var y=[11,23,35,46,79,86];
var res=((arr)=>{
    var odd=[];
for (var x of arr)
{
    if(x%2==1){
    odd.push(x);
       }
    else{
    continue;
      }
    }
return odd;
})
console.log(res(y));

// b)Convert all the strings to title caps in a string array.
var array=["mani","iswarya","ananthan","geetha"];
var res=((array)=>{
    for(i=-0;i<array.length;i++)
    {
        var y=array[i].split("");
        if(y[0].charCodeAt()>=97&&y[0].charCodeAt()<=122)
        {
              y[0]=String.fromCharCode(y[0].charCodeAt(0)-32)

        }
            array[i]=y[0]+array[i].substring(1,y.length);
    }
console.log(array.join(" "));
})
res(array);

// c)Sum of all numbers in an array.
var arr=[11,3,5,7,9,2];
var res=((arr)=>{
    var sum=0;
for(var x of arr){
    sum=sum+x;
}
console.log(sum);
})
res(arr);

// d)Return all the prime numbers in an array.
var arr=[16,1,2,3,4,5,6,7,18,17];
var prime=((arr)=>{
    var res=[];
    for(var x of arr)
    {
    var repeat=0;
        for(var i=2;i<=x/2;i++){   
        if(x%i==0)
        {
            repeat=1;
            break;
        }
        }
        if(repeat==0)
        {
            res.push(x);
        }
    }
    return res;
})
console.log(prime(arr));

// e)Return all the palindromes in an array

var arr=[134,"Kalyan","Rahul","Kiran","Ram",130];

var palindrome=(()=>{
    var res=[];
for(var x of arr)
{
    var repeat=0;
    var y=x.toString();
    for(i=0;i<=y.length/2;i++)
    {
        if(y.charAt(i)==y.charAt(y.length-i-1))
        {
             repeat=1;

        }

    }
    if(repeat==1)
    {
        res.push(x);
    }
}
return res;
})
console.log(palindrome(arr));