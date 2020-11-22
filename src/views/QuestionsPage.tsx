import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Questions from '../arrayQuestions';

const QuestionsPage = () => {
	const navigation = useNavigation();

	// Quarda o estado das questions e alternatives
	const [index, setIndex] = useState(0);
	const [questions, setQuestions] = useState(Questions[0].questionText);
	const [alternativeA, setAlternativeA] = useState(Questions[0].options.alternativeA);
	const [alternativeB, setAlternativeB] = useState(Questions[0].options.alternativeB);
	const [alternativeC, setAlternativeC] = useState(Questions[0].options.alternativeC);
	const [alternativeD, setAlternativeD] = useState(Questions[0].options.alternativeD);
	const [alternativeE, setAlternativeE] = useState(Questions[0].options.alternativeE);
	// Quarda o valor de cada alternativa escolhida
	const [optionA, setOptionA] = useState(0);
	const [optionB, setOptionB] = useState(0);
	const [optionC, setOptionC] = useState(0);
	const [optionD, setOptionD] = useState(0);
	const [optionE, setOptionE] = useState(0);

	function nextQuestions(alternativa: string): void {
		if(alternativa == "alternativaA"){
			setOptionA(optionA + 1);
		}
		else if(alternativa == "alternativaB"){
			setOptionB(optionB + 1);
		}
		else if(alternativa == "alternativaC"){
			setOptionC(optionC + 1);
		}
		else if(alternativa == "alternativaD"){
			setOptionD(optionD + 1);
		}
		else if(alternativa == "alternativaE"){
			setOptionE(optionE + 1);
		}
		else{
			console.log("Tipo de alternativa não encontrada!")
		}

		if(index == 18){
			if(optionA > optionB && optionA > optionC && optionA > optionD && optionA > optionE ){
				navigation.navigate('ResultPage', {resultado: "O CONSTRUTOR"})
			}
			else if(optionB > optionA && optionB > optionC && optionB > optionD && optionB > optionE ){
				navigation.navigate('ResultPage', {resultado: "O DESPREOCUPADO"})
			}
			else if(optionC > optionA && optionC > optionB && optionC > optionD && optionC > optionE ){
				navigation.navigate('ResultPage', {resultado: "O CAMALEÃO"})
			}
			else if(optionD > optionA && optionD > optionB && optionD > optionC && optionD > optionE ){
				navigation.navigate('ResultPage', {resultado: "O SONHADOR"})
			}
			else{
				navigation.navigate('ResultPage', {resultado: "O PLANEJADOR"})
			}
		}
		else{
			setIndex(index + 1);
		}

		setQuestions(Questions[index].questionText)
		setAlternativeA(Questions[index].options.alternativeA)
		setAlternativeB(Questions[index].options.alternativeB)
		setAlternativeC(Questions[index].options.alternativeC)
		setAlternativeD(Questions[index].options.alternativeD)
		setAlternativeE(Questions[index].options.alternativeE)
	}

	function handleAlternativaA() {
		nextQuestions("alternativaA");
	}

	function handleAlternativaB() {
		nextQuestions("alternativaB");
	}

	function handleAlternativaC() {
		nextQuestions("alternativaC");
	}

	function handleAlternativaD() {
		nextQuestions("alternativaD");
	}

	function handleAlternativaE() {
		nextQuestions("alternativaE");
	}

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require('../images/LOGO3x.png')} />

			<View style={styles.frame}>
				<Text style={styles.textFrame}>{questions}</Text>
			</View>

			<TouchableOpacity style={styles.button} onPress={handleAlternativaA}>
				<Text style={styles.textButton}>{alternativeA}</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.button} onPress={handleAlternativaB}>
				<Text style={styles.textButton}>{alternativeB}</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.button} onPress={handleAlternativaC}>
				<Text style={styles.textButton}>{alternativeC}</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.button} onPress={handleAlternativaD}>
				<Text style={styles.textButton}>{alternativeD}</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.button} onPress={handleAlternativaE}>
				<Text style={styles.textButton}>{alternativeE}</Text>
			</TouchableOpacity>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 150,
		height: 150
	},
	frame: {
		width: 350,
		height: 170,
		borderRadius: 20,
		backgroundColor: '#F3F2F2',
		elevation: 3,
		justifyContent: "center",
		alignItems: 'center',
	},
	textFrame: {
		maxWidth: 300,
		fontSize: 16,
		fontWeight: 'normal',
		color: '#000'
	},
	button: {
		backgroundColor: '#000',
		height: 60,
		width: 350,
		borderRadius: 20,
		justifyContent: "center",
		alignItems: 'center',
		elevation: 3,
		marginTop: 20,
	},

	textButton: {
		maxWidth: 300,
		color: '#fff',
		fontSize: 12
	},
})

export default QuestionsPage;