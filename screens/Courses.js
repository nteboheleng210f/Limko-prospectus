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
import Icon from 'react-native-vector-icons/Ionicons';
import { Video } from 'expo-av';

export default function Courses({ route }) {
  const { faculty } = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const [ratings, setRatings] = useState({});
  const [darkMode, setDarkMode] = useState(true);

  const theme = darkMode
    ? { bg: '#121212', card: '#1E1E1E', text: '#fff', sub: '#bbb', accent: '#FFD700' }
    : { bg: '#F2F2F2', card: '#fff', text: '#000', sub: '#555', accent: '#4A90E2' };

  const handleRate = (courseId, value) => {
    setRatings(prev => ({
      ...prev,
      [courseId]: value,
    }));
  };

  const filteredCourses = faculty.courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.bg }]}
      showsVerticalScrollIndicator={false}
    >

      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={[styles.title, { color: theme.text }]}>
          {faculty.name}
        </Text>

        <TouchableOpacity onPress={() => setDarkMode(!darkMode)}>
          <Text style={{ fontSize: 18, color: theme.text }}>
            {darkMode ? '☀️' : '🌙'}
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

      {/* Courses */}
      {filteredCourses.map(course => (
        <View
          key={course.id}
          style={[styles.card, { backgroundColor: theme.card }]}
        >

          <Image
            source={course.image}
            style={styles.image}
            resizeMode="cover"
          />

          {course.video && (
            <Video
              source={course.video}
              style={styles.video}
              useNativeControls
              resizeMode="cover"
              isLooping
            />
          )}

          <View style={styles.info}>
            <Text style={[styles.name, { color: theme.text }]}>
              {course.name}
            </Text>

            <Text style={[styles.desc, { color: theme.sub }]}>
              {course.description}
            </Text>

            {/* ⭐ Star Rating */}
            <View style={styles.starRow}>
              {[1, 2, 3, 4, 5, 6].map(star => (
                <TouchableOpacity
                  key={star}
                  onPress={() => handleRate(course.id, star)}
                >
                  <Icon
                    name={
                      star <= (ratings[course.id] || 0)
                        ? 'star'
                        : 'star-outline'
                    }
                    size={22}
                    color={theme.accent}
                    style={{ marginHorizontal: 2 }}
                  />
                </TouchableOpacity>
              ))}
            </View>

          </View>
        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 25,
    height: 50,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },

  card: {
    borderRadius: 20,
    marginBottom: 25,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },

  image: {
    width: '100%',
    height: 140,
  },

  video: {
    width: '100%',
    height: 180,
  },

  info: {
    padding: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  desc: {
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 20,
  },

  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});