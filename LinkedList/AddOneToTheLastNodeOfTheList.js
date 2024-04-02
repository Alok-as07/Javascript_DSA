class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    addLast(value) {
        const NewNode = new Node(value);
        if (this.head === null) {
            this.head = NewNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = NewNode;
    }
}
// the Above is Broiler plate code
const list = new LinkedList();
list.addLast(4);
list.addLast(9);
list.addLast(9);

function reverse(listhead) {
    let current = listhead;
    let prev = null;
    while (current) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev
}

function addOne(linkedlist) {
    let reverseLinkedList = new Node(0);
    reverseLinkedList.head = reverse(linkedlist.head)
    let current = reverseLinkedList.head;
    let carry = 1;
    while (current && carry > 0) {
        let sum = current.data + carry;
        current.data = sum % 10;
        carry = Math.floor(sum / 10);
        if (current.next == null && carry > 0) {
            current.next = new Node(carry);
            carry = 0;
        }
        current = current.next;
    }

    return reverse(reverseLinkedList.head);
}
let ans = addOne(list)
console.log(ans)
