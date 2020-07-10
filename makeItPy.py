# Going to attempt to find a solve for the javascript function countUniqueValues in Python

[1, 1, 1, 1, 1, 2]

# declare function


def count_unique_values(intList):
    # early exit
    if len(intList) == 0:
        return 0

    # initialize pointer values and counter
    slow = 0
    fast = 1
    uniqueCounter = 1

    # while loop
    while fast < len(intList):
        if intList[slow] == intList[fast]:
            fast += 1
        else:
            uniqueCounter += 1
            slow = fast
            fast += 1
    else:
        print("There are %d unique values in your list." % (uniqueCounter))


count_unique_values([1, 1, 1, 1, 1, 2])
count_unique_values([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])


def cleaner_unique_values(intList):
    if len(intList) == 0:
        return 0

    pointer = 0

    for i in range(len(intList)):
        if intList[pointer] != intList[i]:
            pointer += 1
            intList[pointer] = intList[i]

    print("There are %d unique values in your list." % (pointer + 1))


cleaner_unique_values([1, 1, 1, 1, 1, 2])
cleaner_unique_values([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
