import axios  from "axios";

document.addEventListener("DOMContentLoaded", () =>{
    const taskForm = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");

    //function to fetch tasks from backend and render them

    const fetchTasks = async () => {
        try {
            const response = await axios.get('/api/tasks');
            const tasks = response.data
            console.log(tasks)
            taskList.innerHTML = '';
            tasks.forEach(task =>{
                const li = document.createElement('li');
                li.innerHTML = `<strong> ${task.name}</strong>`
                taskList.appendChild(li)
            })
        } catch (error) {
            console.error("Error fetching tasks : ", error.message)
        }
    };
    //Fetch tasks when the page loads

    fetchTasks();

    //Event listener for submitting the task form

    taskForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        console.log(name)
        try {
            await axios.post("/api/tasks", {name});
            //fetch tasks again to update the list
            fetchTasks();
            //clear form fields

            taskForm.reset()
        } catch (error) {
            console.error("Error adding task:", error.message)
        }
    })
})