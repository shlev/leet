/** 
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

Follow up:

Could you solve the problem in O(1) extra memory space?
You may not alter the values in the list's nodes, only nodes itself may be changed.
*/

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
var reverseKGroup = function(head, k) {
    
};


export function test14() {
    let head = [1,2,3,4,5], k = 2;
    let actual = reverseKGroup(head,k)
    let expected = [2,1,4,3,5]

    console.log(assertEquals(expected,actual));
}

function assertEquals(expected, actual) {
    if ( expected==undefined || actual== undefined ) return false;
    if (expected.length != actual.length) return false;

    for ( let index=0; index< expected.length; index++) {
        if (expected[index]!=actual[index]) return false;
    }

    return true;
}