
import React from 'react';
import {
    Image,
    Pressable,
    Text,
    Alert,
    View,
} from 'react-native';
import { styles } from './app_styles';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function InformationScreen() {
    return (
        // Set header background color based on light or dark theme, and set header image and position on homescreen. */}
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#4f7942', dark: '#A2D9A2' }}
            headerImage={
                <Image
                    source={require('@/assets/images/pigsTransparent.png')}
                    style={styles.gpLogo}
                />
            }>

            {/* Set the title to represent the information tab of the app. */}
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title" style={styles.titleText}>Learn More About Guinea Pigs</ThemedText>
            </ThemedView>

            {/* Set the background color and buttons' color, style, and text. */}
            <View style={[styles.buttonContainer]}>

                {/* TODO: Have buttons display appropriate information from the database. */}
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: pressed ? '#7D34EB' : '#C3B1E1' }
                    ]}
                    onPress={() => Alert.alert('Guinea Pig Diet', 'You pressed the Guinea Pig Diet button.')}>
                    <Text style={styles.buttonText}>Guinea Pig Diet</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: pressed ? '#7D34EB' : '#C3B1E1' }
                    ]}
                    onPress={() => Alert.alert('Guinea Pig Hygiene', 'You pressed the Guinea Pig Hygiene button.')}>
                    <Text style={styles.buttonText}>Guinea Pig Hygiene</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: pressed ? '#7D34EB' : '#C3B1E1' }
                    ]}
                    onPress={() => Alert.alert('Fun Guinea Pig Facts', 'You pressed the Fun Guinea Pig Facts button.')}>
                    <Text style={styles.buttonText}>Fun Guinea Pig Facts</Text>
                </Pressable>
            </View>
        </ParallaxScrollView>
    );
}