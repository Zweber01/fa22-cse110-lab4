1. 3

2. 150

3. 150

4. [ 50, 100, 150 ] because discounted is an array and keeps getting the final price pushed all three times therefore it will get 50, 100, and 150 since it goes through the for loop.

5. line 13 gives an error because "let" only allowd i to be in the for loop block, meaning when line 13 tries to print i, there is no reference to it causing an error.

6. line 13 causes an error because the "let" variable makes "discountedPrice" only exist in the for loop so it doesn't exist when it is called in the console log

7. 150

8. [ 50, 100, 150] because the discounted is defined within the function meaning that it will exist and it will be returned.

9. This will give an error, i is defined with let meaning it only exists in the for loop, meaning this doesnt exist for the console log

10. 3, because the array input to discountPrices length is 3, meaning that when length is defined with prices.length, it is set to 3 and console log will print that value of 3.

11. The function returns the discounted array of [ 50, 100, 150 ] because even though discounted is a const, it is an array, which means values can still be inserted into the array giving it the same value as if it was a regular var.

12. a. student.name
    b. student[Grad Year]
    c. student.greeting()
    d. student.greeting([Favorite Teacher].name)
    e. student.courseLoad[0]
    
13. a. 32 because 3 is a string so 2 will be treated as a string as well so the character of 2 will be added to the 3 making it 32
    b. 1 because since it is a minus sign, the string and int will actually revert to int - int and give the answer of 1
    c. 3 because null is ignored as a string when adding with an int since there will be nothing added
    d. 3null because 3 is a string meaning null will be treated as a string and added as text.
    e. 4 because when adding bools to ints, true is 1 while false is 0.
    f. 0 because false is taken as a 0 and so is null when using operators with booleans
    g. 3undefined because 3 is a string so the + operator makes undefined a string if the first one is also a string, like this 3
    h. NaN because a string - undefined isnt sure what it should subtract, therefore it throws NaN

14. a. True because the string is taken as an int when being compared to an int
    b. False because when strings are compared to each other the first digit is taken into consideration so 2 is higher than  12 because 2 is higher than 1.
    c. True because == ignores datatype and so looking at values both are 2 so it is true
    d. False because it actually takes into account the datatypes meaning the int value of 2 is not the same as the string value 2
    e. False because true is equivalent to 1, not 2 making it false
    f. True because the === takes into consideration the datatypes so Boolean(2) is not zero making it true

15. the == ignores datatype of the variables while the === takes the datatypes into consideration

16. See js file

17. Result will be [1,2,3] because you first go to modifyArray function which makes a const newArr meaning the values cannot change within the array, so when the values are being pushed with the function of doSomething, the values actually aren't being multiplied by 2, it stays the same because of the const variable.

18. See js file

19. 1 4 3 2
