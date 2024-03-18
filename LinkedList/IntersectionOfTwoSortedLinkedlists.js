const LinkedList = require('./LinkedListClass')
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

let linkedList1 = new LinkedList();
let linkedList2 = new LinkedList();
let ansList = new LinkedList();

linkedList1.append(1)
linkedList1.append(2)
linkedList1.append(3)
linkedList1.append(8)

linkedList2.append(0)
linkedList2.append(2)
linkedList2.append(3)

function Intersection(head1, head2) {
    let curr1 = head1, curr2 = head2;
    let head = null;
    let last = null;
    while (curr1 !== null && curr2 !== null) {
        if (curr1.data === curr2.data) {
            if (head == null) {
                head = new Node(curr1.data);
                last = head;
            } else {
                last.next = new Node(curr1.data);
                last = last.next;
            }
            curr1 = curr1.next;
            curr2 = curr2.next;
        } else if (curr1.data < curr2.data) {
            curr1 = curr1.next;
        } else {
            curr2 = curr2.next;
        }
    }
    ansList.head = head
    return head;
}
Intersection(linkedList1.head, linkedList2.head)
ansList.printList(ansList.head)