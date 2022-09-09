const simpleAnimation = async (animationSeq, targetId, startWait = 0) => {
  if (startWait > 0) {
    await wait(startWait);
  }
  for (let index = 0; index < animationSeq.length; index++) {
    const seq = animationSeq[index];
    await wait(seq._simpleAnimationDelay);
    console.log(seq);

    const element = document.getElementById(targetId);
    element.style.transition = seq._simpleAnimationDuration + "ms all";

    Object.keys(seq).forEach((key) => {
      if (element?.style[key] != undefined) {
        element.style[key] = seq[key];
      }
    });
  }
};
const wait = (timer) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("");
    }, timer);
  });

module.exports = simpleAnimation;
