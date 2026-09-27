const URL = "https://todolist-1gt9.onrender.com/api/todo"

export const taskAPI = {
    getAll: async () => {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        return await response.json();
    },
    add: async (taskData) => {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData),
        });
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        return await response.json();
    },
    delete: async (taskId) => {
        const response = await fetch(`${URL}/${taskId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
    },
    toggleState: async (taskId, isDone) => {
        const response = await fetch(`${URL}/${taskId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ isDone }),
        });
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        return await response.json();
    },
    deleteAll: async (taskIds) => {
        await Promise.all(
            taskIds.map((id) =>
                fetch(`${URL}/${id}`, {
                    method: 'DELETE',
                })
            )
        );
    },
};