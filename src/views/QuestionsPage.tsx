import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Questions from '../arrayQuestions';
import Profiles from '../arrayProfiles';

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
		if (alternativa == "alternativaA") {
			setOptionA(optionA + 1);
		}
		else if (alternativa == "alternativaB") {
			setOptionB(optionB + 1);
		}
		else if (alternativa == "alternativaC") {
			setOptionC(optionC + 1);
		}
		else if (alternativa == "alternativaD") {
			setOptionD(optionD + 1);
		}
		else if (alternativa == "alternativaE") {
			setOptionE(optionE + 1);
		}
		else {
			console.log("Tipo de alternativa não encontrada!")
		}

		if (index == 18) {
			if (optionA > optionB && optionA > optionC && optionA > optionD && optionA > optionE) {
				navigation.navigate('ProfileResult',
					{
						profileSummary: Profiles.Construtor.profileSummary,
						profileDescription: Profiles.Construtor.profileDescription,
						firstTip: Profiles.Construtor.firstTip,
						secondTip: Profiles.Construtor.secondTip,
						thirdTip: Profiles.Construtor.thirdTip,
						fourthTip: Profiles.Construtor.fourthTip
					})
			}
			else if (optionB > optionA && optionB > optionC && optionB > optionD && optionB > optionE) {
				navigation.navigate('ProfileResult',
					{
						profileSummary: Profiles.Despreocupado.profileSummary,
						profileDescription: Profiles.Despreocupado.profileDescription,
						firstTip: Profiles.Despreocupado.firstTip,
						secondTip: Profiles.Despreocupado.secondTip,
						thirdTip: Profiles.Despreocupado.thirdTip,
						fourthTip: Profiles.Despreocupado.fourthTip
					})
			}
			else if (optionC > optionA && optionC > optionB && optionC > optionD && optionC > optionE) {
				navigation.navigate('ProfileResult',
					{
						profileSummary: Profiles.Camaleao.profileSummary,
						profileDescription: Profiles.Camaleao.profileDescription,
						firstTip: Profiles.Camaleao.firstTip,
						secondTip: Profiles.Camaleao.secondTip,
						thirdTip: Profiles.Camaleao.thirdTip,
						fourthTip: Profiles.Camaleao.fourthTip
					})
			}
			else if (optionD > optionA && optionD > optionB && optionD > optionC && optionD > optionE) {
				navigation.navigate('ProfileResult',
					{
						profileSummary: Profiles.Sonhador.profileSummary,
						profileDescription: Profiles.Sonhador.profileDescription,
						firstTip: Profiles.Sonhador.firstTip,
						secondTip: Profiles.Sonhador.secondTip,
						thirdTip: Profiles.Sonhador.thirdTip,
						fourthTip: Profiles.Sonhador.fourthTip
					})
			}
			else {
				navigation.navigate('ProfileResult',
					{
						profileSummary: Profiles.Planejador.profileSummary,
						profileDescription: Profiles.Planejador.profileDescription,
						firstTip: Profiles.Planejador.firstTip,
						secondTip: Profiles.Planejador.secondTip,
						thirdTip: Profiles.Planejador.thirdTip,
						fourthTip: Profiles.Planejador.fourthTip
					})
			}
		}
		else {
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
			<Image style={styles.image} source={require('../images/logo.png')} />

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
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		marginTop: 10
	},
	image: {
		width: 100,
		height: 130,
		marginBottom: 10
	},
	frame: {
		width: '90%',
		height: 120,
		borderRadius: 20,
		backgroundColor: '#f2f2f2',
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 3,
		marginBottom: 15
	},
	textFrame: {
		fontSize: 14,
		color: '#000',
		fontWeight: 'bold',
		textAlign: 'center',
		maxWidth: '90%'
	},
	button: {
		backgroundColor: '#000',
		height: 55,
		width: '90%',
		borderRadius: 20,
		justifyContent: "center",
		alignItems: 'center',
		elevation: 3,
		marginBottom: 8
	},
	textButton: {
		color: '#fff',
		fontSize: 12,
		textAlign: 'center',
		maxWidth: '94%'
	}
})

export default QuestionsPage;