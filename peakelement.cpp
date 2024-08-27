#include <bits/stdc++.h>
using namespace std;

int findPeakElement(int n,int arr[]) {
   // int n = arr.size(); //Size of array.

    for (int i = 0; i < n; i++) {
        //Checking for the peak:
        if ((i == 0 || arr[i - 1] < arr[i])
                && (i == n - 1 || arr[i] > arr[i + 1])) {
            return i;
        }
    }
    // Dummy return statement
    return -1;
}

int main()
{
     int n;
     cout << "Enter the size of the array: ";
     cin >> n;
     int arr[n];
     cout << "Enter the elements of the array: ";
     for (int i = 0; i < n; i++)
         cin >> arr[i];
    int ans = findPeakElement(n,arr);
    cout << "The peak is at index: " << ans << "\n";
    return 0;
}

