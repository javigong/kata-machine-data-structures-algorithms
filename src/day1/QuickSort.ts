function qs(arr: number[], lo: number, hi: number): void {}

// partition returns the pivot number
function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];

    let idx = lo - 1;

    // if an element is smaller than the pivot, swap it with the current index
    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    // swap pivot after the last swapped element
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return pivot;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
