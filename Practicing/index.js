// 2. Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let charMap = new Map();

  for (let end = 0; end < s.length; end++) {
    if (charMap.has(s[end])) {
      start = Math.max(start, charMap.get(s[end]) + 1);
    }
    charMap.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
// The Number of Islands problem finds the count of distinct islands (connected 1's) in a 2D grid
// An island is a group of 1's connected horizontally or vertically (not diagonally)
// The solution uses a Depth First Search (DFS) approach:

// Global counter to keep track of number of islands
let count = 0;

// DFS helper function to mark all connected '1's
function dfs(grid, i, j) {
    // Base cases - return if:
    // 1. Out of bounds (i or j < 0 or >= grid dimensions)
    // 2. Current cell is water ('0')
  
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[i].length ||
      grid[i][j] === "0"
    ) {
      return;
    }
    
    // Mark current cell as visited by changing it to '0'
    grid[i][j] = "0";
    
    // Recursively check all 4 adjacent cells (up, down, left, right)
    dfs(grid, i + 1, j); // down
    dfs(grid, i - 1, j); // up
    dfs(grid, i, j + 1); // right
    dfs(grid, i, j - 1); // left
  }
  

// Main function that iterates through the grid
function numIslands(grid) {
  // Iterate through each cell in the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // When we find a '1', we've found a new island
      if (grid[i][j] === "1") {
        // Increment island counter
        count++;
        // Use DFS to mark all connected '1's as visited by changing them to '0'
        dfs(grid, i, j);
      }
    }
  }
  return count;
}

const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];
  
  console.log(numIslands(grid));