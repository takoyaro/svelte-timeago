import { readable } from 'svelte/store';

export const time = readable(new Date().getTime(), function start(set) {
	const interval = setInterval(() => {
		set(new Date().getTime());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});