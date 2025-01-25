function foo(a, b) {
  if (a === null || b === null) {
    return null; //this is problematic
  }
  return a + b; 
}