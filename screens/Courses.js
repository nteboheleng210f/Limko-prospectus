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
 
  const faculty = route?.params?.faculty || { name: "Courses", courses: [] };

  const [searchQuery, setSearchQuery] = useState('');
  const [ratings, setRatings] = useState({});

  const handleRate = (courseId, value) => {
    setRatings(prev => ({ ...prev, [courseId]: value }));
  };

  const filteredCourses =
    faculty?.courses?.filter(course =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        {/* Title */}
        <Text style={styles.title}>{faculty.name}</Text>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Icon name="search-outline" size={20} color="#777" />
          <TextInput
            placeholder="Search course..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
          />
        </View>

        {/* Courses */}
        {filteredCourses.map(course => (
          <View key={course.id} style={styles.card}>

            {/* Course Name */}
            <Text style={styles.name}>{course.name}</Text>

            {/* Image */}
            {course.image && (
              <Image
                source={course.image}
                style={styles.image}
                resizeMode="cover"
              />
            )}

            {/* Video */}
            {course.video && (
              <Video
                source={course.video}
                style={styles.video}
                useNativeControls
                resizeMode="contain"
              />
            )}

            {/* Description */}
            <Text style={styles.desc}>{course.description}</Text>

            {/* Rating */}
            <Text style={styles.rateTitle}>Rate This Course</Text>

            <View style={styles.starRow}>
              {[1,2,3,4,5,6].map(star => (  // ✅ Now 6 stars
                <TouchableOpacity key={star} onPress={() => handleRate(course.id, star)}>
                  <Icon
                    name={star <= (ratings[course.id] || 0) ? 'star' : 'star-outline'}
                    size={24}
                    color="#FFD700"
                    style={{ marginHorizontal: 4 }}
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
  safe:{
    flex:1,
    backgroundColor:"#F4F6F8"
  },

  container:{
    flex:1,
    padding:16
  },

  title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:20
  },

  searchContainer:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#FFF",
    borderRadius:12,
    paddingHorizontal:15,
    marginBottom:20,
    height:48
  },

  searchInput:{
    flex:1,
    marginLeft:10,
    fontSize:16
  },

  card:{
    backgroundColor:"#FFF",
    borderRadius:16,
    padding:16,
    marginBottom:25,
    elevation:4
  },

  name:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:10
  },

  image:{
    width:"100%",
    height:160,
    borderRadius:10,
    marginBottom:12
  },

  video:{
    width:"100%",
    height:200,
    borderRadius:10,
    marginBottom:12
  },

  desc:{
    fontSize:14,
    lineHeight:20,
    marginBottom:15,
    color:"#555"
  },

  rateTitle:{
    fontSize:16,
    fontWeight:"bold",
    marginBottom:8
  },

  starRow:{
    flexDirection:"row"
  }
});