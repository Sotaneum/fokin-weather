import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropType from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Thunderstorm: {
        iconName : "weather-lightning",
        gradient: ["#5C258D","#4389A2"],
        title: "Thunderstorm",
        subtitle: "Be careful of the sky."
    }, 
    Drizzle: {
        iconName : "weather-rainy",
        gradient: ["#4AC29A","#BDFFF3"],
        title: "Drizzle",
        subtitle: "You can get wet even if you use an umbrella."
    }, 
    Rain: {
        iconName : "weather-pouring",
        gradient: ["#141E30","#243B55"],
        title: "Rain",
        subtitle: "Take an umbrella with you."
    }, 
    Snow: {
        iconName : "weather-snowy",
        gradient: ["#BE93C5","#7BC6CC"],
        title: "Snow",
        subtitle: "Watch your step so as not to slip."
    }, 
    Atmosphere: {
        iconName : "weather-sunset",
        gradient: ["#005AA7","#FFFDE4"],
        title: "Atmosphere",
        subtitle: "Just stay away from the monitor and look at the distant mountain."
    }, 
    Clear: {
        iconName : "weather-sunny",
        gradient: ["#2980B9","#6DD5FA","#FFFFFF"],
        title: "Clear",
        subtitle: "The weather is so nice. Even if you have a lot of work to do, please look outside."
    }, 
    Clouds: {
        iconName : "weather-cloudy",
        gradient: ["#BE93C5","#7BC6CC"],
        title: "Clouds",
        subtitle: "The weather is not bad."
    },
    Mist: {
        iconName : "thumb-down",
        gradient: ["#BE93C5","#7BC6CC"],
        title: "Mist",
        subtitle: "Be careful ahead. It's not like you're looking at it."
    },
    Smoke: {
        iconName : "vanish",
        gradient: ["#bdc3c7","#2c3e50"],
        title: "Smoke",
        subtitle: "Wear a mask."
    },
    Haze: {
        iconName : "vanish",
        gradient: ["#BBD2C5","#536976","#292E49"],
        title: "Haze",
        subtitle: "Wear a mask."
    },
    Dust: {
        iconName : "vanish",
        gradient: ["#abbaab","#ffffff"],
        title: "Dust",
        subtitle: "Wear a mask."
    },
    Fog: {
        iconName : "weather-fog",
        gradient: ["#ADA996","#F2F2F2","#DBDBDB","#EAEAEA"],
        title: "Fog",
        subtitle: "Be careful ahead. It's not like you're looking at it."
    },
    Squall: {
        iconName : "weather-windy",
        gradient: ["#BE93C5","#7BC6CC"],
        title: "Squall",
        subtitle: "Be careful of falling from the sky."
    },
    Tornado: {
        iconName : "weather-hurricane",
        gradient: ["#000C40","#F0F2F0"],
        title: "Tornado",
        subtitle: "Be prepared. Let's see it alive."
    }
};

export default function Weather({ temp, condition }){
    return (
        <LinearGradient 
            colors={weatherOptions[condition].gradient} 
            style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName}
                    color="white"
                />
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.PropType = {
    temp: PropType.number.isRequired,
    condition: PropType.oneOf(
        [
            "Thunderstorm", 
            "Drizzle", 
            "Rain", 
            "Snow", 
            "Atmosphere", 
            "Clear", 
            "Clouds",
            "Mist",
            "Smoke",
            "Haze",
            "Dust",
            "Fog",
            "Sand",
            "Ash",
            "Squall",
            "Tornado"
        ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color:"white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color:"white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color:"white",
        fontWeight: "600",
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems:"flex-start"
    }
})