import Container from "$lib/Container.svelte";
import Notification from "$lib/Notification.svelte";

let container;

export default function notify(
    message: string,
    {
        timeout = 5000,
    } = {}
) {
    if (!container) {
        container = new Container({ target: document.body });
    }

    container.add({ message, timeout });
}
