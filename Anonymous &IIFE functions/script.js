// a. Print odd numbers in an array
var odd = function(a)
{
    for(i=0;i<a.length;i++)
{
    if(a[i]%2!=0)
    {
        console.log(a[i]);
    }
}
}
odd([1,2,3,4,5,6,7,8,9]);

// B)Convert all the strings to title caps in a string array.
function titleCase(str){

    return str.toLowerCase().replace(/\b(\w)/g,s=>s.toUpperCase());
}
console.log([titleCase("hi charan")]);
console.log([titleCase("how are you?")]);

// C)Print sum of all numbers in array.
var  bar= function(...input)
{
    let sum =0;
    for(let i of input)
    {
        sum+=i;
    }
    return sum;
}
console.log(bar(5,7,8,4,3,2));

// D)Return all the prime numbers in an array.
var arr=[13,4,67,45,39,1];
var res=[];
var prime=function(){
    for(var x of arr)
    {
    var repeat=0;
        for(var i=2;i<=x/2;i++)
        {
        if(x%i==0){
            repeat=1;
            break;
        }
        }
        if(repeat==0)
        {
            res.push(x);
        }
    }
    return  res;
}(arr)
console.log(prime);

// E)Return all the palindromes in an array.
var arr=[112,"Kiran","Rahul","kalyan",500];
var res=[];
var palindromes=function(){
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
}(arr)
console.log(palindromes);

// F)Return median of two sorted arrays of same size
var ar1 = [1, 34, 56, 98];
var ar2 = [2, 56, 78, 89];
var n1 = ar1.length;
var n2 = ar2.length;
var  getMedian = function (ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;

    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }

        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }

        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }

    return (m1 + m2)/2;
}
 console.log(getMedian(ar1, ar2,n1));

 // G)Remove duplicates from an array.
 var arr=[1,2,3,4,5,6,3,2,5,7,8];
(function(){
var res=[];
for(i=0;i<arr.length;i++)
{
    var repeat=0;
    for(j=0;j<arr.length;j++)
    {

        if(arr[i]==res[j]){

            repeat=1;
        }
    }
    if(repeat==0)
    {
        res.push(arr[i])
    }
}
console.log(res);
}(arr))

// H)Rotate an array by k times.
var arr=[7,8,6,3,4];
var k=2;
(function(){
    var res=[];
    var n=arr.length;
    k=k%n;
    for(i=0;i<arr.length;i++)
    {
        if(i<k){

        res[i]=arr[n-k+i]
        }
        else{
            res[i]=arr[i-k]
        }
    }
    console.log(res)


})(arr,k)




