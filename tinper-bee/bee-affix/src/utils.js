export function addEventListener(target, eventType, callback, options) {
    if (target.addEventListener) {
        target.addEventListener(eventType, callback, options);
    } else if (target.attachEvent) {
        target.attachEvent(`on${eventType}`, callback);
    }
}

export function removeEventListener(target, eventType, callback, options) {
    if (target.removeEventListener) {
        target.removeEventListener(eventType, callback, options);
    } else if (target.attachEvent) {
        target.detachEvent(`on${eventType}`, callback);
    }
}