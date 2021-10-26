# svelte-timeago
A simple Svelte component to provide relative time in the `n{unit} ago` format.

# [Demo - Svelte REPL](https://svelte.dev/repl/beb62d5405fb499cb26276d0fd4695fe?version=3.44.0)
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

### `withSuffix`
**Default: `true`**
Should the word _**ago**_ be displayed after the time?

### `asPrefix`
**Default: `true`**
Should the suffix be a prefix instead? i.e. `Il y à n{unit}`

### `suffix`
**Default: `ago`**
The suffix used when `withSuffix` is set to true.

### `units`
**Default:**
```
{
	seconds:'s',
	minutes:'m',
	hours:'h',
	days:'d',
	months:'mo',
	years:'y'
}
```
The units to be displayed. Can also be used to set your own locale. i.e. `秒`、`分`、`時間` etc.