//actions
export const ADD_TODO = "ADD_TODO"
export const CHECK_TODO = "CHECK_TODO"
export const DELETE_TODO = "DELETE_TODO"

//action creators
export const addTodo = newTodo => ({
	type : ADD_TODO,
	payload : newTodo
})

export const checkTodo = id => ({
	type : CHECK_TODO,
	payload : id,
})

export const deleteTodo = id => ({
	type : DELETE_TODO,
	payload : id
})

