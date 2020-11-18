function ListNode(val) {
  this.val = val;
  this.next = null;
}

function mergeList(l1, l2) {
  //Need dummy starting point
  //curr is also used as an pointer/incrementer
  //save next value with curr.next
  let curr = new ListNode(-1);
  //this is to return at the end
  let head = curr;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }

    curr = curr.next;
  }

  if (l1 !== null) {
    curr.next = l1;
  }

  if (l2 !== null) {
    curr.next = l2;
  }

  return head.next;
}
