class Node{
    constructor(value,next){
        this.data = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    addLast(value,next){
        const newNode = new Node(value,next);
        if(this.head == null){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }

    print(head) {
        if (head === null) return;
        let current = head;
        do {
            console.log(current.data);
            current = current.next;
            if (current == null) {
                return
            }
        } while (current !== this.head);
    }
}
function  splitLinkedList(list1,list2,head){
    let slow = head;
    let fast = head;
    if(head == null) return;
    while(fast.next != head && fast.next.next != head){
        fast = fast.next.next;
        slow = slow.next;
    }

    if(fast.next.next == head) fast = fast.next;
    list1.head = head;
    if(head.next != head) list2.head = slow.next;
    fast.next = slow.next;
    slow.next = head;
}
const linkedList = new LinkedList();
const list1 = new LinkedList();
const list2 = new LinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.addLast(4);
linkedList.addLast(5,linkedList.head)
splitLinkedList(list1,list2,linkedList.head)

console.log("First Circular Linked List");
list1.print(list1.head);
console.log("Second Circular Linked List");
list2.print(list2.head);