import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Target, Trophy, Clock, TrendingUp, Calendar, Star } from 'lucide-react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import {LinearGradient} from "expo-linear-gradient";

export default function ProgressScreen() {
  const insets = useSafeAreaInsets();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const weeklyData = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 1.8 },
    { day: 'Wed', hours: 3.2 },
    { day: 'Thu', hours: 2.1 },
    { day: 'Fri', hours: 4.0 },
    { day: 'Sat', hours: 1.5 },
    { day: 'Sun', hours: 2.8 },
  ];

  const achievements = [
    { id: 1, title: 'First Course', description: 'Completed your first course', color:'#a72a5c'},// '#FF6400' },
    { id: 2, title: '7-Day Streak', description: 'Learned for 7 days in a row', color: '#17E19D' },
    { id: 3, title: 'Speed Learner', description: 'Completed 3 lessons in one day', color: '#D9C5FF' },
  ];

  const maxHours = Math.max(...weeklyData.map(d => d.hours));

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
    section: {
      marginBottom: 24,
    },
    sectionTitle: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
      color: '#1A1A1A',
      marginBottom: 16,
    },
    statsCard: {
      backgroundColor: '#a72a5c',//'#FF6400',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
    },
    statsHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    statsTitle: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16,
      color: '#FFFFFF',
    },
    statsValue: {
      fontFamily: 'Inter_700Bold',
      fontSize: 24,
      color: '#FFFFFF',
    },
    statsRow: {
      flexDirection: 'row',
      gap: 12,
    },
    statItem: {
      flex: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 12,
      padding: 12,
      alignItems: 'center',
    },
    statIcon: {
      marginBottom: 8,
    },
    statItemValue: {
      fontFamily: 'Inter_700Bold',
      fontSize: 18,
      color: '#FFFFFF',
      marginBottom: 2,
    },
    statItemLabel: {
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      color: 'rgba(255, 255, 255, 0.9)',
      textAlign: 'center',
    },
    chartCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      padding: 20,
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
    chartContainer: {
      flexDirection: 'row',
      alignItems: 'end',
      justifyContent: 'space-between',
      height: 120,
      marginBottom: 12,
    },
    chartBar: {
      backgroundColor: '#3B82F6',//'#FF6400',
      borderRadius: 4,
      minHeight: 8,
      width: 32,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: 4,
    },
    chartBarToday: {
      backgroundColor: '#17E19D',
    },
    barValue: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 10,
      color: '#FFFFFF',
    },
    chartLabels: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    chartLabel: {
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      color: '#666666',
      width: 32,
      textAlign: 'center',
    },
    chartLabelToday: {
      color: '#17E19D',
      fontFamily: 'Inter_600SemiBold',
    },
    achievementCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: '#E5E5E5',
      flexDirection: 'row',
      alignItems: 'center',
    },
    achievementIcon: {
      width: 48,
      height: 48,
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
    achievementInfo: {
      flex: 1,
    },
    achievementTitle: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16,
      color: '#1A1A1A',
      marginBottom: 2,
    },
    achievementDescription: {
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      color: '#666666',
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Progress</Text>
        <Text style={styles.subtitle}>Track your learning journey</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Overall Stats */}
        <View style={styles.section}>
            <LinearGradient
                colors={["#6EE7B7", "#3B82F6"]} // gradient from course color → white
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.statsCard}
            >
            <View style={styles.statsHeader}>
              <Text style={styles.statsTitle}>This Week</Text>
              <Text style={styles.statsValue}>18.9h</Text>
            </View>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Target size={20} color="#FFFFFF" style={styles.statIcon} />
                <Text style={styles.statItemValue}>12</Text>
                <Text style={styles.statItemLabel}>Day Streak</Text>
              </View>
              <View style={styles.statItem}>
                <Trophy size={20} color="#FFFFFF" style={styles.statIcon} />
                <Text style={styles.statItemValue}>85</Text>
                <Text style={styles.statItemLabel}>Achievements</Text>
              </View>
              <View style={styles.statItem}>
                <TrendingUp size={20} color="#FFFFFF" style={styles.statIcon} />
                <Text style={styles.statItemValue}>62%</Text>
                <Text style={styles.statItemLabel}>Completion</Text>
              </View>
            </View>
            </LinearGradient>
        </View>

        {/* Weekly Chart */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Weekly Activity</Text>
          <View style={styles.chartCard}>
            <View style={styles.chartContainer}>
              {weeklyData.map((data, index) => (
                <View
                  key={data.day}
                  style={[
                    styles.chartBar,
                    index === 4 && styles.chartBarToday, // Friday is today
                    {
                      height: Math.max((data.hours / maxHours) * 100, 8),
                    },
                  ]}
                >

                  <Text style={styles.barValue}>{data.hours}h</Text>
                </View>
              ))}

          </View>
            <View style={styles.chartLabels}>
              {weeklyData.map((data, index) => (
                <Text
                  key={data.day}
                  style={[
                    styles.chartLabel,
                    index === 4 && styles.chartLabelToday, // Friday is today
                  ]}
                >
                  {data.day}
                </Text>
              ))}
            </View>
          </View>
        </View>

        {/* Recent Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Achievements</Text>
          {achievements.map((achievement) => (
            <View key={achievement.id} style={styles.achievementCard}>
              <View style={[styles.achievementIcon, { backgroundColor: achievement.color }]}>
                <Star size={20} color="#FFFFFF" />
              </View>
              <View style={styles.achievementInfo}>
                <Text style={styles.achievementTitle}>{achievement.title}</Text>
                <Text style={styles.achievementDescription}>{achievement.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}