cricket



// How to build a custom Array.
class MyArr
{
    constructor()
    {
        this.length = 0;
        this.data = {};
    }

    push(item)
    {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    get(index)
    {
        return this.data[index];
    }

    pop()
    {
        const lastItem = this.data[this.length - 1];

        for(let i = this.length - 1; i > 0; i--)
        {
            this.data[i] = this.data[i - 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    shift()
    {
        const firstItem = this.data[0];

        for(let i = 0; i < this.length - 1; i++)
        {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    delete(index)
    {
        const item = this.data[index];
        for(let i = index; i < this.length - 1; i++)
        {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }
}

const myNewArr = new MyArr();

myNewArr.push('apple');
myNewArr.push('orange');
myNewArr.push('grapes');

// myNewArr.delete(1);
// myNewArr.pop();
// myNewArr.shift();
// myNewArr.get(1);
console.log(myNewArr);

/*-----------------------The code is about custom array and it methods------------------------------*/

// Reverse Of String
// function reverse(str)
// {
//     if(!str || str.length < 2 || typeof str !== 'string')
//     {
//         return 'Not a valid string';
//     }

//     const backwards = [];
//     const totalItems = str.length - 1;

//     for(let i = totalItems; i >= 0; i--)
//     {
//         backwards.push(str[i]);
//     }

//     return backwards.join('');
// }

const reverse = (str) => { return str.split('').reverse().join('') };


console.log(reverse('Hello')); 

/*-----------------------The above code it to perfrom reverse string ------------------------------*/

// Write a code for palindrome

const palindrome = (str) => 
{
    const reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
}

console.log(palindrome('racecar'));

/*-----------------------The above code is a palindrome ------------------------------*/

// Write a code for Int Reversal

const IntReversal = (num) =>
{
    const reverseNum = num.toString().split('').reverse().join('');
    return parseInt(reverseNum) * Math.sign(num);
}

console.log(IntReversal(-123));

/*-----------------------The above code is a Int Reversal ------------------------------*/

// Write a code for Max Char

const maxChar = (str) =>
{
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for(let char of str)
    {
        if(charMap[char])
        {
            charMap[char]++;
        }
        else
        {
            charMap[char] = 1;
        }
    }

    for(let char in charMap)
    {
        if(charMap[char] > max)
        {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(maxChar('Hello World'));

/*-----------------------The above code is a Max Char ------------------------------*/

// Write a code for FizzBuzz

const fizzBuzz = (num) =>
{
    for(let i = 1; i <= num; i++)
    {
        if(i % 3 === 0 && i % 5 === 0)
        {
            console.log('FizzBuzz');
        }
        else if(i % 3 === 0)
        {
            console.log('Fizz');
        }
        else if(i % 5 === 0)
        {
            console.log('Buzz');
        }
        else
        {
            console.log(i);
        }
    }
}

console.log(fizzBuzz(15));

/*-----------------------The above code is a FizzBuzz ------------------------------*/

// Write a code for Array Chunking

// Problem: Write a function that takes an array and a chunk sizr as an input. The function should return a new array where the original array is split into chunk of specific size.

// Example chunk([1, 2, 3, 5, 6, 7], 3) - Output : [[1, 2], [ 3, 5], [ 6, 7], 3]

const chunk = (arr, size) =>
{
    const chunked = [];
    let index = 0;

    while(index < arr.length)
    {
        const chunkedItems = arr.slice(index, index + size);

        if(chunkedItems?.length !== size)
        {
            return chunked
        }
        else
        {
            chunked.push(arr.slice(index, index + size));
        }
        index += size;
      
    }

    return chunked;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
/*-----------------------The above code is a Array Chunking ------------------------------*/

// Write a code for Capitalize

const capitalize = (str) =>
{
    const words = [];

    for(let word of str.split(' '))
    {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' ');
}

console.log(capitalize('hello world'));

/*-----------------------The above code is a Capitalize ------------------------------*/

//Write a code for Max Profit

// Problem: Imagine you have an array of stock prices for different days. You want to find the maximum profit that can be made by buying and selling the stock once. Write a function that takes in an array of stock prices and returns the maximum profit.

const maxProfit = (prices) =>
{
    let minPrice = prices[0];
    let maxProfit = 0;

    for(let i = 1; i < prices.length; i++)
    {
        minPrice = Math.min(minPrice, prices[i]);

        const potentialProfit = prices[i] - minPrice;

        maxProfit = Math.max(maxProfit, potentialProfit);
        // if(prices[i] < minPrice)
        // {
        //     minPrice = prices[i];
        // }
        // else
        // {
        //     maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        // }
    }

    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
/*-----------------------The above code is a Max Profit ------------------------------*/

// Write a code for Two Sum

// Problem: Imagine you have a list of numbers and a target number, Your job is to find two numbers in that list that add up to the target number. You also need to tell which position (or indexes) those two numbers are at in the list.

// Example: If the list is [2, 7, 11, 15] and the target is 9, then the answers would be [ 0, 1 ] because (2 at index 0) plus (7 at index 1).

const twoSum = (nums, target) =>
{
    const numMap = {};

    for(let i = 0; i < nums.length; i++)
    {
        for(let j = i + 1; j < nums.length; j++)
        {
            if(nums[i] + nums[j] === target)
            {
                return [i, j];
            }
        }
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
/*-----------------------The above code is a Two Sum ------------------------------*/

// Write a code for Longest Common Prefix

const longestCommonPrefix = (strs) =>
{
    if(strs.length === 0)
    {
        return '';
    }

    let prefix = strs[0];

    for(let i = 1; i < strs.length; i++)
    {
        while(strs[i].indexOf(prefix) !== 0)
        {
            prefix = prefix.substring(0, prefix.length - 1);

            if(prefix === '')
            {
                return '';
            }
        }
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
/*-----------------------The above code is a Longest Common Prefix ------------------------------*/
