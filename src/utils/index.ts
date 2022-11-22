export const percent = (value: number, total: number): string => {
    return `${(Number(value) / Number(total) * 100).toFixed(2)}%`;
};

export const sortValues = (obj: any = {}, reverse: boolean = true) => {
    let sortable = [];
    for (var key in obj) {
        sortable.push([key, obj[key]]);
    }
    sortable.sort((a, b) => {
        return a[1] - b[1];
    });
    if (reverse) return sortable.reverse();
    return sortable;
};

export const sepNumber = (number: number) => number.toLocaleString();

export const countRepeat = (ary: string[]) => {
    const counts: any = {};
    ary.forEach((x) => { counts[x] = (counts[x] || 0) + 1; });
    return Object.entries(counts);
};

