# media-inline

It allows to homologate the behavior of ** image-set ** or ** img [srcset] **.

## media(string expression, function callback)

Transform the string expression to an event subscribe to @media.

**Example**: `value1 200w value2 300w value3 200w!`

1. The callback will receive, for example, value1 when the browser displays the condition `min-width: 200w`.
2. The callback will receive, for example, value1 when the browser displays the condition `min-width:300w`.
3. The callback will receive, for example, value1 when the browser displays the condition `max-width:300w`.

## imageSet(HTMLElement element, string expression)

Given the 2 arguments, subscribe to the element to the given @media, changing the property `element.style.<background|backgroundImage>`, depending on the expression.

```js
import {imageSet} from "media-inline";

let $el = document.querySelector("img");

imageSet($el,`image_1.jpg 1400w image_2.jpg 1400w!`)
```

> The previous example will change to the ** image 1.jpg ** only when `min-width: 1400px` is met, otherwise it will be changed to img_2.jpg only when` max-width: 1400px` is met.

## srcSet(HTMLElement element, string expression)

Given the 2 arguments, subscribe to the element to the given @media, changing the property `element.src`, depending on the expression.

```js
import {srcSet} from "media-inline";

let $el = document.querySelector("img");

srcSet($el,`image_1.jpg 1400w image_2.jpg 1400w!`)
```

> The previous example will change to the ** image 1.jpg ** only when `min-width: 1400px` is met, otherwise it will be changed to img_2.jpg only when` max-width: 1400px` is met.