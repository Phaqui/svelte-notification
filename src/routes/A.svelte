<script lang="ts">
    import notify from "$lib/notify";

    function do_notify() {
        notify("Notification from A", { timeout: 3000 });
    }
</script>

<h1>A</h1>

<p>Dette er A.</p>


<a href="/">index</a>

<button on:click={do_notify}>notify me</button>
