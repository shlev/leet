/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

export function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

export function arrayToLinkedList(arr) {
    let head;
    let list;
    for (let val of arr) {
      let listNode = new ListNode(val);
      if (list == undefined) {
        list = listNode;
        head = listNode;
      } else {
  
        list.next = listNode;
        list = list.next;
      }
    }
  
    return head;
  }

export function assertEquals(expected, actual) {
    if (expected == undefined || actual == undefined) return false;
    
    while( expected != null && actual!=null) {
      if ( expected.val!= actual.val) return false;
      expected = expected.next
      actual = actual.next
    }
  
  
    return expected==null && actual==null
  }
  