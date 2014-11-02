## hta-localstorage

IE9 doesn't support `localStorage` for `file://` URLs.

This is a problem if you're writing an [HTML Application](http://en.wikipedia.org/wiki/HTML_Application)
(HTA) in IE9 mode and were expecting to use `localStorage` to persist some data.

This is a simple implementation of just the functions in the `localStorage`
API which stringifies a storage object to JSON and writes it to a
`.hta-localstorage` file in your user profile directory on every change.

### API

* `getItem(key)`
* `setItem(key, value)`
* `removeItem(key)`
* `clear()`

### Install

```
npm install hta-localstorage
```

### MIT Licensed