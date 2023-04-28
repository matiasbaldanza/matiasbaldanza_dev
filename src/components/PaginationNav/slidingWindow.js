function slidingWindow(index, arr, windowSize) {
    // Returns a subarray (a 'sliding window')
    // centered around an index. Used for pagination nav.
    // (The index element is always at the center of the subarray,
    // except when index is close to the start/end of the array.)
    //
    // Note: index is 1-based, so 1 is arr[0]
  
    if (arr.length <= windowSize) return arr
    
    // Calculate how many elements will be shown 
    // to the left and right of the index
    const HALF_WINDOW = Math.floor(windowSize / 2)
    
    // Calculate START of window
    // 1. If index is greater than half the window size, 
    //    slide the start of the window to the right
    let start = index > HALF_WINDOW + 1 
                  ? index - HALF_WINDOW - 1 
                  : 0  
    // 2. If there are no more elements to the right of the window,
    //    stop sliding the window to the right
    if (index >= ((arr.length - HALF_WINDOW) + 1)) 
      start = arr.length - windowSize 
    
    // Calculate END of window
    let end = start + windowSize
    
    // Return the window
    return arr.slice(start, end) 
  }
  
  export default slidingWindow