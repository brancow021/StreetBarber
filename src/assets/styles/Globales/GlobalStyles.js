import { StyleSheet } from 'react-native';


export const GlobalStyle = StyleSheet.create({
   HomeContainer:{
		backgroundColor: '#ECECF8',
		justifyContent: 'center',
	},
	title:{
		fontSize: 30,
		textAlign: 'center',
		marginBottom: 30
	},
	textButton:{
		textAlign: 'center',
		color: '#F1F1F7',
		width: '100%',
		fontWeight : 'bold',
      fontSize: 13
	},
	blockButton:{
		width: '90%',
		borderRadius: 4,
		backgroundColor: '#250789'
		
	},
	itemInput:{
		marginBottom: 20,
	},
	FormLogin:{
		justifyContent: 'center',
		alignItems: 'center'
	},
	 button:{
		 backgroundColor: '#2D1679',
	 },
	 ContentForm:{
		borderWidth: 1,
		height: 'auto',
		width: '95%',
		borderRadius: 4,
		borderColor: '#ccc',
		marginBottom: 60
	 }
});