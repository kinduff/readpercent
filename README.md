readpercent.js
===========

Simple jQuery plugin to get the percent of a div scrolled inside the viewport. 

## Install

Include `readpercent.js` or `readpercent-min.js` in your page.

```html
<script src="readpercent-min.js"></script>
```

## Usage

Works as a normal jQuery plugin. 

### Get raw percent (0-100)

```javascript
$('#content').readPercent();
```

### Get rounded percent (0-100)

```javascript
$('#content').readPercent(true);
```

I recommend you to append the previous methods to a `$(window).scroll` event to get live data.

### Fill HTML5 Progress Element

```javascript
$("#content").readPercent('#progress');
```

### Change width (%) of an element

```javascript
$("#content").readPercent('#container', '.bar');
```
