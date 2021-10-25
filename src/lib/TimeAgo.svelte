<script lang="ts">
	import {time} from './store.js'

	/**
	 * @description Date should be a valid Date object, a valid UNIX timestamp or a valid date string, preferably in ISO-8601 format.
	 * @default new Date().getTime()
	 * @type {(number|string|Date)}
	 */
	export let date:number|string|Date = new Date().getTime();

	/**
	 * @description Should the displayed time update every 1 second?
	 * @default false
	 */
	export let live:boolean = false;
	
	/**
	 * @description Should the word ago be displayed after the time?
	 * @default true
	 */
	export let suffix:boolean = true;

	let now = new Date().getTime();
	$: asDate = (typeof date == 'number') ? (date.toString().length==10) ? new Date(date*1000).getTime() : new Date(date).getTime() : new Date(date).getTime();
	$: diff = (live==true) ? $time - asDate : now - asDate;
	$: seconds = diff/1000;
	$: minutes = seconds/60;
	$: hours = minutes/60;
	$: days = hours/24;
	$: months = days/30;
	$: unit = (seconds<60) ? 's' : (minutes<60) ? 'm' : (hours<24) ? 'h' : (days<31) ? 'd' : 'mo';
	$: obj = {s:seconds,m:minutes,h:hours,d:days,mo:months};
	
</script>
{parseInt(obj[unit])}{unit} {#if suffix}ago{/if}