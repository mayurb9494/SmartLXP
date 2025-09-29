import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { 
  Settings, 
  Bell, 
  BookOpen, 
  Award, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Edit
} from 'lucide-react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { router } from 'expo-router';
import {LinearGradient} from "expo-linear-gradient";

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const handleLogout = () => {
    router.replace('/login');
  };
const handleMenu = (item) =>{
    console.log(" item  ==  ", item);
    switch (item.id) {
        case 1 :
            break;
        case 2 :
            router.push(`/achievements`);
            break;
            case 3 :
                router.push(`/notifications`);
            break;
                case 4 :
                    break;
                    case 5 :
                        break;
    }
};
  if (!fontsLoaded) {
    return null;
  }

  const menuItems = [
    {
      id: 1,
      title: 'Learning Preferences',
      icon: BookOpen,
      color: '#3B82F6',//'#FF6400',
    },
    {
      id: 2,
      title: 'Achievements',
      icon: Award,
      color: '#17E19D',
    },
    {
      id: 3,
      title: 'Notifications',
      icon: Bell,
      color: '#3B82F6',
    },
    {
      id: 4,
      title: 'Settings',
      icon: Settings,
      color: '#666666',
    },
    {
      id: 5,
      title: 'Help & Support',
      icon: HelpCircle,
      color: '#666666',
    },
  ];

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
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: 20,
      paddingBottom: insets.bottom + 20,
    },
    profileSection: {
      alignItems: 'center',
      marginBottom: 32,
    },
    avatarContainer: {
      position: 'relative',
      marginBottom: 16,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    editButton: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 32,
      height: 32,
      borderRadius: 16,
    //  backgroundColor: '#a72a5c',//'#FF6400',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 3,
      borderColor: '#FFFFFF',
    },
    userName: {
      fontFamily: 'Inter_700Bold',
      fontSize: 24,
      color: '#1A1A1A',
      marginBottom: 4,
    },
    userEmail: {
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      color: '#666666',
      marginBottom: 16,
    },
    statsRow: {
      flexDirection: 'row',
      backgroundColor: '#F5F5F5',
      borderRadius: 16,
      padding: 20,
      gap: 20,
    },
    statItem: {
      flex: 1,
      alignItems: 'center',
    },
    statValue: {
      fontFamily: 'Inter_700Bold',
      fontSize: 20,
      color: '#1A1A1A',
      marginBottom: 4,
    },
    statLabel: {
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      color: '#666666',
      textAlign: 'center',
    },
    menuSection: {
      marginTop: 24,
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      padding: 16,
      marginBottom: 8,
      borderWidth: 1,
      borderColor: '#E5E5E5',
    },
    menuIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#F5F5F5',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
    menuText: {
      flex: 1,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16,
      color: '#1A1A1A',
    },
    logoutButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF5F5',
      borderRadius: 12,
      padding: 16,
      marginTop: 24,
      borderWidth: 1,
      borderColor: '#FFE5E5',
    },
    logoutIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#FFE5E5',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
    logoutText: {
      flex: 1,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16,
      color: '#a72a5c',//'#FF4444',
    },
      versionText:{
        fontFamily: 'Inter_600Thin',
          color: 'grey',
          fontSize: 12,
          alignItems: 'center',
          textAlign:'center',
          paddingTop:30,
          paddingBottom: 0
      }
  });

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Profile Info */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/7698743/pexels-photo-7698743.jpeg',
              }}
              style={styles.avatar}
              contentFit="cover"
            />
            <TouchableOpacity style={styles.editButton}>
                <LinearGradient
                    colors={["#6EE7B7", "#3B82F6"] } // gradient from course color → white
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.editButton}
                >
              <Edit size={16} color="#FFFFFF" />
                    </LinearGradient>
            </TouchableOpacity>
          </View>
          
          <Text style={styles.userName}>Mayur Botre</Text>
          <Text style={styles.userEmail}>mayur.botre@invince.com</Text>
          
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Courses Completed</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>156h</Text>
              <Text style={styles.statLabel}>Learning Time</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>85</Text>
              <Text style={styles.statLabel}>Achievements</Text>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem} onPress= {() => handleMenu(item)}>
              <View style={styles.menuIcon}>
                <item.icon size={20} color={item.color} />
              </View>
              <Text style={styles.menuText}>{item.title}</Text>
              <ChevronRight size={20} color="#CCCCCC" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <View style={styles.logoutIcon}>
            <LogOut size={20} color="#FF4444" />
          </View>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
          <Text style={styles.versionText}>v1.0.0</Text>
      </ScrollView>
    </View>
  );
}