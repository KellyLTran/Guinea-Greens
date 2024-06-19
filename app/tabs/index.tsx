
// Import React library to use JSX syntax and component functionality.
import React from 'react';

// Import components and modules from React Native.
import {
    Image,
    Pressable,
    Text,
    Alert,
    View,
} from 'react-native';

// Import the application styles
import { styles } from './app_styles';

// Import elements from components directory given as part of the template.
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
    return (
        // Set header background color and set header image and position on homescreen. */}
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#4f7942', dark: '#A2D9A2' }}
            headerImage={
                <Image
                    source={require('@/assets/images/pigsTransparent.png')}
                    style={styles.gpLogo}
                />
            }>

            {/* Set the title to welcome the user to the app. */}
            <ThemedView style={styles.titleContainer}>
                <ThemedText
                    type='title'
                    lightColor='#4f7942'  // Light theme color
                    darkColor='#A2D9A2'  // Dark theme color
                    style={styles.titleText}>
                    Welcome to Guinea Greens!
                </ThemedText>
            </ThemedView>

            {/* Set the background color and buttons' color, style, and text. */}
            <View style={[styles.buttonContainer]}>
                {/* The pastel purple button turns dark purple and sends an alert when pressed for testing. */}
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: pressed ? '#7D34EB' : '#C3B1E1' }
                    ]}
                    onPress={() => Alert.alert('Search Button', 'You pressed the Search button.')}>
                    <Text style={styles.buttonText}>Search</Text>
                </Pressable>

                {/* TODO: Have buttons direct the user to the appropriate tab/page. */}
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: pressed ? '#7D34EB' : '#C3B1E1' }
                    ]}
                    onPress={() => Alert.alert('Schedule Button', 'You pressed the Schedule button.')}>
                    <Text style={styles.buttonText}>Schedule</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: pressed ? '#7D34EB' : '#C3B1E1' }
                    ]}
                    onPress={() => Alert.alert('Information Button', 'You pressed the Information button.')}>
                    <Text style={styles.buttonText}>Information</Text>
                </Pressable>
            </View>
        </ParallaxScrollView>
    );
}
