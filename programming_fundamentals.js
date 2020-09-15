
// ---Programing Principles-----
//SUMMARY
// DRY
// a software engineering principle ,created by Andy Hunt and Dave Thomas, published in their book "The Pragmatic Programmer". DRY is an acronym for Don't Repeat Yourself, and it states exactly what the principle stands for: simplicity. DRY aims to reduce repetition and either replace it with abstractions or modify it so it is in a standardized form.

// KISS
// KISS stands for Keep It Simple, Stupid. It is a design priciple created by the U.S Navy in the 1960's. The principle states that any program will work better if it is kept as simple as possible.

// Avoid creating a YAGNI
// YAGNI stands for You Aren't Gonna Need it. "Avoid creating a YAGNI" is a principle of extreme programming, a method of software development to improve a software's quality and adptability to user interaction. This principle states that you should only add a functionally when is absolutely necessary.

// Do the simplest thing that could possibly work
// A principle of extreme programming that states that code should be kept as simple as possible.

// Don't make me think
//Don't make me think is a book authored by Steve Krug. It is intended to teach software engineers to think like a usability engineer, meaning learn how to create a a great user experience in a very simple way.

// Write code for the maintainer
//It is a good idea to leave comments explaning each line of code for when you need to go back and read the code

// Single responsibility principle
// A computer programming principle that states that a function, module or class should be responsible for only one part of a program.

// Avoid premature optimization
// A software optimization is when a software is modified to make it work more effeciently. This principle states that software optimization should be the last step of coding a program.  

// Separation of concerns
//Is a design principle that states that a computer program should be separated into sections and each of this section should be responsible for one part of the program.

//WHICH ONE IS CURRENTLY GIVING YOU THE MOS STRUGGLE?
//Writing comment on the codes explain what each line does is something I still getting accustomed to, therefore I would say "Write code for the maintainer" is definetely the principle that gives me the most trouble.
//------------------------------
//defined an arrow function f and gave it a parameter l
const f = l => {
    // defined variables es, p, c, n
      let es = 0, p = 0, c = 1, n = 0
      //while loop that states that while the variable c is less or equal to l run the code inside the loop
      while (c <= l) {
      //define variable n as the sum of variable c and p
        n = c + p;
        //the array with the variables c and p equals the array with the valuables n and c
        [c, p] = [n, c]
        //defined the variable as an if statement ( it says add the module 2 of c to the variable es if c equals to 0)
        es += (c % 2 === 0) ? c : 0
      }
      return es
    }
    // console.log the fucntion f with its parameter l = 55
    console.log(f(55))
    
    // In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
    
    // This fucntion could have been named after the process which is trying to complete 
    
    // If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
    
    //f, since the syntax is simple and more compact
    
    // Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
    
    // Yes it is necessary otherwise the code will end up in error 
    
    