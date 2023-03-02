//Left Rotation on the array.
function leftRotation(arr:any , d:any) {
  const rotatedArray = [...arr.slice(d), ...arr.slice(0,d)];
  return rotatedArray;
}

const arr = [1, 2, 3, 4, 5];
console.log("Array before left rotation ",arr)
const rotations = 4
console.log("Array after left rotation ")
console.log(leftRotation(arr, rotations)); 
//Plus Minus
function plusMinus(arr1:any) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > 0) {
        positive++;
      } else if (arr1[i] < 0) {
        negative++;
      } else {
        zero++;
      }
    }

  
    console.log((positive / arr1.length).toFixed(6));
    console.log((negative / arr1.length).toFixed(6));
    console.log((zero / arr1.length).toFixed(6));
  }
  const arr1 = [1, 1, 0, -1, -1];
  console.log(arr1)
 plusMinus(arr1);

// Linked List
 function insertNodeAtTail(head:any, data:any) { //Function for adding the node at the tail of the Linked List

    const newNode = new Node()//newSinglyLinkedListNode(data) for the javascript
    if (head===null){
        head =newNode
        return head
    }
    let current = head
    while (current.next !== null){
        current = current.next
    }
    current.next = newNode
    return head
    }
    function insertNodeAtHead(head:any, data:any) {//Function for adding the node at the head of the linked list 
        const node = new Node()//newSinglyLinkedListNode(data) for the javascript
            
            if (head){
                node.next = head
            }
            return node
        }
  
        function bubbleSort(arr2:number[]) { //bubble sort
            const n = arr2.length;
          
            // iterate through array elements
            for (let i = 0; i < n - 1; i++) {
              // last i elements are already sorted, so inner loop only goes up to n-i-1
              for (let j = 0; j < n - i - 1; j++) {
                // swap elements if jth element is greater than (j+1)th element
                if (arr2[j] > arr2[j + 1]) {
                  let temp = arr2[j];
                  arr2[j] = arr2[j + 1];
                  arr2[j + 1] = temp;
                }
              }
            }
            
            return arr2;
          }
       
          