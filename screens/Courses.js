import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Courses({ route }) {
  const { faculty } = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const [ratings, setRatings] = useState({});
  const [darkMode, setDarkMode] = useState(true);

  const theme = darkMode
    ? { bg: '#121212', card: '#1E1E1E', text: '#fff', sub: '#bbb', accent: '#FFD700' }
    : { bg: '#F2F2F2', card: '#fff', text: '#000', sub: '#555', accent: '#4A90E2' };

  const handleRate = (courseId, value) => {
    setRatings(prev => ({ ...prev, [courseId]: value }));
  };

  const filteredCourses = faculty.courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.bg }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        {/* Top Bar */}
        <View style={styles.topBar}>
          <Text style={[styles.title, { color: theme.text }]}>
            {faculty.name}
          </Text>

          <TouchableOpacity onPress={() => setDarkMode(!darkMode)}>
            <Text style={{ fontSize: 18, color: theme.text }}>
              {darkMode ? 'sun-outline' : 'moon-ou'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={[styles.searchContainer, { backgroundColor: theme.card }]}>
          <Icon name="search-outline" size={20} color={theme.sub} />
          <TextInput
            placeholder="Search course..."
            placeholderTextColor={theme.sub}
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={[styles.searchInput, { color: theme.text }]}
          />
        </View>

        {/* Courses List */}
        {filteredCourses.map(course => (
          <View key={course.id} style={[styles.card, { backgroundColor: theme.card }]}>

            {/* 1️⃣ Course Name */}
            <Text style={[styles.name, { color: theme.text }]}>
              {course.name}
            </Text>

            {/* 2️⃣ Course Image Title */}
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              Course Image
            </Text>

            {/* 3️⃣ Course Image */}
            <Image
              source={course.image}
              style={styles.image}
              resizeMode="cover"
            />

            {/* 4️⃣ Course Video Title */}
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              Course Video
            </Text>

            {/* 5️⃣ Course Video */}
            {course.video && (
              <Video
                source={course.video}
                style={styles.video}
                useNativeControls
                resizeMode="contain"
                isLooping
              />
            )}

            {/* 6️⃣ Description */}
            <Text style={[styles.desc, { color: theme.sub }]}>
              {course.description}
            </Text>

            {/* 7️⃣ Rate Title */}
            <Text style={[styles.rateTitle, { color: theme.text }]}>
              Rate This Course
            </Text>

            {/* 8️⃣ 6-Star Rating */}
            <View style={styles.starRow}>
              {[1, 2, 3, 4, 5, 6].map(star => (
                <TouchableOpacity key={star} onPress={() => handleRate(course.id, star)}>
                  <Icon
                    name={star <= (ratings[course.id] || 0) ? 'star' : 'star-outline'}
                    size={24}
                    color={theme.accent}
                    style={{ marginHorizontal: 3 }}
                  />
                </TouchableOpacity>
              ))}
            </View>

          </View>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 25,
    height: 50
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16
  },

  card: {
    borderRadius: 20,
    marginBottom: 25,
    padding: 15,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 6
  },

  image: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    marginBottom: 12
  },

  video: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 12
  },

  desc: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 15
  },

  rateTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },

  starRow: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});