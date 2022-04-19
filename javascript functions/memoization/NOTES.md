memoization - asks the function to remember the result
if the function receives the same input again, 
it will quickly deliver the same result without needing to re-calculate the input

 - useMemo
 - React.memo

 - for functions that demand intensive processing ( e.g recursive function )
 - memoization should be added to pure functions
 - youre trading memory for speed