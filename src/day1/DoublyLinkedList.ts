type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};
export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;

        // if there is no head, add new item and head
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        // if there is a head, prepend item to the current head
        // and update current head to the item prepended
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        // rule of thumb to insert properly:
        // first attach the new node, next and prev
        // then break the old links, prev and next

        if (idx > this.length) {
            throw new Error("Index provided is outside limits.");
        }
        
        if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }
        
        // traverse until the index and then insert the node
        this.length++;
        let curr = this.head;
        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }
        
        curr = curr as Node<T>;
        // create node with value to insert
        const node = { value: item } as Node<T>;
        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;
        // ???
        // if (curr.prev) {
        //     curr.prev.next = curr;
        // }
        if (node.prev) {
            node.prev.next = node;
        }
    }
    append(item: T): void {
        // first create a node and attach/append to the tail
        // then tail equals to the node
        
        this.length++;
        const node = {value:item} as Node<T>;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        
        if ()
    }
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
