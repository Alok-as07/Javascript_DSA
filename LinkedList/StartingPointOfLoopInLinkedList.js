const LinkedList = require('./LinkedListClass')

const linkedList = new LinkedList();


linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(5)
linkedList.append(6)
linkedList.append(7, linkedList.head.next.next)

// this is Hasmap methos where T.C is O(N+logN) and S.C is O(N);
function HashmapMethod(head) {
    const HSMap = new Map();
    let temp = head;
    while (temp.next != null) {
        if (HSMap.has(temp)) {
            return temp.data;
        }

        HSMap.set(temp, 1);
        temp = temp.next;
    }
    return -1;
}


// this is tortois and here method T.C O(N+m) and S.C is O(1)
function OptimalApproach(head) {
    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            slow = head;
            while (slow != fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow.data;
        }
    }

    return -1;
}
console.log(HashmapMethod(linkedList.head))