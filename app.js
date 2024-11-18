const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];

function isprime(num){
    if (num<=1) return false;
    if(num<=3) return true;
    if(num%2===0||num%3===0) return false;

    for(let i=5;i*i<=num;i+=6)
    {
        if(num%i===0||num%(i+2))return false;
    }
    return true;
}
const primenum=numbers.filter(isprime);
console.log(primenum);

function minmax(arr){
    arr.sort((a,b)=>a-b);
    return {min:arr[0],max:arr[arr.length-1]};
}
const {min,max}=minmax(primenum);
console.log(`min-${min} and max-${max}`)
let sum=0

for(let i=0;i<primenum.length;i++)
{
  sum+=primenum[i];
}
console.log(`Sum of all prime numbers is:-${sum}`)