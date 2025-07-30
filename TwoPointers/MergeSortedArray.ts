function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const merged = [...nums1.slice(0, m), ...nums2.slice(0, n)].sort((a, b) => a - b);
    nums1 = merged;
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);