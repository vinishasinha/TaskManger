const todoKey="reactTodo";
export const getLocalStorageData=()=>{
    const rawTodo=localStorage.getItem(todoKey);
    if(!rawTodo) return [];
    return JSON.parse(rawTodo)
}

export const setLocalStorageData=(task)=>{
    return localStorage.setItem(todoKey,JSON.stringify(task))
}