declare function SimpleCSSAnimationPackage(
  animationSeq: any,
  targetId: string,
  startWait?: number
): void;

declare function SimpleCSSFlushInlineCSS(targetId: string):void

export  {SimpleCSSAnimationPackage, SimpleCSSFlushInlineCSS}