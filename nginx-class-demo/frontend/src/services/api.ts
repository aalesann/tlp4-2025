

export const testFech = async () => {

    try {
        const res = await fetch('/api');
        const data = await res.json();
        return data;
    } catch (error) {
        return { error: 'Failed to fetch' };
    }
}