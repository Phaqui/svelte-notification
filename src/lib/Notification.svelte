<script lang="ts">
    import { onMount, createEventDispatcher } from "svelte";
    import { tweened } from "svelte/motion";
    import { fade } from 'svelte/transition';
    
    const dispatch = createEventDispatcher();

    export let message = "";
    export let timeout = 0;

    let visible = true;
    let progress = tweened(100, { duration: 1000 });
    let progress_timer;
    let closing_timer;

    const change_per_second = timeout === 0 ? null : ( 100 / (timeout / 1000) );

    onMount(() => {
        if (timeout === 0) return;
        update_progress();
        progress_timer = window.setInterval(update_progress, 1000);
        closing_timer = window.setTimeout(close, timeout);
    });

    function close() {
        if (closing_timer) {
            window.clearTimeout(closing_timer);
        }
        stop_progress_timer();
        visible = false;
        window.setTimeout(() => dispatch("close"), 150);
    }

    function update_progress() {
        progress.update(n => n - change_per_second);
    }

    function stop_progress_timer() {
        if (progress_timer) window.clearInterval(progress_timer);
        progress_timer = null;
    }
</script>

{#if visible}
    <main out:fade={{duration: 150}}>
        <span class="close-btn" on:click={close}>&#x274c;</span>
        <p>{message}</p>
        {#if timeout !== 0}
            <span class="progress" style:width={$progress + "%"}></span>
        {/if}
    </main>
{/if}

<style>
    main {
        margin-bottom: 8px;
        position: relative;
        width: min(400px, 50vw);
        border: 1px solid rgba(20, 20, 20, 0.3);
        border-radius: 2px;
        box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.15);
        animation: 0.35s slidein;
        animation-timing-function: cubic-bezier(.95,1.4,.57,.85);
    }

    @keyframes slidein {
        from {
            right: -400px;
        }
        to {
            right: 0;
        }
    }

    main > span.close-btn {
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        margin: 6px;
    }

    main > p {
        padding: 0.3em 1em;
    }

    main > span.progress {
        position: absolute;
        display: inline-block;
        background-color: #5dd382;
        bottom: 0;
        left: 0;
        height: 6px;
    }
</style>
