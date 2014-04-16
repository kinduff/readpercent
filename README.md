readpercent.js
===========

## Welcome

This is a jQuery plugin that offers an easy way to show reading progress to your users. There are a few ways to get the percentage value. Make sure to checkout the demo inside this page.

## Demo

[Check it out](http://kinduff.github.io/readpercent/).

## Install

Make sure to include jQuery in your page.

```html
<script src="jquery.min.js"></script>
```

And then include **readpercent.js**

```html
<script src="js/readpercent-min.js"></script>
```

## Usage

Works as a normal jQuery plugin. 

### Get raw percent (0-100)

```javascript
$('#content').readpercent();
```

### Get rounded percent (0-100)

```javascript
$('#content').readpercent(true);
```

I recommend you to append the previous methods to a `$(window).scroll` event to get live data.

### Fill HTML5 Progress Element

```javascript
$("#content").readpercent('#progress');
```

### Change width (%) of an element

```javascript
$("#content").readpercent('#container', '.bar');
```
