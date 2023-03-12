export const findLessCostPath = (board: number[][]): number => {
    const m = board.length;
    const n = board[0].length;
    const dp: number[][] = new Array(m).fill(null).map(() => new Array(n).fill(0));
  
    dp[0][0] = board[0][0];
  
    // preenche a primeira coluna
    for (let i = 1; i < m; i++) {
      dp[i][0] = dp[i - 1][0] + board[i][0];
    }
  
    // preenche a primeira linha
    for (let j = 1; j < n; j++) {
      dp[0][j] = dp[0][j - 1] + board[0][j];
    }
  
    // preenche o restante da matriz
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[i][j] = board[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  
    return dp[m - 1][n - 1];
};
