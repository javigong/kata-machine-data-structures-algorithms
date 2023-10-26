export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    // base case with all comparisons being true
    // it's only met when going all down to the bottom doing all the recursions
    if (a === null && b === null) {
        return true;
    }
    // base cases of comparison being false
    if (a === null || b === null) {
        return false;
    }
    if (a.value !== b.value) {
        return false;
    }

    // recursion
    return compare(a.left, b.left) && compare(a.right, b.right);
}
