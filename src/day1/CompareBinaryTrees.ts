export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    // base cases

    // structural check, when meet bottom together after all the comparisons
    if (a === null && b === null) {
        return true;
    }
    // structural check
    if (a === null || b === null) {
        return false;
    }
    // value check
    if (a.value !== b.value) {
        return false;
    }

    // recursion
    return compare(a.left, b.left) && compare(a.right, b.right);
}
