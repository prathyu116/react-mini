function countWays(i, j, obstacleGrid,dp) {
  if (i >= 0 && j >= 0 && obstacleGrid[i][j] == 1) return 0;
  if (i == 0 && j == 0) return 1;
  if (i < 0 || j < 0) return 0;
    if (dp[i][j] !== -1) return 1;

  var up = countWays(i - 1, j, obstacleGrid,dp);
  var left = countWays(i, j - 1, obstacleGrid,dp);
  return dp[i][j]=up + left;
}

var uniquePathsWithObstacles = function (obstacleGrid) {
  var m = obstacleGrid.length;
  var n = obstacleGrid[0].length;
  var dp=[]
  for(var i=0;i<=m;i++){
       dp[i]=new Array(n+1).fill(-1)
  }
  var ans = countWays(m - 1, n - 1, obstacleGrid,dp);
  return ans;
};
var grid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

var ans = uniquePathsWithObstacles(grid)
console.log(ans);
