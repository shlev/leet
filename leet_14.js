/** 
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

Follow up:

Could you solve the problem in O(1) extra memory space?
You may not alter the values in the list's nodes, only nodes itself may be changed.
*/

import { ListNode, assertEquals, arrayToLinkedList } from './list_node.js';

var reverseKGroup = function (head, k) {
    if ( k<2 ) return head;

    let r;
    let original;

    let chunkCounter;
    original = head;
    let chunkTail;
    

    while ( original != null ) {
      chunkCounter = k;
      let chunk;
      let state = new ListNode(original.val, original.next)
      while ( original !=null && chunkCounter > 0 ) {
        if ( chunk == null) {
          chunk = new ListNode(original.val, null)
        } else {
          let tmp = new ListNode(chunk.val, chunk.next);
          chunk.val = original.val;
          chunk.next = tmp;
        }
        original = original.next
        chunkCounter--;

      }

      if ( r == null ) {
        r = chunk;
      } else {
        let tmp = r.next; 
        while ( tmp.next != null){
          tmp = tmp.next;
        }
        if ( chunkCounter > 0 ) {
          tmp.next = state;
        } else {
          tmp.next =  chunk;
        }
      }
    }

    return r;
}



export function test14() {
  testA();
  testB();
  testC();
  testD();

}

function test(arr1, arr2, k) {
  console.log("Input " + arr1 + ", k = " + k);
  console.log("expected result :" + arr2);
  let head = arrayToLinkedList(arr1);
  let actual = reverseKGroup(head, k);

  let expected = arrayToLinkedList(arr2);

  console.log(assertEquals(expected, actual));

}

function testA() {
  console.log("Test 1");
  let arr = [1, 2, 3, 4, 5];
  let k = 2;

  let expectedArr = [2,1,4,3,5]
  test(arr, expectedArr, k);
}

function testB() { 
  console.log("Test 2");
  let arr = [1,2,3,4,5];
  let k = 3;
  let expectedArr = [3,2,1,4,5]
  test(arr, expectedArr, k);
}

function testC() { 
  console.log("Test 3");
  let arr = [1,2,3,4,5];
  let k = 1;
  let expectedArr = [1,2,3,4,5]
  test(arr, expectedArr, k);
}

function testD() {
  console.log("Test 4");
  let arr = [1];
  let k = 1;
  let expectedArr = [1]
  test(arr, expectedArr, k);
}


