/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  return mergeSort(0, lists.length - 1);
};

function mergeSort(low, high) {
  let l = low;
  let h = high;
  let m = Math.floor(low + (high - low) / 2);
  let list;
  while (l < h) {
    let left = mergeSort(l, m);
    let right = mergeSort(m + 1, h);
    list = sort(left, right);
  }
  return list;
}

function sort(l1, l2) {
  let curr = new ListNode(-1);
  let head = curr;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1.next = l1;
    } else {
      curr.next = l2;
      l2.next = l2;
    }
  }
  if (l1 !== null) {
    curr.next = l1;
  }
  if (l1 !== null) {
    curr.next = l2;
  }

  return head.next;
}
