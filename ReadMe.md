# Simple CSS Animation Package

An extremely simple css animation package which can be used cross-framework without any additional dependencies underneath. The goal was to make it possible to have cleaner animations with the help of JSON objects on different events.

## Example:

```javascript
import SimpleCSSAnimationPackage from "simple-css-animation-package"

SimpleCSSAnimationPackage(
  [
    {
      _simpleAnimationDelay: 0,
      _simpleAnimationDuration: 500,
      opacity: "0",
      transform: "Translate(2em,0)",
    },
    {
      _simpleAnimationDelay: 1000 + index * 100,
      _simpleAnimationDuration: 1000,
      opacity: "1",
      transform: "Translate(0,0)",
    },
  ],
  `title-${element.id}`
);
```
Checkout the example on Codepen: https://codepen.io/mehdiroshanfekr/pen/GRxzbgJ
<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/mehdiroshanfekr/embed/preview/GRxzbgJ?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/mehdiroshanfekr/pen/GRxzbgJ">
  Untitled</a> by mehdi roshan fekr (<a href="https://codepen.io/mehdiroshanfekr">@mehdiroshanfekr</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Documentation

The function accepts 2 variables:

**JSON Array:** I can be any css variables as shown in the example and 2 additional variables called `_simpleAnimationDelay` for delay in starting the animation and `_simpleAnimationDuration` for the duration of the animation.

**Element ID:** So that the function knows which element to target (we will modify this later on to work with a custom attribute instead)

## CDN

You can replace 1.0.2 with whichever version you desire

````html
<script src='https://unpkg.com/simple-css-animation-package@1.0.2/index.js'></script>
```