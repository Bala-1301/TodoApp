import React from 'react'
import {View, Button, Text, TextInput, FlatList, Alert,} from 'react-native'
import { Icon, Overlay, CheckBox} from 'react-native-elements'
import { Fab } from 'native-base'
import { connect } from 'react-redux'
//import { Fontisto } from '@expo/vector-icons'



import { styles } from './Styles'
import { addTodo, checkTodo, deleteTodo} from './actions'

class Todo extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			yetTodoCount : 0,
    		addNew : false,
    		newTodo : '',
    		add : true,
		}
	}

	componentDidMount(){
		let count = 0
		this.props.todoList.map(item => {
			if(item.checked == false)
				count += 1
		})
		this.setState({yetTodoCount : count})
	}
	
	handlePress = () => {
    	this.setState(prevState => {
      		return{
      			addNew : !prevState.addNew
      		}
    	})
  	}

  	handleNew = () => {
		this.props.addTodo(this.state.newTodo)
		this.setState(prevState => {
			return{
			addNew : false,
        	newTodo : '',
        	add : true,
			yetTodoCount : prevState.yetTodoCount + 1
			}
    	})
  	}
  	handleCheck(id,checked){
		 
		this.props.checkTodo(id)
    	this.setState(prevState => {
    		return{
        		yetTodoCount : checked ? prevState.yetTodoCount + 1 : prevState.yetTodoCount - 1
      		}
    	})
	  }
	  componentDidUpdate(){
		  console.log("         ")
	  }
  
  	handleDelete(id,checked){
		this.props.deleteTodo(id)
		this.setState(prevState => {
      		return{
        		yetTodoCount :  checked ? prevState.yetTodoCount : prevState.yetTodoCount - 1
      		}
    	})
  	}

  
	
	list = ({item}) => {
		
		return(
			<View style = {styles.a1}>
			<View style ={styles.listItem}>
			  <CheckBox
				onPress = {() => this.handleCheck(item.id,item.checked)}
				center
				checked = {item.checked}
			  />
			  <View style = {styles.abc}>
				<Text style = {!item.checked ? styles.listText : styles.listChecked}>
				  	{item.title}
				</Text>
				<Text style = {{ fontSize : 15, color : 'grey'}}>
					{item.addedTime}
				</Text>
			  </View> 
			  <View style = {styles.delete}>
				<Icon color = 'red' name = 'delete' size = {35} onPress={()=>this.handleDelete(item.id,item.checked)} />
			  </View>
			</View>
			</View>
		  )
	}
 
	render() {
		
    	return(
		
    	<View style = {styles.container}>
        	<View style = {styles.head}>
            	<Text style = {styles.headText}> To-Do Tasks </Text>
          	</View>
			
          	<View style = {styles.counts}>
              	<View style = {styles.count1View}>
                  	<Text style = {styles.count1}>Total To-Do Count : {this.props.todoList.length}</Text>
              	</View>
              	<View style = {styles.count2View}>
					<Text style = {styles.count2}>Yet To-do Count : {this.state.yetTodoCount}</Text>
				</View>
          	</View>
		
          	{this.props.todoList.length ?
			<View style = {styles.listView}>
              	<FlatList 
            		style = {styles.flatList}
            		data = {this.props.todoList}
                	renderItem = {({item}) => this.list({item})}
						
              		keyExtractor = {item => `${item.id}`}
            	/>
          	</View> : 
			<View style = {styles.noTodo}>
				<Text style = {styles.noTodoText}>No task(s) to do currently!</Text>
				<Text style = {styles.noTodoText}>Click the Add button to add a to-do!</Text> 
			</View>}

          	<Overlay 
		  		isVisible = {this.state.addNew} 
				height = {90} 
				borderRadius = {15} 
				overlayStyle = {{alignItems: 'center'}}
				onBackdropPress = {() => this.setState({addNew : false})}
			> 
            	<View style = {styles.in}>
              		<TextInput 
               			style = {styles.input}
                		placeholder = "Enter new To-Do...  "
                		onChangeText = {(text) => this.setState({newTodo : text, add : false})}
                		value = {this.state.newTodo}
              		/>
              		<Button 
						style = {styles.button} 
						title = 'Add Task' 
						onPress = {this.handleNew} 
						disabled = {this.state.add}
					/>
            	</View>
          	</Overlay>
			  <Fab
			  	containerStyle = {styles.addButton}
           		position = "bottomRight"
            	onPress = {this.handlePress}
            	style = {{backgroundColor : 'skyblue'}}
         	>
            	<Icon name = 'add' color = 'white' size = {30} />
          	</Fab>
          	
    	</View>      
    
    )
  }
} 

const mapStateToProps = state => {
	return{
		todoList : state.todoList
	}
}

const mapDispatchToProps = dispatch => {
	return{
		addTodo : newTodo => {
			dispatch(addTodo(newTodo))
		},
		checkTodo : id => {
			dispatch(checkTodo(id))
		},
		deleteTodo : id => {
			dispatch(deleteTodo(id))
		},
		deleteChecked : () => {
			dispatch(deleteChecked())
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Todo)


