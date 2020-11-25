import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

    const [enteredGoal, setEnteredGoal] = useState('');
    const [courseObjectives, setCourseObjectives] = useState([]);

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const submitGoalHandler = () => {
        setCourseObjectives(currentObjectives => [...currentObjectives, enteredGoal]);
    }

  	return (
      	<View style={ styles.screen }>

            <View style={ styles.inputContainer }>
        		<TextInput 
                    placeholder="course objective"
                    style={ styles.input }
                    onChangeText={ goalInputHandler }
                    value={ enteredGoal }
                />
                <Button title="add" onPress={submitGoalHandler}></Button>        		
            </View>

            <ScrollView style={{ height: 200 }}>
                { courseObjectives.map((objective) => <View key={objective} style={ styles.itemsList }><Text>{ objective }</Text></View> ) }
            </ScrollView>

      	</View>
  	);
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
        width: '50%'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        borderColor: 'blue',
        borderWidth: 1,
        padding: 10,
        width: '90%'
    },
    itemsList: {
        padding: 10,
        backgroundColor: '#ccc',
        width: '90%',
        marginVertical: 2
    }
});
