const LinkedList = require('./LinkedListClass')

const linkedList = new LinkedList();

linkedList.append(3)
linkedList.append(2)
linkedList.append(2)
linkedList.append(3)


function RemoveDuplicatesUnSorted(head){
    let tempSet = new Set();
    let current = head;
    let prev = null;
    while(current.next != null){
        if(tempSet.has(current.data)){
            prev.next = current.next;
            current = null;
        }else{
            tempSet.add(current.data);
            prev = current;
        }
        
        current = prev.next;
    }
    return head;
}

RemoveDuplicatesUnSorted(linkedList.head);
linkedList.printList()