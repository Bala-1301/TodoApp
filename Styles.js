import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container : {
	  flex : 1,
	  
	},
	head : {
	  
	  alignItems : 'center',
	  justifyContent :'center',
	  backgroundColor : 'skyblue',
	  height : "15%",
	  borderRadius : 20,
	  
	},
	headText : {
	  paddingTop : 15,
	  fontSize : 28,
	  fontWeight : 'bold',
	  color : 'white',
	},
	counts : {
	  padding: "3%",
	  paddingBottom : '7%',
	  flexDirection : 'row',
	},
	count1View :{
	  flex : 1,
	  alignItems : 'flex-start'
	},
	count1 : {
	  fontSize : 19,
	  fontWeight : 'bold'
	},
	count2View :{
	  flex: 1,
	  alignItems : "flex-end",
	},
	count2 : {
	  fontSize : 19,
	  fontWeight : 'bold',
	},
	in : {
	  justifyContent: 'center',
	  paddingBottom : 10,
	  paddingTop : 5,
	},
	input : {
	  height : 35,
	  width : 200,
	  borderWidth : 1,
	  borderRadius : 5,
	  paddingRight : 10,
	  paddingLeft : 5,
	},
   
	listItem : {
	  borderWidth : 2,
	  padding : 5,
	  flexDirection : 'row',
	  borderBottomWidth : 1,
	  borderRadius : 10,
	  borderColor : 'grey',
	  borderBottomWidth : 2,
	},
	a1: {
		padding : 5,
	},
	listChecked : {
	  textDecorationLine: 'line-through',
	  fontSize : 20,
	  paddingBottom : 5,
	  flexWrap : 'wrap',
	},
	abc : {
	  flex : 2,
	  justifyContent :'center',
	  
	},
	listText : {
	  fontSize : 20,
	  paddingBottom : 5,
	  flexWrap : 'wrap',
	},
	todoView : {
	  justifyContent : 'center'    
	},
	todoNum : {
	  color : 'steelblue',
	  fontSize : 20,
	},
	delete : {
	  flex : 1,
	  alignItems : 'flex-end',
	  paddingRight : 10,
	  paddingTop : 5,
	},
   
	flexing : {
	  flexDirection :'row',
	},
	flatList : {
	  marginBottom : "25%"
	},
	noTodo : {
		flex : 1,
		alignItems : 'center',
		justifyContent : "center",
		paddingBottom: "10%"
	},
	noTodoText : {
		color : 'grey',
		fontSize : 20,
		alignItems : "center",
		justifyContent : "center"
	},
	addButton : {
		marginRight : 25,
	},
	listView : {
		//borderWidth : 2,
	}
	
	
  })