import React from 'react';
import {
    Image,
    TextInput,
} from 'react-native';
import { styles } from './app_styles';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ScheduleScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#4f7942', dark: '#A2D9A2' }}
            headerImage={
                <Image
                    source={require('@/assets/images/pigsTransparent.png')}
                    style={styles.gpLogo}
                />
            }>
            {/* Set the title to represent the feeding schedule tab of the app. */}
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title" style={styles.titleText}>Feeding Schedule</ThemedText>
            </ThemedView>

            {/* Citation: https://reactnative.dev/docs/textinput */}
            {/* TODO: Make the schedule more chronological and detailed. */}
            {/* Handle user input for their feeding schedule and food tracking. */}
            <TextInput
                placeholder="Feeding Time 1"
                style={styles.headerText}
                placeholderTextColor="#A2D9A2"
                selectionColor="#A2D9A2"
            />
            <TextInput
                placeholder="Feeding Time 2"
                style={styles.headerText}
                placeholderTextColor="#A2D9A2"
                selectionColor="#A2D9A2"
            />
            <TextInput
                placeholder="Pellets"
                style={styles.headerText}
                placeholderTextColor="#A2D9A2"
                selectionColor="#A2D9A2"
            />
            <TextInput
                placeholder="Hay"
                style={styles.headerText}
                placeholderTextColor="#A2D9A2"
                selectionColor="#A2D9A2"
            />
            <TextInput
                placeholder="Greens"
                style={styles.headerText}
                placeholderTextColor="#A2D9A2"
                selectionColor="#A2D9A2"
            />
            <TextInput
                placeholder="Fruit"
                style={styles.headerText}
                placeholderTextColor="#A2D9A2"
                selectionColor="#A2D9A2"
            />
        </ParallaxScrollView>
    );
}
