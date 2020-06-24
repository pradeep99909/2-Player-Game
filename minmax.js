const minimax = (curDepth, nodeIndex, maxTurn, scores, targetDepth) => {
  if (curDepth == targetDepth) {
    return scores[nodeIndex];
  }

  if (maxTurn) {
    return Math.max(
      minimax(curDepth + 1, nodeIndex * 2, false, scores, targetDepth),
      minimax(curDepth + 1, nodeIndex * 2 + 1, false, scores, targetDepth)
    );
  } else {
    return Math.min(
      minimax(curDepth + 1, nodeIndex * 2, true, scores, targetDepth),
      minimax(curDepth + 1, nodeIndex * 2 + 1, true, scores, targetDepth)
    );
  }
};

module.exports = minimax;
