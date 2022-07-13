<script lang="ts">
    import notify from "$lib/notify";

    function show_notification() {
        notify("This is a notification", { timeout: 10000 });
    }
</script>

<h1>Index</h1>
<p>Dette er index</p>

<a href="/A">A</a>
<br>
<br>
<br>
<br>

<button on:click={show_notification}>Notify me</button>
