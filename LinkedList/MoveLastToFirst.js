const LinkedList = require('./LinkedListClass')

let linkedList = new LinkedList();

linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(5)
linkedList.append(6)
linkedList.append(7)


function MoveLastToFirst(head){
    let current = head
    while(current.next.next != null){
        current =  current.next;
    }
    let temp = current.next;
    current.next =  null;
    temp.next = head;
    linkedList.head = temp;
    return head
}

let ans = MoveLastToFirst(linkedList.head)
linkedList.printList(ans)
