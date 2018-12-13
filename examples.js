/*
  intentions:     fill this out before running the code, 
                  the purpose of 'intentions' is to judge how well the developer expressed their intentions in their source code
  implementation: how was the JS engine used to carry out the devs intentions?
                  what language features were used?
                  are there errors?
                  does the code actually behave as it looks like it should?
  strategy:       use pythontutor/javascript to answer this question
                  how was the problem modeled using variables & values
                  how did the developer progress from the initial state to the final state?
                  'strategy' should talk only about intermediate values, not at all about how it happened
                  does this program move along a simple and effective path
  impact:         what impact will this program have on the end user and the world at large?
                  at this point, there won't be much to say
                  it'll get more interesting when you build programs with UI's
*/


{ /*
    intentions:     The developer intended to increase 'value' from - to 9
    implementation: a while loop, < operator (incorrectly used) & value++. 
                    there is a breaking syntax error
                    and even if there wasn't, this code would not have the intended result
    strategy:       basic incrementation by 1
    impact:         this code serves as an exercise in a coding class
  */

  let value = 0;

  while (value < 9) 
    value++;
  };

  console.assert(value === 9, 'nopes');
}


{ /*
    intentions:     I'm confused. variables are called '*_letter', but store numbers.  
                    summing numbers is not the same as collecting all numbers
                    and the dev seems to be mistaken in how this code works based on their expected result
    implementation: a while loop, strict comparison, accumulating +=, and var++ 
                    the implementation is sound, but does not appear to be in line what the dev expects
    strategy:       incrementing through 'current_letter', accumulating the result in 'all_letters'
    impact:         this code serves as an exercise in a coding class
  */

  let current_letter = 0
  let all_letters = 0
  const last_letter = 10

  while (current_letter !== last_letter) {
    all_letters += current_letter;
    current_letter++
  }

  console.assert(all_letters === 9, 'nopes')
}


{ /*
    intentions:     The developer's strategic intentions are not clear.  
                    perhaps they were practicing type-stuff, or are optimizing performance?
    implementation: a do/while loop, implicit type coercions, loose inequality, ...
                    this code is the only one on this page that successfully gets 'i' from 0 -> 9
                    there are many extra operations, like adding j-- & i++, and the strange condition
    strategy:       their strategy is a bit of a mess. 
                    there is this extra variable 'j' that doesn't seem to do anything relevant
    impact:         this code serves as an exercise in a coding class
  */

  i=0,j=12;do{j-- +i++}while(i!=(+(+(!![[]][0])+'8')/2));
}


