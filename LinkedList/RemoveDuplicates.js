const LinkedList = require('./LinkedListClass')

const linkedList = new LinkedList();

linkedList.append(1)
linkedList.append(2)
linkedList.append(2)
linkedList.append(3)


function RemoveDuplicates(head){
    let current = head;
    while(current.next != null){
        if(current.data == current.next.data){
            current.next = current.next.next;
        }else{
            current = current.next;
        }
    }
    return head;
}

RemoveDuplicates(linkedList.head);
linkedList.printList();