# Simple CSS Animation Package

An extremely simple css animation package which can be used cross-framework without any additional dependencies underneath. The goal was to make it possible to have cleaner animations with the help of JSON objects on different events.

## Example:

```javascript
import SimpleCSSAnimationPackage from "simple-css-animation-package";

SimpleCSSAnimationPackage(
  [
    {
      _simpleAnimationSequenceWaiting: 0, // delay before starting the entire sequence
      _simpleAnimationWaitPerElement: 0, // delay for individual element if multiple with same attributes are found
      _simpleAnimationDuration: 500, // animation duration of all elements
      _simpleAnimationIncrease: 10, // per element delay difference (like starting a bit later)
      opacity: "0",
      transform: "Translate(2em,0)",
    },
    {
      _simpleAnimationSequenceWaiting: 1000,
      _simpleAnimationDuration: 1000,
      _simpleAnimationIncrease: 100,
      opacity: "1",
      transform: "Translate(0,0)",
    },
  ],
  `title`
);
```

Please checkout the example on Codepen: https://codepen.io/mehdiroshanfekr/pen/GRxzbgJ

## Documentation

The function accepts 2 variables:

**JSON Array:** I can be any css variables as shown in the example and the 4 additional variables called mentioned above

**Element Attribute:** So that the function knows which element to target, it requires a custom tag called `simple-ca` like the example below:
```html
<div class="sample-app" simple-ca="title">Somthing</div>
```

## CDN


```html
<script src="https://unpkg.com/simple-css-animation-package"></script>
```

Or you can use a custom version and replace 1.0.5 with whichever version you desire

```html
<script src="https://unpkg.com/simple-css-animation-package@1.0.5"></script>
```

## Version Notes

**1.0.8** - The inline styles can be flushed with a secondary function now called `SimpleCSSFlushInlineCSS`

**1.0.5** - The older version which were working with the id will no longer work and there are new variables available which can improve your process of using it a lot