<script lang="ts">
    import TimeAgo from '$lib/TimeAgo.svelte';
</script>

<TimeAgo date={"2021-02-02 12:22"} live withSuffix suffix="前" units={{seconds:'s'}}/>