import { StyleSheet } from 'react-native';


export const registerStyles = StyleSheet.create({
	nextButton:{
		backgroundColor: '#250789',
		width: 100,
		height: 50,
		borderRadius: 4,
		justifyContent: 'center'
	},
	nextButtonDisabled:{
		backgroundColor: '#DFDDDD',
		width: 100,
		height: 50,
		borderRadius: 4,
		justifyContent: 'center'
	},
	nextButtonText:{
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold'
	},
	previousButtonText:{
		color: '#182D68'
	},
	previousButton:{
		width: 100,
		height: 50,
		justifyContent: 'center'
	},
	stepsBarBorder:{
		color: 'red'
	},
	labelActive:{
		color: 'red'
	}
});
