// Use === to evaluate equivalence

var moonPhase = 'full';

if (moonPhase === 'full') {
  console.log('Howwlll!');
} else {
  console.log('I swear I am not a werewolf...');
}


// else if statements

var moonPhase = 'solar eclipse';

if (moonPhase === 'full') {
  console.log('Howwwlll!!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier.');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

// Logical AND operator

var moonPhase = 'full';
var foggyNight = false;

if (moonPhase === 'full' && foggyNight) {
  console.log('Howwlll!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') { 
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}