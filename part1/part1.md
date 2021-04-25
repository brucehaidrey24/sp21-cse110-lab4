1a)
    1. values added: 20

    2. final result: 20
    
    3. values added: 20
    
    4. The code returns an uncaught reference error because let is defined in the scope of the if statement, so result is not defined.
    
    5. The code returns an uncaught type error because the result is defined as a constant and cannot be modified
    
    6. The code returns an uncaught type error because the result is defined as a constant and cannot be modified. The code returns an error within the if statement block and never reaches this console.log() statement.

1b)
    1. At line 12 3 is printed because the variable i is being implemented and the last value assigned to i is 3.
    
    2. At line 13 150 is printed because the variable discountedPrice is taking the 3rd element in the array (300) and multiplying it by 1 - the discount aka 0.5. 
    
    3. At line 14 150 is printed because we take the discountedPrice of 150 and multiplying it by 100 which is equal to 15000 and then dividing it by 100.
    
    4. This function will return an array with integers [50, 100, 150] after each variable goes through the for loop and is calculated accordingly.
    
    5. This line causes an error because the variable i is defined within the for loop and is not accessible outside of the loop
    
    6. This line causes an error because the variable discountedPrice is defined within the for loop and is not accessible outside of the loop
    
    7. At line 14 150 is printed because we take the discountedPrice of 150 and multiplying it by 100 which is equal to 15000 and then dividing it by 100. discountedPrice is defined at the beginning of the function and not within the for loop.
    
    8. This function will return an array with integers [50, 100, 150] after each variable goes through the for loop and is calculated accordingly. Since discounted is defined at the beginning of the function its scope is available til the end.
    
    9. This line returns a reference error because i is defined within the scope of the for loop and is not accessible outside of it as its variable declaration is let
    
    10. This line returns 3 since length is defined at the beginning of the function and is not being modified throughout
    
    11. This function will return an array with integers [50, 100, 150] after each variable goes through the for loop and is calculated accordingly. Since discounted is defined at the beginning of the function its scope is available til the end.
    
    12a. student.name
    
    12b. student["Grad Year"]
    
    12c. student.greeting
    
    12d. student["Favorite Teacher"].name
    
    12e. student.courseLoad[0]
    
    13a. '32' because with the binary addition operator, the string takes priority and the other type is converted to a string
    
    13b. 1 because the operator is subtraction so the operator turns the string '3' into a number
    
    13c. 3 because null becomes 0 after the numeric conversion
    
    13d. 3null because null becomes a string after the type conversion
    
    13e. 4 because true becomes 1 after the numeric conversion
    
    13f. 0 because both false and null become 0 after the numeric conversion
    
    13g. 3undefined because undefined becomes a string after the type conversion and '3' is already a string
    
    13h. NaN because '3' becomes a numeric with the subtraction operator and undefined becomes NaN after the numeric conversion
    
    14a. true because javascript converts the values to numbers when comparing values of different types and 2 > 1
    
    14b. true because javascript converts the values to numbers when comparing values of different types and 2 < 12
    
    14c. true because javascript converts the values to numbers when comparing values of different types and 2 equals 2
    
    14d. false because we're using a strict equality operator that checks the equality without type conversion and a string is not equal to a number
    
    14e. false because javascript converts the values to numbers when comparing values of different types, so true gets converted to 1 and 1 is not equal to 2
    
    14f. true because Boolean() of any value apart from 0, -0, null, false, NaN, undefined, or the empty string is converted to true, and true === true is true.
    
    15.  == is a regular equality check that checks the equality while using type conversion and === is a strict equality operator that checks the equality without type conversion.
    
    17. The output will be [2, 4, 6] because the function modifyArray starts with a constant array that will be filled with the new elements after being run through the function doSomething. The for loop goes through the length of the array that has been passed in, in this case 3. Then each element is being pushed onto the constant array after being passed through the function doSomething, which will return each number multiplied by two. So if we pass in the array [1, 2, 3] and multiply each element by 2 we will return an array with the elements [2, 4, 6].
    
    19. 1 4 3 2 