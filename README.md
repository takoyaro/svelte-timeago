# svelte-timeago
A simple Svelte component to provide relative time in the `n{time} ago` format.
## How to use
Install the package:
`npm i svelte-timeago`

Import the package
```html
<script>
	import TimeAgo from 'svelte-timeago';
</script>

<TimeAgo date="2021-10-25 11:13:00" live/>
```
## Props
### `date`
**Default: `null`**
Date should be a valid `Date` object, a valid UNIX timestamp or a valid date string, preferably in *ISO-8601* format.

### `live`
**Default: `false`**
Should the displayed time update every 1 second?

### `suffix`
**Default: `true`**
Should the word _**ago**_ be displayed after the time?