const LinkedList = require('./LinkedListClass')

const linkedlist = new LinkedList();

linkedlist.append(8)
linkedlist.append(12)
linkedlist.append(10)
linkedlist.append(4)
linkedlist.append(6)
linkedlist.append(5)
linkedlist.append(1)

function NthnodefromLast(head,num){
    let current =  head;
    let count = 0;
    while(current){
        count++;
        current = current.next;
    }
    count =count-num;
    current = head;
    while(count>0 && current.next){
        current = current.next;
        count--;
    }

    if(count<0){
        console.log(-1)
    }else{
        console.log(current.data)
    }
    return current.data;
}
function NthNodeFromBeginning(head,num){
    let current = head;
    let count = 1;
    while(current){
        if(count === num){
            console.log(current.data)
            return;
        }
        count++;
        current = current.next;
    }

    console.log(-1)
}
NthNodeFromBeginning(linkedlist.head,3) // it will give output 10 at position 3 from Beginning
NthnodefromLast(linkedlist.head,3)    // it will give output 6 at position 3 from Last