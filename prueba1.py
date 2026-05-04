"""
Bubble Sort + Eliminación de duplicados
----------------------------------------
Ordena un array usando Bubble Sort y luego elimina los duplicados
sin usar funciones nativas como sorted() o set().

Ejecución:
    python solution.py
"""

def bubble_sort(arr):
    n = len(arr)
    if n <= 1:
        return arr
    
    swapped = True
    while swapped:
        swapped = False
        for i in range(1, n):
            if arr[i - 1] > arr[i]:
                arr[i - 1], arr[i] = arr[i], arr[i - 1]
                swapped = True

    return arr

def eliminate_duplicates_after_sorting(arr):
    if not arr:
        return arr
    
    n = len(arr)

    unique_count = 1
    for i in range(1, n):
        if arr[i] != arr[unique_count - 1]:
            arr[unique_count] = arr[i]
            unique_count += 1

    result = [0] * unique_count
    for i in range(unique_count):
        result[i] = arr[i]
    
    return result

arr = [4, 2, 7, 2, 4, 9, 1]
#print("Original array:", arr)
sorted_arr = bubble_sort(arr)
#print("Sorted array:", sorted_arr)
unique_arr = eliminate_duplicates_after_sorting(sorted_arr)
#print("Array with duplicates eliminated:", unique_arr)
print(unique_arr)