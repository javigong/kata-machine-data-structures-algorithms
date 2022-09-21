export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (let i = 0; i < haystack.length; i++) {
        const curr_number = haystack[i];
        if (curr_number === needle) return true;
    }
    return false;
}
