export default function bs_list(haystack: number[], needle: number): boolean {
    let left = 0;
    let right = haystack.length;
    // O(log n)
    do {
        const midpoint = Math.floor((left + right) / 2);
        const currValue = haystack[midpoint];

        if (currValue === needle) {
            return true;
        } else if (currValue < needle) {
            left = midpoint + 1;
        } else {
            right = midpoint - 1;
        }
    } while (left < right);

    return false;
}
