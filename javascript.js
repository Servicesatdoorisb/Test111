
// const nums = [1,2,3,4,5];
// console.log(nums);
// const nums2= nums.map((num)=>2*num)
// console.log(nums2);
// const evens= nums.filter((num)=>num%2==0)
// console.log(evens);
// const sum= nums.reduce((accumulator,num)=>accumulator+num)
// console.log(sum);


const n = [11,12,13,14,15];
n.map((i,k)=>{console.log('nums2['+ k + '] = ' + i);})
const a=n.map((i)=>{return i*3})
console.log(a)

const aa=n.filter((i)=>{return i>13})
console.log(aa)


function abc(x,i)
{
    return i+x  
}

const aaa=n.reduce(abc)
console.log(aaa)

