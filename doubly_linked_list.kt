internal class Node(
    var data: Int
) {
    var prev: Node? = null
    var next: Node? = null
}

internal class DoublyLinkedList(arr: IntArray) {
    var head: Node? = null
    var tail: Node? = null

    init {
        if (arr.isNotEmpty()) {
            head = Node(arr[0])
            var currentNode = head
            for (i in 1 until arr.size) {
                currentNode!!.next = Node(arr[i])
                currentNode.next!!.prev = currentNode
                currentNode = currentNode.next
            }
            tail = currentNode
        }
    }

    fun printList() {
        var iterator = head
        var str = ""
        while (iterator != null) {
            str += iterator.data.toString() + "→"
            iterator = iterator.next
        }
        println("[${str.substring(0, str.length-1)}]")
    }
}

fun main() {
  val numbers = listOf(1,2,3,4,5)
  val numList = DoublyLinkedList(numbers.toIntArray())
  numList.printList()
}