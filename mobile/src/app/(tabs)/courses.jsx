import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BookOpen, Play, Clock, Users, Star } from 'lucide-react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import {router} from "expo-router";
import {LinearGradient} from "expo-linear-gradient";

export default function CoursesScreen() {
  const insets = useSafeAreaInsets();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const courses = [
      {
          id: 5,
          title: 'Advanced Data Structures',
          description: 'Master complex data structures and algorithms',
          duration: '16 hours',
          students: '1.2k',
          rating: '4.9',
          progress: 15,
          color: '#3B82F6',//'#FF5B2E',
          icon: BookOpen,
      },
      {

          id: 1,
          title: 'UI/UX Design Principles',
          description: 'Create beautiful and functional user interfaces',
          duration: '10 hours',
          students: '3.1k',
          rating: '4.6',
          progress: 2,
          color: '#10B981',
          icon: Play,
      },
      {
          id: 2,
          title: 'iOS Applications Developers',
          description: 'Create beautiful and functional user interfaces',
          duration: '50 hours',
          students: '100.1k',
          rating: '5.0',
          progress: 70,
          color: '#D97706',
          icon: BookOpen,
      },
    {

      id: 3,
      title: 'JavaScript Fundamentals',
      description: 'Learn the basics of JavaScript programming',
      duration: '12 hours',
      students: '2.5k',
      rating: '4.8',
      progress: 0,
      color: '#E78833',
      icon: BookOpen,
    },
    {
      id: 4,
      title: 'React Native Basics',
      description: 'Build mobile apps with React Native',
      duration: '8 hours',
      students: '1.8k',
      rating: '4.7',
      progress: 0,
      color: '#D9C5FF',
      icon: Play,
    },

  ];
    const handleItemPress = (course) => {
        console.log(course);
        const courseStr = encodeURIComponent(JSON.stringify(course));
        router.push(`/CourseDetails?course=${courseStr}`);
        // router.push({
        //     pathname: "/CourseDetails",
        //     params: { course, id: 123 },
        // });
        // navigation.push('CourseDetails', { courseId: course.id })

    }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingTop: insets.top,
    },
    header: {
      paddingHorizontal: 20,
      paddingVertical: 16,
    },
    title: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 28,
      color: '#1A1A1A',
    },
    subtitle: {
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      color: '#666666',
      marginTop: 4,
    },
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: 20,
      paddingBottom: insets.bottom + 20,
    },
    courseCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#E5E5E5',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    courseHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    courseIcon: {
      width: 56,
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
    courseInfo: {
      flex: 1,
    },
    courseTitle: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
      color: '#1A1A1A',
      marginBottom: 4,
    },
    courseDescription: {
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      color: '#666666',
      lineHeight: 20,
    },
    courseStats: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
      gap: 16,
    },
    statItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statText: {
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      color: '#666666',
      marginLeft: 4,
    },
    progressSection: {
      marginBottom: 16,
    },
    progressHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    progressLabel: {
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      color: '#666666',
    },
    progressPercentage: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 14,
      color: '#1A1A1A',
    },
    progressBar: {
      height: 8,
      backgroundColor: '#F5F5F5',
      borderRadius: 4,
    },
    progressFill: {
      height: '100%',
      borderRadius: 4,
    },
    actionButton: {
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 20,
      alignItems: 'center',
    },
    continueButton: {
      backgroundColor: '#3B82F6',//'#FF6400',
    },
    startButton: {
      backgroundColor: '#F5F5F5',
      borderWidth: 1,
      borderColor: '#E5E5E5',
    },
    buttonText: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 14,
    },
    continueButtonText: {
      color: '#FFFFFF',
    },
    startButtonText: {
      color: '#1A1A1A',
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Courses</Text>
        <Text style={styles.subtitle}>Continue your learning journey</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {courses.map((course) => (
          <View key={course.id} style={styles.courseCard}>

            <View style={styles.courseHeader}>
              <View style={[styles.courseIcon, { backgroundColor: course.color }]}>
                <course.icon size={24} color="#FFFFFF" />
              </View>
              <View style={styles.courseInfo}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseDescription}>{course.description}</Text>
              </View>
            </View>

            <View style={styles.courseStats}>
              <View style={styles.statItem}>
                <Clock size={14} color="#666666" />
                <Text style={styles.statText}>{course.duration}</Text>
              </View>
              <View style={styles.statItem}>
                <Users size={14} color="#666666" />
                <Text style={styles.statText}>{course.students} students</Text>
              </View>
              <View style={styles.statItem}>
                <Star size={14} color="#FFD700" />
                <Text style={styles.statText}>{course.rating}</Text>
              </View>
            </View>

            {course.progress > 0 && (
              <View style={styles.progressSection}>
                <View style={styles.progressHeader}>
                  <Text style={styles.progressLabel}>Progress</Text>
                  <Text style={styles.progressPercentage}>{course.progress}%</Text>
                </View>
                <View style={styles.progressBar}>
                  <View 
                    style={[
                      styles.progressFill, 
                      { 
                        width: `${course.progress}%`,
                        backgroundColor: course.color
                      }
                    ]} 
                  />
                </View>
              </View>
            )}

            <TouchableOpacity 
              style={[
           //     styles.actionButton,
             //   course.progress > 0 ? styles.continueButton : styles.startButton
              ]}
              onPress={() => handleItemPress(course)}
            >
                <LinearGradient
                    colors={course.progress > 0 ? ["#6EE7B7", "#3B82F6"] : ["#F5F5F5","#F5F5F5"]} // gradient from course color → white
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={[
                           styles.actionButton, course.progress > 0 ? styles.continueButton : styles.startButton
                    ]}
                >
              <Text 
                style={[
                  styles.buttonText,
                  course.progress > 0 ? styles.continueButtonText : styles.startButtonText
                ]}
              >
                {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
              </Text>
                </LinearGradient>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}