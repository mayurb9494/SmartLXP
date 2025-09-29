import {Stack, Tabs} from 'expo-router';
import { Home, BookOpen, BarChart3, User } from 'lucide-react-native';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (


          <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDark ? '#1E1E1E' : '#fff',
          borderTopWidth: 1,
          borderTopColor: isDark ? '#333333' : '#E5E7EB',
          paddingTop: 4,
        },
        tabBarActiveTintColor: '#a72a5c',//'#FF6400',
        tabBarInactiveTintColor: isDark ? '#999999' : '#6B6B6B',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: 'Courses',
          tabBarIcon: ({ color, size }) => <BookOpen color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: 'Progress',
          tabBarIcon: ({ color, size }) => <BarChart3 color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <User color={color} size={24} />,
        }}
      />
        <Tabs.Screen
            name="Details"
            options={{
                title: 'details',
                tabBarIcon: ({ color, size }) => <User color={color} size={24} />,
            }}
        />
    </Tabs>


  );
}