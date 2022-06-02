/* Question 1
  var n = 5;
  var factorial =1;
  for(var i=1;i<=n;i++)
  {
    factorial = factorial*i;
  } console.log(factorial);
*/
 
/* Question 2
   var n1= 2;
   var cube= Math.pow(n1,3);
   console.log(cube);
*/

/*Question 3
  var a= 20
  var area= (Math.sqrt(3)/4)*a*a;
  var area1= area.toFixed(2);
  console.log("The area of an equilateral Triangle with side "+a +" = "+ area1);
*/  

//Question 4
/*
let month = 8;
switch (month) {
    case 1:
        console.log("January has 31 days");
        break;

    case 2:
        console.log("February has 28 days");
        break;

    case 3:
        console.log("March has 31 days");
        break;

    case 4:
        console.log("April has 30 days");
        break;

    case 5:
        console.log("May has 31 days");
        break;
          
    case 6:
        console.log("June has 30 days");
        break;    
        
    case 7:
        console.log("July has 31 days");
        break;
    
    case 8:
        console.log("August has 31 days");
        break;
      
    case 9:
        console.log("September has 30 days");
        break;

    case 10:
        console.log("October has 31 days");
        break;
        
    case 11:
        console.log("November has 30 days");
        break;

    case 12:
        console.log("December has 31 days");
        break;
    
    default:
        console.log("ERROR");
        break;
}
*/

//Question 5
/*
  var tempC= 12;
  var tempF= (tempC * 9/5) + 32;
  tempF= tempF.toFixed(2);
  console.log("Temperature in Fahrenheit is "+ tempF); 
*/

//Question 6
/*
  var number=10; var sum=0;
  for(let i=1;i<=10;i++){   
    sum= sum+i;
  } console.log(sum);
*/  

//Question 7
 /*
  var number1= 18;
  var squareOfNumber;
  if(number1 <0) {
    console.log("Error");
  }
   else if(number1 == 0) {
    console.log("0");
  }
  else{
    squareOfNumber= number1*number1;
    console.log(squareOfNumber);  
  }  
  */

//Question 8
/* 
  var str = "Lorem Ipsum     ";
  var str1 = str.replace(/\s/g, "");;
  var str2 = str1.length;
  console.log(str2);
*/

//Question 9
/*
  var coefficientsA= 1;
  var coefficientsB= 5;
  var coefficientsC= 6;
  var root1=  (-coefficientsB + (Math.sqrt(coefficientsB*coefficientsB - 4*coefficientsA*coefficientsC))) / 2*coefficientsA;
  var root2=  (-coefficientsB - (Math.sqrt(coefficientsB*coefficientsB - 4*coefficientsA*coefficientsC))) / 2*coefficientsA;
  root1= root1.toFixed(2);
  root2= root2.toFixed(2);
  console.log("The roots of the quadratic Equation are " + root1 + " & " + root2);
*/

//Question 10
/*
function loki(array1,n)
{
  let evenArr = [];
  for (let i = 0; i < n; i++) 
  {
      if (i % 2 == 0) 
      {
        evenArr.push(array1[i]);
      }   
  }
 evenArr.sort(function(a,b){return a-b;});
  let i = 0;
        for (let j = 0; j < evenArr.length; j++) {
            array1[i++] = evenArr[j];
        }
} 
let array1=[3,9,1,44,6];
    let  n = array1.length;
    loki(array1, n);
    for (let i = 0; i < n; i++) {
        console.log(array1[i]);
    }
*/

//Question 11
/*    
 function asc(arr) {
    let map = new Map
    let c = 1;
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
        else {
            map.set(arr[i], c)
        }
    }
    let narr = [...map];
    let tmp;
    for (i = 0; i < narr.length; i++) {
        for (j = i + 1; j < narr.length; j++) {
            if (narr[i][1] > narr[j][1]) {
                tmp = narr[i];
                narr[i] = narr[j];
                narr[j] = tmp;
            }
            else if (narr[i][1] == narr[j][1]) {
                if (narr[i][0] > narr[j][0]) {
                    tmp = narr[i];
                    narr[i] = narr[j];
                    narr[j] = tmp;
                }
            }
        }
    }
    return narr;
}
arr = [3,3,4,4,7,8];
console.log(asc(arr));
*/

//Question 12
/*function createPalindrome(input, b, isOdd)
    {
        let n = input;
        let palin = input;
 
        if (isOdd == 1)
            n = parseInt(n / b, 10)
          while (n > 0)
        {
            palin = palin * b + (n % b);
            n = parseInt(n / b, 10);
        }
        return palin;
    }
 
   
    function generatePalindromes(n)
    {
        let number;
 
        for (let j = 0; j < 2; j++)
        {
            let i = 1;
            while ((number = createPalindrome(i, 10, j % 2)) < n)
            {
                console.log(number);
                i++;
            }
        }
    }
     
    let n = 104;
    generatePalindromes(n);

*/


//Question 13
/* function number(a){
  let b;
  
  for(let i=2; i<=a; i++){
  
    b = (i * i) + i;
  }
 console.log(b);

}
number(5);
*/


//Question 15
/*
function evaluatePostfix(exp)
{
	
		let stack=[];
		
		
		for(let i=0;i<exp.length;i++)
		{
			let c=exp[i];
			
			
			if(! isNaN( parseInt(c) ))
			stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
			
      else
			{
				let val1 = stack.pop();
				let val2 = stack.pop();
				
				switch(c)
				{
					case '+':
					stack.push(val2+val1);
					break;
					
					case '-':
					stack.push(val2- val1);
					break;
					
					case '/':
					stack.push(val2/val1);
					break;
					
					case '*':
					stack.push(val2*val1);
					break;
			}
			}
		}
		return stack.pop();
}

let exp="531*+9-";
console.log("postfix evaluation: "+evaluatePostfix(exp));
*/


