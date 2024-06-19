import React from 'react';
import {
    Image,
    Pressable,
    Text,
    Alert,
    View,
    TextInput,
} from 'react-native';
import { styles } from './app_styles';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function SearchScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#4f7942', dark: '#A2D9A2' }}
            headerImage={
                <Image
                    source={require('@/assets/images/pigsTransparent.png')}
                    style={styles.gpLogo}
                />
            }>

            {/* Set the title to represent the search tab of the app. */}
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title" style={styles.titleText}>Search</ThemedText>
            </ThemedView>

            <View style={styles.inputContainer}>
                <Text style={styles.headerText}>
                    Enter any fruit or vegetable for safety confirmation, recommended quantities, and benefits.
                </Text>
                <TextInput
                    style={styles.headerText}
                    placeholder="Type here..."
                    placeholderTextColor='#A2D9A2'
                    selectionColor='#A2D9A2'
                />
                <View style={styles.buttonContainer}>

                    {/* TODO: Have button return the appropriate result based on what was searched. */}
                    <Pressable
                        style={({ pressed }) => [
                            styles.button,
                            { backgroundColor: pressed ? '#7D34EB' : '#C3B1E1' }
                        ]}
                        onPress={() => Alert.alert('Search', 'You pressed the Search button.')}>
                        <Text style={styles.buttonText}>Search</Text>
                    </Pressable>
                </View>
            </View>
        </ParallaxScrollView>
    );
}

