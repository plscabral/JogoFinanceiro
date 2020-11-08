import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Button from '../components/Button';
import Frame from '../components/Frame';

const QuestionsPage = () => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require('../images/LOGO3x.png')} />

			<Frame question='O que você pensa sobre o futuro?' />

			<View>
				<Button text="A) Vivo a minha vida passo a passo, sempre construindo o dia de amanhã." />
				<Button text="B) Deixo a vida me levar, não penso muito no futuro." />
				<Button text="C) Vivo um dia após o outro, lutando para chegar no mês seguinte." />
				<Button text="D) Abro mão de coisas hoje sempre pensando na realização dos meus sonhos." />
				<Button text="E) Planejo todos os meus passos, tenho metas muito definidas para os próximos anos." />
			</View>
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
})

export default QuestionsPage;