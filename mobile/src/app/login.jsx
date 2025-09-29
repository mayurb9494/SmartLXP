import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import {Image} from "expo-image";
import {LinearGradient} from "expo-linear-gradient";

export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  const handleLogin = useCallback(async () => {
    if (!email.trim() || !password.trim() ) {
 //     Alert.alert('Error', 'Please fill in all fields');
   //   return;
    }

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple validation for demo
      if (email.includes('@') && password.length >= 2 || true) {
     router.replace('/(tabs)');
  // router.replace('/courses')
      } else {
        Alert.alert('Login Failed', 'Invalid email or password');
      }
    } catch (error) {
      Alert.alert('Error', 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [email, password]);

  if (!fontsLoaded) {
    return null;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingTop: insets.top,
    },
    content: {
      flex: 1,
      paddingHorizontal: 24,
      justifyContent: 'center',
    },
    logo: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#a72a5c',//'#FF6400',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: 32,
    },
    logoText: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 20,
      color: '#FFFFFF',
        textAlign: 'center',
        truncate: ' '


    },
    title: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 28,
      color: '#1A1A1A',
      textAlign: 'center',
      marginBottom: 8,
    },
    subtitle: {
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      color: '#666666',
      textAlign: 'center',
      marginBottom: 40,
    },
    inputContainer: {
      marginBottom: 16,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 16,
      borderWidth: 1,
      borderColor: '#E5E5E5',
    },
    inputWrapperFocused: {
      borderColor: '#a72a5c',//'#FF6400',
      backgroundColor: '#FFFFFF',
    },
    inputIcon: {
      marginRight: 12,
    },
    input: {
      flex: 1,
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      color: '#1A1A1A',
    },
    eyeIcon: {
      padding: 4,
    },
    loginButton: {
      backgroundColor: '#3B82F6',//'#FF6400',
      borderRadius: 12,
      paddingVertical: 16,
      alignItems: 'center',
      marginTop: 24,

    },
    loginButtonDisabled: {
      backgroundColor: '#3B82F6',//'#FFB380',
    },
    loginButtonText: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16,
      color: '#FFFFFF',
    },
      imageCircle:{
         // borderColor: '#FF6400',
          width: 160,
          height: 160,
          borderRadius: 80,
          marginBottom: -140,
          marginTop:50,
          alignItems: 'center',
          alignSelf: 'center',
       //   borderWidth: 2,
          shadowColor: 'black',
         // shadowOffset: { width: 1, height: 1 },
          shadowRadius: 5,
          shadowOpacity: 0.3,
          //backgroundColor: '#fff10%',
          //backgroundOpacity: 0.1,
      },
      topImage: {
          borderColor: '#FF6400',
          width: 140,
          height: 140,

        //  marginBottom: -0,
          marginLeft:-15,
          marginTop:20,
          alignItems: 'center',
          alignSelf: 'center',
shadowColor: 'black',
          //shadowOffset: { width: 0, height: 1 },
          shadowRadius: 3,
          shadowOpacity: 0.4,

      },
    forgotPassword: {
      marginTop: 16,
      alignItems: 'center',
    },
    forgotPasswordText: {
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      color: '#a72a5c'//'#FF6400',
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.imageCircle}>
        <Image source={require("./ap-icon.png")} style={styles.topImage}   contentFit= "scale-down" />
      </View>
      <View style={styles.content}>
        {/*<View style={styles.logo}>*/}
        {/*  <Text style={styles.logoText}>UPSIDE LXP</Text>*/}
        {/*</View>*/}
        
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue your learning journey</Text>
        
        <View style={styles.inputContainer}>
          <View style={[styles.inputWrapper, email && styles.inputWrapperFocused]}>
            <Mail size={20} color="#666666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor="#999999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
          </View>
        </View>
        
        <View style={styles.inputContainer}>
          <View style={[styles.inputWrapper, password && styles.inputWrapperFocused]}>
            <Lock size={20} color="#666666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoComplete="password"
            />
            <TouchableOpacity 
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={20} color="#666666" />
              ) : (
                <Eye size={20} color="#666666" />
              )}
            </TouchableOpacity>
          </View>
        </View>
          <TouchableOpacity

              onPress={handleLogin}
              disabled={loading}
          >
          <LinearGradient
              colors={loading ? ["#3B82F6","#6EE7B7"] : ["#6EE7B7", "#3B82F6"] } // gradient from course color → white
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles.loginButton, loading && styles.loginButtonDisabled]}
          >

          <Text style={styles.loginButtonText}>
            {loading ? 'Signing In...' : 'Sign In'}
          </Text>


      </LinearGradient>
      </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}