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

 import {reverseKGroup} from './leet_25.js'
 import {printTestResult} from './test.js'
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

  export function test(arr1, arr2, k) {
    console.log("Input " + arr1 + ", k = " + k);
    console.log("expected result :" + arr2);
    let pInput = document.createElement('p');
    pInput.innerHTML = `Input: head = ${arr1}, k = ${k}`
    let pOutput = document.createElement('p');
    pOutput.innerHTML = `Input: head = ${arr2}`
  
    let head = arrayToLinkedList(arr1);
    let actual = reverseKGroup(head, k);
  
    let expected = arrayToLinkedList(arr2);
  
    let testPass = assertEquals(expected, actual);
  
    printTestResult( testPass, pInput, pOutput);
  }
  