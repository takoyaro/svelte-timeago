<script>
	export let date;
	export let live = false;
	export let suffix = true;
	$: asDate = (typeof date == 'number') ? new Date(date*1000).getTime() : new Date(date);
	$: Now = new Date().getTime();
	$: diff = Now - asDate;
	$: seconds = diff/1000;
	$: minutes = seconds/60;
	$: hours = minutes/60;
	$: days = hours/24;
	$: months = days/30;
	$: unit = (seconds<60) ? 's' : (minutes<60) ? 'm' : (hours<24) ? 'h' : (days<31) ? 'd' : 'mo';
	$: obj = {s:seconds,m:minutes,h:hours,d:days,mo:months};
	
	if(live){
		setInterval(()=>{
			Now = new Date().getTime();
		},1000)
	}
	
</script>
{parseInt(obj[unit])}{unit} {#if suffix}ago{/if}