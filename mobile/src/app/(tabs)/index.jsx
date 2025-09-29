import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { LinearGradient } from "expo-linear-gradient";
import { 
  Bell, 
  Play, 
  BookOpen, 
  Clock, 
  Trophy, 
  TrendingUp,
  ChevronRight,
  Target,
  Calendar
} from 'lucide-react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingTop: insets.top,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 16,
    },
    headerLeft: {
      flex: 1,
    },
    greeting: {
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      color: '#666666',
    },
    userName: {
      fontFamily: 'Inter_700Bold',
      fontSize: 24,
      color: '#1A1A1A',
      marginTop: 2,
    },
    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    notificationButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#F5F5F5',
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: 20,
      paddingBottom: insets.bottom + 20,
    },
    section: {
      marginBottom: 24,
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    sectionTitle: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
      color: '#1A1A1A',
    },
    seeAllButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    seeAllText: {
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      color: "#3B82F6",//'#FF6400',
      marginRight: 4,
    },
    progressCard: {
    //  backgroundColor:  '#FF6400',
      borderRadius: 16,
      padding: 0,
      marginBottom: 16,

    },
      progressCardLin:{
          borderRadius: 16,
          padding: 20,
          margin: 0,

      },
    progressHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    progressTitle: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16,
      color: '#FFFFFF',
    },
    progressPercentage: {
      fontFamily: 'Inter_700Bold',
      fontSize: 18,
      color: '#FFFFFF',
    },
    progressBar: {
      height: 8,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 4,
      marginBottom: 12,
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#FFFFFF',
      borderRadius: 4,
      width: '62%',
    },
    progressText: {
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      color: 'rgba(255, 255, 255, 0.9)',
    },
    statsRow: {
      flexDirection: 'row',
      gap: 12,
      marginBottom: 16,
    },
    statCard: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      borderRadius: 12,
      padding: 16,
      alignItems: 'center',
    },
    statIcon: {
      width: 32,
      height: 32,
      borderRadius: 16,
   //   backgroundColor: '#FF6400',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
    },
    statValue: {
      fontFamily: 'Inter_700Bold',
      fontSize: 18,
      color: '#1A1A1A',
      marginBottom: 2,
    },
    statLabel: {
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      color: '#666666',
      textAlign: 'center',
    },
    courseCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
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
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: '#E74433',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    courseInfo: {
      flex: 1,
    },
    courseTitle: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16,
      color: '#1A1A1A',
      marginBottom: 2,
    },
    courseSubtitle: {
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      color: '#666666',
    },
    courseProgress: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 8,
    },
    courseProgressBar: {
      flex: 1,
      height: 6,
      backgroundColor: '#F5F5F5',
      borderRadius: 3,
      marginRight: 12,
    },
    courseProgressFill: {
      height: '100%',
      backgroundColor: '#E74433',
      borderRadius: 3,
      width: '45%',
    },
    courseProgressText: {
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      color: '#666666',
    },
    continueButton: {
      backgroundColor: '#3B82F6',//'#FF6400',
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 16,
      alignSelf: 'flex-start',
      marginTop: 8,
    },
    continueButtonText: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 12,
      color: '#FFFFFF',
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.greeting}>Good morning,</Text>
          <Text style={styles.userName}>Mayur</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={20} color="#666666" />
          </TouchableOpacity>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/7698743/pexels-photo-7698743.jpeg',
            }}
            style={styles.avatar}
            contentFit="cover"
          />
        </View>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Progress Overview */}
        <View style={styles.section}>

          <View style={styles.progressCard}>
              <LinearGradient
                  colors={["#6EE7B7", "#3B82F6"]} // gradient from course color → white
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.progressCardLin}
              >
            <View style={styles.progressHeader}>
              <Text style={styles.progressTitle}>Weekly Progress</Text>
              <Text style={styles.progressPercentage}>62%</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
            <Text style={styles.progressText}>
              Great job! You've completed 4 out of 6 lessons this week.
            </Text>
              </LinearGradient>
          </View>

        </View>

        {/* Quick Stats */}
        <View style={styles.section}>
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
                <LinearGradient
                    colors={["#6366F1", "#8B5CF6"]} // gradient from course color → white
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.statIcon}
                >
                <Target size={16} color="#FFFFFF" />
                    </LinearGradient>

              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Day Streak</Text>
            </View>
            <View style={styles.statCard}>

                  <LinearGradient
                      colors={["#6EE7B7", "#3B82F6"]} // gradient from course color → white
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.statIcon}
                  >
                <Trophy size={16} color="#FFFFFF" />
                  </LinearGradient>

              <Text style={styles.statValue}>85</Text>
              <Text style={styles.statLabel}>Achievements</Text>
            </View>
            <View style={styles.statCard}>
                <LinearGradient
                    colors={["#34D399", "#10B981"]} // gradient from course color → white
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.statIcon}
                >
                <Clock size={16} color="#FFFFFF" />
                </LinearGradient>
              <Text style={styles.statValue}>24h</Text>
              <Text style={styles.statLabel}>This Week</Text>
            </View>
          </View>
        </View>

        {/* Continue Learning */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Continue Learning</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See all</Text>
              <ChevronRight size={16} color="#3B82F6" />
            </TouchableOpacity>
          </View>

          <View style={styles.courseCard}>
            <View style={styles.courseHeader}>
              <View style={[styles.courseIcon,{backgroundColor: "#3B82F6"}]}>
                <BookOpen size={20} color="#FFFFFF" />
              </View>
              <View style={styles.courseInfo}>
                <Text style={styles.courseTitle}>JavaScript Fundamentals</Text>
                <Text style={styles.courseSubtitle}>Module 3: Functions & Scope</Text>
              </View>
            </View>
            <View style={styles.courseProgress}>
              <View style={styles.courseProgressBar}>
                <View style={[styles.courseProgressFill, { width: '20%', backgroundColor: "#3B82F6" }]} />
              </View>
              <Text style={styles.courseProgressText}>45% complete</Text>
            </View>
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.courseCard}>
            <View style={styles.courseHeader}>
              <View style={[styles.courseIcon, { backgroundColor: "#6EE7B7" }]}>
                <Play size={20} color="#FFFFFF" />
              </View>
              <View style={styles.courseInfo}>
                <Text style={styles.courseTitle}>React Native Basics</Text>
                <Text style={styles.courseSubtitle}>Module 1: Getting Started</Text>
              </View>
            </View>
            <View style={styles.courseProgress}>
              <View style={styles.courseProgressBar}>
                <View style={[styles.courseProgressFill, { width: '20%', backgroundColor: "#6EE7B7" }]} />
              </View>
              <Text style={styles.courseProgressText}>20% complete</Text>
            </View>
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recommended Courses */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommended for You</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See all</Text>
              <ChevronRight size={16} color="#FF6400" />
            </TouchableOpacity>
          </View>

          <View style={styles.courseCard}>
            <View style={styles.courseHeader}>
              <View style={[styles.courseIcon, { backgroundColor: "#3B82F6"}]}>
                <TrendingUp size={20} color="#FFFFFF" />
              </View>
              <View style={styles.courseInfo}>
                <Text style={styles.courseTitle}>Advanced Data Structures</Text>
                <Text style={styles.courseSubtitle}>Intermediate • 8 modules</Text>
              </View>
            </View>
            <TouchableOpacity style={[styles.continueButton, { backgroundColor: '#F5F5F5' }]}>
              <Text style={[styles.continueButtonText, { color: '#1A1A1A' }]}>Start Course</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}