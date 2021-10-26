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
	export let withSuffix:boolean = true;

	/**
	 * @description The suffix used when `withSuffix` is set to true.
	 * @default 'ago'
	 */
	export let suffix:string = ' ago';

	/**
	 * @description The units to be displayed. Can also be used to set your own locale. i.e. 秒、分、時間 etc.
	 * @default {seconds:'s',minutes:'m',hours:'h',days:'d',months:'mo',years:'y'}
	 */
	export let units:IUnits = {seconds:'s',minutes:'m',hours:'h',days:'d',months:'mo',years:'y'};

	/**
	 * @description This is just a fallback for properties not passed in the `units` prop.
	 */
	const __units = {seconds:'s',minutes:'m',hours:'h',days:'d',months:'mo',years:'y'};

	let now = new Date().getTime();
	$: asDate = (typeof date == 'number') ? (date.toString().length==10) ? new Date(date*1000).getTime() : new Date(date).getTime() : new Date(date).getTime();
	$: diff = (live==true) ? $time - asDate : now - asDate;
	$: seconds = diff/1000;
	$: minutes = seconds/60;
	$: hours = minutes/60;
	$: days = hours/24;
	$: months = days/30;
	$: years = months/12;
	$: unit = (seconds<60) ? 'seconds' : (minutes<60) ? 'minutes' : (hours<24) ? 'hours' : (days<31) ? 'days' : (months<12) ? 'months' : 'years';
	$: obj = {seconds:seconds,minutes:minutes,hours:hours,days:days,months:months,years:years};
	
	interface IUnits {
		seconds?:string,
		minutes?:string,
		hours?:string,
		days?:string,
		months?:string,
		years?:string
	}
</script>
{parseInt(obj[unit])}{units[unit] ?? __units[unit]} {#if withSuffix}{suffix}{/if}