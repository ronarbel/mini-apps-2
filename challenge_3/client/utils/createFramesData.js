const shortid = require('shortid');

module.exports.createFramesData = (throws, frameScores) => {
  const framesData = [];

  frameScores.forEach((value, i) => {
    // gather cumulative score at each frame
    let frameCumulativeScore = 0;
    let frameScoreIndex = i;
    while (frameScoreIndex >= 0) {
      frameCumulativeScore += frameScores[frameScoreIndex];
      frameScoreIndex -= 1;
    }

    framesData.push({
      throw1: throws[i * 2],
      throw2: throws[(i * 2) + 1],
      frameCumulativeScore,
      id: shortid.generate(),
    });
  });

  return framesData;
};
