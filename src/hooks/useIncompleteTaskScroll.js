import { useRef } from "react";

const useIncompleteTaskScroll = (tasks = []) => {
     const firstIncompleteTaskRef = useRef(null);
    
     const firstIncompleteTaskRefId = tasks.find(({isDone}) => !isDone)?.id;

     return [firstIncompleteTaskRef, firstIncompleteTaskRefId];
} 
export default useIncompleteTaskScroll
