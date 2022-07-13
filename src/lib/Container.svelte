<script lang="ts">
    import Notification from "$lib/Notification.svelte";
    import { onMount } from "svelte";
    let instances = [];

    export function add({ message, timeout }) {
        instances.push({ message, timeout });
        instances = instances; // invalidate
    }

    function closing(instance) {
        let idx = instances.indexOf(instance);
        instances.splice(idx, 1);
        instances = instances;
    }
</script>

<main>
    {#each instances as inst, i (inst)}
        <svelte:component
            this={Notification}
            on:close={() => closing(inst)}
            message={inst.message}
            timeout={inst.timeout}
        />
    {/each}
</main>

<style>
    main {
        position: fixed;
        display: flex;
        flex-direction: column;
        top: 0;
        right: 0;
        margin: 12px;
    }
</style>
