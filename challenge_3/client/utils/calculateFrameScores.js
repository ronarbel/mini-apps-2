module.exports.calculateFrameScores = (throws) => {
  const frameScores = [];
  throws.forEach((value, i) => {
    if (i % 2 === 1) {
      let frameScore = throws[i] + throws[i - 1];
      if (frameScore < 10) {
        frameScores.push(frameScore);
      }
      // calculate strike or spare score
      if (frameScore === 10) {
        // for strike, add next two throws
        if (throws[i] === 10) {
          // if next throw is null (strike), skip
          const next1Throw = throws[i + 1] || throws[i + 2];
          // if next1Throw skipped, also skip. If next throw is null (strike), skip again
          const next2Throw = throws[i + 1] ? throws[i + 2] : (throws[i + 3] || throws[i + 4]);

          if (next1Throw && next2Throw) {
            frameScore += next1Throw + next2Throw;
            frameScores.push(frameScore);
          }
        } else { // for spare, add next 1 throw
          const next1Throw = throws[i + 1] || throws[i + 2];
          if (next1Throw) {
            frameScore += next1Throw;
            frameScores.push(frameScore);
          }
        }
      }
    }
  });
  return frameScores;
};
