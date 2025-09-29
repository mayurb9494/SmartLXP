import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {useLocalSearchParams} from "expo-router";
import { useRouter } from 'expo-router';
export default function CourseDetails()
{
     const { course, id } = useLocalSearchParams();
    const router = useRouter();
    let courseObj = null;

    try {
        if (course) courseObj = JSON.parse(decodeURIComponent(course));
    } catch (e) {
        console.log("Failed to parse course", e);
    }

    if (!courseObj) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Course not found</Text>
            </View>
        );
    }
    return (
        <View style={styles.screen}>
            {/* Top Bar */}
            <View style={[styles.header, { backgroundColor: courseObj.color }]} >
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Course Details</Text>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
                {/* Top Card */}
                <View style={[styles.card, { borderLeftColor: courseObj.color }]}>
                    {/* Icon */}

                        <View style={styles.iconWrapper}>
                            <Ionicons name="book" size={24} color= {courseObj.color} />

                        </View>


                    <Text style={styles.courseTitle}>{courseObj.title}</Text>
                    <Text style={styles.courseDescription}>{courseObj.description}</Text>

                    {/* Details Row */}
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailText}>Duration: {courseObj.duration}</Text>
                        <Text style={styles.detailText}>Students: {courseObj.students}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailText}>Rating: {courseObj.rating}</Text>
                        <Text style={styles.detailText}>Progress: {courseObj.progress}%</Text>
                    </View>

                    {/* Progress Bar */}
                    <View style={styles.progressContainer}>
                        <View
                            style={[
                                styles.progressBar,
                                { width: `${courseObj.progress}%`, backgroundColor: courseObj.color },
                            ]}
                        />
                    </View>
                </View>

                {/* Additional Details Below Card */}
                <View style={styles.detailsSection}>
                    <Text style={styles.sectionTitle}>Course Syllabus</Text>
                    <Text style={styles.sectionText}>
                        - Module 1: Introduction{"\n"}
                        - Module 2: Basic Concepts{"\n"}
                        - Module 3: Advanced Techniques{"\n"}
                        - Module 4: Project Implementation{"\n"}
                        - Module 5: Testing & Optimization
                    </Text>

                    <Text style={styles.sectionTitle}>Learning Outcomes</Text>
                    <Text style={styles.sectionText}>
                        After completing this course, you will be able to:{"\n"}
                        - Build advanced data structures and algorithms{"\n"}
                        - Implement scalable iOS applications{"\n"}
                        - Optimize app performance{"\n"}
                        - Read and write clean, maintainable code
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#F2F3F7'},

    // Top Bar
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 16,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,

        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
        marginBottom:30
    },
    backButton: { marginRight: 16 },
    headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff' },

    // Course Card
    card: {
        backgroundColor: '#fff',
        marginTop:20,
        margin: 16,
        padding: 30,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 5,
        borderLeftWidth: 6,
    },

    iconWrapper: {
        position: 'absolute',
        top: -20,
        right: 20,
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },

    courseTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 8, color: '#333' },
    courseDescription: { fontSize: 16, color: '#666', marginBottom: 16 },

    detailsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
    detailText: { fontSize: 14, color: '#444' },

    progressContainer: {
        width: '100%',
        height: 12,
        backgroundColor: '#E0E0E0',
        borderRadius: 6,
        overflow: 'hidden',
        marginTop: 16,
    },
    progressBar: { height: '100%', borderRadius: 6 },
    // Additional Details Section
    detailsSection: {
        marginHorizontal: 16,
        marginTop: 16,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: '#333',marginTop:10 },
    sectionText: { fontSize: 14, color: '#555', lineHeight: 22 },

    // Fallback container
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 18, fontWeight: 'bold', color: 'black' },
});
