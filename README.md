# svelte-notification

A simple notification library.

## Installation and usage

```bash
npm i -D @phaqui/svelte-notification
```

```html
<script>
    import notify from "@phaqui/svelte-notification";
    function show_notification() {
        notify("This is a notifaction", { timeout: 3000 });
    }
</script>

<button on:click={show_notification}>Show a notification</button>
```

