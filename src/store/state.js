export default {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    user: JSON.parse(localStorage.getItem("user")) || null,
}
