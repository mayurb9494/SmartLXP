import React from "react";
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from "react-native";
import { ProgressBar } from "react-native-paper"; // install if not available
import { Trophy, Star, Award } from "lucide-react-native";
import {Ionicons} from "@expo/vector-icons";
import {useRouter} from "expo-router";

const achievements = [
    {
        id: "1",
        title: "First Course Completed",
        description: "Successfully finished your first course 🎉",
        icon: Trophy,
        date: "Sep 20, 2025",
        achieved: true,
    },
    {
        id: "2",
        title: "Consistency Champ",
        description: "Completed lessons 7 days in a row 🔥",
        icon: Star,
        date: null,
        achieved: false,
        progress: 0.6,
    },
    {
        id: "3",
        title: "Top Scorer",
        description: "Scored above 90% in a quiz 🏆",
        icon: Award,
        date: "Sep 10, 2025",
        achieved: true,
    },
];

export default function Achievements() {
    const router = useRouter();
    const handleBack = () => {
      console.log("Back");
        router.back()
    }
    const renderItem = ({ item }) => {
        const Icon = item.icon;

        return (
            <View style={[styles.card, item.achieved ? styles.achieved : styles.locked]}>
                <View style={styles.iconWrapper}>
                    <Icon size={32} color={item.achieved ? "#fff" : "#aaa"} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.desc}>{item.description}</Text>
                    {item.achieved ? (
                        <Text style={styles.date}>Earned on {item.date}</Text>
                    ) : (
                        <>
                            <ProgressBar progress={item.progress} color="#FF9800" style={styles.progress} />
                            <Text style={styles.date}>{Math.round(item.progress * 100)}% completed</Text>
                        </>
                    )}
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerTop}>
                <TouchableOpacity onPress={() => handleBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Achivements</Text>
            </View>
            <View style={styles.container2}>

            {/* Profile header */}
            <View style={styles.header}>
                <Image
                    source={{ uri: "https://images.pexels.com/photos/7698743/pexels-photo-7698743.jpeg" }}
                    style={styles.avatar}
                />
                <View>
                    <Text style={styles.username}>Mayur Botre</Text>
                    <Text style={styles.level}>Level 5 Learner</Text>
                    <ProgressBar progress={0.75} color="#4CAF50" style={styles.levelBar} />
                </View>
            </View>

            {/* Achievements list */}
            <Text style={styles.sectionTitle}>Your Achievements</Text>
            <FlatList
                data={achievements}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F9FAFB", padding: 0 },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 16,
        paddingHorizontal: 16,
        backgroundColor: '#4CAF50',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
        marginBottom:30
    },
    container2: { flex: 1, backgroundColor: "#F9FAFB", padding: 16 },
    backButton: { marginRight: 16 },
    headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
    },
    avatar: { width: 60, height: 60, borderRadius: 30, marginRight: 16 },
    username: { fontSize: 18, fontWeight: "bold", color: "#333" },
    level: { fontSize: 14, color: "#666", marginTop: 4 },
    levelBar: { height: 6, borderRadius: 4, marginTop: 6 },
    sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#222" },
    list: { paddingBottom: 80 },
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    achieved: { borderLeftWidth: 6, borderLeftColor: "#4CAF50" },
    locked: { borderLeftWidth: 6, borderLeftColor: "#ccc", opacity: 0.7 },
    iconWrapper: {
        backgroundColor: "#4CAF50",
        padding: 12,
        borderRadius: 50,
        marginRight: 12,
    },
    content: { flex: 1 },
    title: { fontSize: 16, fontWeight: "600", color: "#333" },
    desc: { fontSize: 13, color: "#666", marginTop: 4 },
    date: { fontSize: 12, color: "#999", marginTop: 6 },
    progress: { height: 6, borderRadius: 4, marginTop: 6 },
});
