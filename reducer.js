import { combineReducers } from 'redux'

import {ADD_TODO, CHECK_TODO, DELETE_TODO} from './actions'


let id2 = 0

const todoListReducer = (state = [], action) => {

	switch(action.type){
		case ADD_TODO : 
			const date = new Date().getDate(); 
			const month = new Date().getMonth() + 1; 
			const year = new Date().getFullYear(); 
			const hours = new Date().getHours(); 
			const min = new Date().getMinutes(); 
			const sec = new Date().getSeconds(); 
			const time = date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
			let id = state.length
			return [...state, {title : action.payload, id : `${action.payload + ++id2 + ++id}`, checked : false, addedTime : time} ]
		case CHECK_TODO :
			
			return state.map(todo => {
				if (todo.id !== action.payload) return todo
				return {
			 		id: todo.id,
			  		title: todo.title,
					checked: !todo.checked,
					addedTime : todo.addedTime  
				}
			})
		case DELETE_TODO :
			
			return state.filter(todo => todo.id !== action.payload)
		default :
			return state
	}
}

const reducer = combineReducers({
	todoList : todoListReducer,
})



export default reducer