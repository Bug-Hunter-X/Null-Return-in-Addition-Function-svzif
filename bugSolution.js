function foo(a, b) {
  // Use optional chaining and nullish coalescing to gracefully handle null or undefined values.
  return (a ?? 0) + (b ?? 0);
} 