export const loadJSON = key => {
    if (key){
        let x;
        try {
            x = JSON.parse(localStorage.getItem(key));
        } catch (error) {
            return null;
        }
        return x;
    } else {
        return null;
    }
}
export const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));