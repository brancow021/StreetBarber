import { StyleSheet } from 'react-native';


export const FormVerifyPhoneStyle = StyleSheet.create({
	pickerCountry:{
		width: 'auto',
		maxWidth: 130,
		paddingHorizontal: 0,
		borderRadius: 5,
	},
	buttonVerify:{
		backgroundColor: '#2D1679',
		width: 120,
		borderRadius: 4, 
	},
	disabledButton: {
		backgroundColor: '#DFDDDD',
		width: 120,
		borderRadius: 4,
		color: 'white'
	},
	containerButtom:{
		flex: 1,
		marginVertical: 15,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginRight: 15
	},
	inputCode: {
		borderBottomWidth: 1,
		borderBottomColor: '#ccc'
	},
	statusRequest:{
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	textStatusPending:{
		textTransform: 'uppercase',
		fontWeight: 'bold',
		color: '#D6C229'
	},
	textStatusAproved:{
		textTransform: 'uppercase',
		fontWeight: 'bold',
		color: '#46AF0D'
	},
	itemForm:{
		width: "100%",
		padding: 0,
		margin: 0,
		borderWidth: 0
	}
});