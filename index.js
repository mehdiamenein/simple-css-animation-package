const SimpleCSSAnimationPackage = async (
  animationSeq,
  targetId,
  startWait = 0
) => {
  if (startWait > 0) {
    await wait(startWait);
  }
  for (let index = 0; index < animationSeq.length; index++) {
    const seq = animationSeq[index];
    if (seq?._simpleAnimationSequenceWaiting > 0) {
      await wait(seq._simpleAnimationSequenceWaiting);
    }
    const elements = document.querySelectorAll(`[simple-ca="${targetId}"]`);
    for (let index2 = 0; index2 < elements.length; index2++) {
      const element = elements[index2];

      if (seq?._simpleAnimationWaitPerElement > 0) {
        await wait(seq._simpleAnimationWaitPerElement);
      }

      if (seq?._simpleAnimationIncrease > 0) {
        wait(index2 * seq?._simpleAnimationIncrease).then(() => {
          element.style.transition = seq._simpleAnimationDuration + "ms all";
          Object.keys(seq).forEach((key) => {
            if (element?.style[key] != undefined) {
              element.style[key] = seq[key];
            }
          });
        });
      } else {
        element.style.transition = seq._simpleAnimationDuration + "ms all";
        Object.keys(seq).forEach((key) => {
          if (element?.style[key] != undefined) {
            element.style[key] = seq[key];
          }
        });
      }
    }
  }
};
const wait = (timer) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("");
    }, timer);
  });

module.exports = SimpleCSSAnimationPackage;
