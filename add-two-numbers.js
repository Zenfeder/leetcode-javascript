// https://leetcode-cn.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    debugger;
    let target = (l1 ? l1.val : 0) + (l2 ? l2.val : 0)
    var carryVal = target < 10 ? 0 : 1; // 下一节点的进位
    var linkSum = new ListNode(target%10);
    if ((l1 && l1.next) || (l2 && l2.next) || carryVal === 1) {
        if (l1 && l1.next) {
            l1.next.val = l1.next.val + carryVal; // 把进位 1 直接加到下一个节点的值上
            carryVal = 0;
        } else if (carryVal > 0) {
            l1.next = new ListNode(1);
            carryVal = 0;
        }
        if (l2 && l2.next) {
            l2.next.val = l2.next.val + carryVal; // 把进位 1 直接加到下一个节点的值上
            carryVal = 0;
        } else if (carryVal > 0) {
            l2.next = new ListNode(1);
            carryVal = 0;
        }
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        linkSum.next = addTwoNumbers(l1, l2); // 怎么表示 linkSum.next linkSum.next.next linkSum.next.next.next ... 
    } else {
        linkSum.next = null;
    }

    return linkSum;
};

// 342 (2 -> 4 -> 3)
var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

console.log(l1)

// 465 (5 -> 6 -> 4)
var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
console.log(l2)

var result = addTwoNumbers(l1, l2);
console.log('Result: ', JSON.stringify(result));