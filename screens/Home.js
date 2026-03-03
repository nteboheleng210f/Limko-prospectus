import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

export default function Home({ navigation }) {
  const [darkMode, setDarkMode] = useState(true);

  const theme = darkMode
    ? {
        bg: '#121212',
        card: '#1E1E1E',
        text: '#FFFFFF',
        sub: '#BBBBBB',
        accent: '#FFD700',
      }
    : {
        bg: '#F4F6F8',
        card: '#FFFFFF',
        text: '#111111',
        sub: '#555555',
        accent: '#1E90FF',
      };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.bg }}>
      <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.bg}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View style={[styles.topNav, { backgroundColor: theme.card }]}>
          <Image
            source={require('../assets/limko.jpg')}
            style={styles.logo}
          />

          <View style={styles.navMenu}>
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => navigation.navigate('Faculties')}
            >
              <Text style={[styles.navText, { color: theme.text }]}>
                Faculties
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navItem}
              onPress={() => navigation.navigate('ContactUs')}
            >
              <Text style={[styles.navText, { color: theme.text }]}>
                Contact
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navItem}
              onPress={() => setDarkMode(!darkMode)}
            >
              <Icon
                name={darkMode ? 'sunny-outline' : 'moon-outline'}
                size={22}
                color={theme.text}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* ================= HERO ================= */}
        <View style={styles.heroContainer}>
          <Image
            source={require('../assets/limkokwing.jpeg')}
            style={styles.heroImage}
          />

          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>
              Creating Tomorrow’s Leaders
            </Text>

            <Text style={styles.heroSubtitle}>
              Discover innovative programmes designed for the future.
            </Text>

            <TouchableOpacity
              style={[styles.ctaButton, { backgroundColor: theme.accent }]}
              onPress={() => navigation.navigate('Faculties')}
            >
              <Text style={styles.ctaText}>Explore Faculties</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ================= HIGHLIGHTS ================= */}
        <View style={styles.highlightSection}>
          <View style={[styles.highlightCard, { backgroundColor: theme.card }]}>
            <Text style={styles.highlightIcon}>🎓</Text>
            <Text style={[styles.highlightText, { color: theme.text }]}>
              25+ Accredited Courses
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.highlightCard, { backgroundColor: theme.card }]}
            onPress={() => navigation.navigate('Quiz')}
          >
            <Text style={styles.highlightIcon}>🧠</Text>
            <Text style={[styles.highlightText, { color: theme.text }]}>
              Career Quiz
            </Text>
          </TouchableOpacity>

          <View style={[styles.highlightCard, { backgroundColor: theme.card }]}>
            <Text style={styles.highlightIcon}>🎥</Text>
            <Text style={[styles.highlightText, { color: theme.text }]}>
              Video Previews
            </Text>
          </View>
        </View>

        {/* ================= ABOUT ================= */}
        <View style={[styles.aboutContainer, { backgroundColor: theme.card }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            About Limkokwing University
          </Text>

          <Text style={[styles.aboutText, { color: theme.sub }]}>
            Limkokwing University of Creative Technology in Lesotho offers
            industry-driven programmes that prepare students for global careers.
            Our focus is on creativity, innovation, and technology.
          </Text>

          <TouchableOpacity
            style={[styles.readMoreButton, { borderColor: theme.accent }]}
            onPress={() => navigation.navigate('AboutUs')}
          >
            <Text style={[styles.readMoreText, { color: theme.accent }]}>
              Learn More
            </Text>
          </TouchableOpacity>
        </View>

        {/* ================= FOOTER ================= */}
        <View style={[styles.footer, { backgroundColor: theme.card }]}>
          <Text style={[styles.footerText, { color: theme.sub }]}>
            © 2026 Limkokwing University of Creative Technology Lesotho
          </Text>
          <Text style={[styles.footerSubText, { color: theme.sub }]}>
            Empowering Innovation & Creativity
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /* NAV */
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  logo: {
    width: 115,
    height: 38,
    resizeMode: 'contain',
  },

  navMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  navItem: {
    marginLeft: 22,
  },

  navText: {
    fontSize: 14,
    fontWeight: '600',
  },

  /* HERO */
  heroContainer: {
    height: 280,
    marginBottom: 25,
  },

  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  heroSubtitle: {
    color: '#EAEAEA',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
  },

  ctaButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },

  ctaText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },

  /* HIGHLIGHTS */
  highlightSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 25,
  },

  highlightCard: {
    width: width * 0.30,
    padding: 12,
    borderRadius: 15,
    alignItems: 'center',
  },

  highlightIcon: {
    fontSize: 24,
    marginBottom: 8,
  },

  highlightText: {
    fontSize: 12,
    textAlign: 'center',
  },

  /* ABOUT */
  aboutContainer: {
    marginHorizontal: 15,
    padding: 18,
    borderRadius: 15,
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  aboutText: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 15,
  },

  readMoreButton: {
    borderWidth: 1.5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },

  readMoreText: {
    fontWeight: '600',
  },

  /* FOOTER */
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
    marginHorizontal: 15,
    borderRadius: 15,
  },

  footerText: {
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'center',
  },

  footerSubText: {
    fontSize: 11,
    textAlign: 'center',
  },
});