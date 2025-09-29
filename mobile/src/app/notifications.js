import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Bell, BookOpen, Award } from "lucide-react-native";
import {Ionicons} from "@expo/vector-icons";
import {useRouter} from "expo-router";

const initialNotifications = [
    {
        id: "1",
        title: "New Course Available",
        message: "A new course on AI & Machine Learning has been added.",
        time: "2h ago",
        icon: BookOpen,
        read: false,
    },
    {
        id: "2",
        title: "Achievement Unlocked",
        message: "Congrats! You completed 5 lessons in a row 🎉",
        time: "Yesterday",
        icon: Award,
        read: true,
    },
    {
        id: "3",
        title: "Reminder",
        message: "Don't forget to finish your Data Structures course.",
        time: "2 days ago",
        icon: Bell,
        read: false,
    },
];

export default function NotificationsScreen() {
    const [notifications, setNotifications] = useState(initialNotifications);
const router = useRouter();
    const markAllAsRead = () => {
        const updated = notifications.map((n) => ({ ...n, read: true }));
        setNotifications(updated);
    };

    const renderItem = ({ item }) => {
        const Icon = item.icon;
        return (
            <View style={[styles.card, !item.read && styles.unread]}>
                <View style={[styles.iconWrapper, item.read && styles.iconRead]}>
                    <Icon size={24} color={item.read ? "#666" : "white"} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.message}>{item.message}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerTop}>

            </View>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { textalignment: 'left' } ]}>Notifications</Text>
                <TouchableOpacity onPress={markAllAsRead} style={styles.markAllButton}>
                    <Text style={styles.markAllText}>Mark all as read</Text>
                </TouchableOpacity>
            </View>

            {/* Notifications List */}
            <FlatList
                data={notifications}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F9FAFB",paddingTop: 0 },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 0,
        paddingBottom: 16,
        paddingHorizontal: 16,

        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
        marginBottom:0,
        backgroundColor: "#D9C5FF",
height: '5%',
    },
    backButton: { marginRight: -60 },

    header: {
        backgroundColor: "#D9C5FF",
        padding: 16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerTitle: { fontSize: 20, fontWeight: "bold", color: "black" ,alignItems:'flex-start',justifyContent:'flex-start',textAlign:'left'},

    markAllButton: {
        backgroundColor: "#fff",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    markAllText: { fontSize: 12, fontWeight: "600", color: "black" },

    list: { padding: 16 },

    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    unread: {
        borderLeftWidth: 6,
        borderLeftColor: "#D9C5FF",
    },
    iconWrapper: {
        backgroundColor: "#D9C5FF",
        padding: 10,
        borderRadius: 30,
        marginRight: 12,
    },
    iconRead: { backgroundColor: "#E0E0E0" },
    content: { flex: 1 },
    title: { fontSize: 16, fontWeight: "600", color: "#333" },
    message: { fontSize: 14, color: "#666", marginTop: 4 },
    time: { fontSize: 12, color: "#999", marginTop: 8 },
});
