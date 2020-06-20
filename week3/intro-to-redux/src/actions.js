export function START_TIMER() {
    return {type: "START_TIMER"}
}
export function changingInterval(int) {
    return {type: "CHANGING_INTERVAL",
            int: int}
}
