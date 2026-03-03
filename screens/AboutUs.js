import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function AboutUs() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>About Limkokwing University Lesotho</Text>

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.paragraph}>
            Limkokwing University is Lesotho’s most award-winning creative university. We provide innovative programmes that shape careers of the future across design, business, architecture, ICT, tourism, and communication. 
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Our Mission</Text>
          <Text style={styles.paragraph}>
            To provide a world-class creative learning environment that nurtures innovation, practical skills, and global connectivity. Our programmes are crafted to encourage critical thinking, creativity, and industry readiness.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Our Vision</Text>
          <Text style={styles.paragraph}>
            To be the leading creative university in Africa recognized for producing graduates who are leaders, innovators, and entrepreneurs in their chosen fields.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Why Choose Limkokwing?</Text>
          <Text style={styles.paragraph}>
            - Collaborate with industry leaders.{"\n"}
            - Access to cutting-edge technology such as AR, 3D printers, and interactive labs.{"\n"}
            - Immerse in a multicultural environment with students from over 150 countries.{"\n"}
            - Gain practical skills through incubation units and hands-on projects.{"\n"}
            - Strong career support and guidance to fast-track your future.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.paragraph}>
            Join Lesotho's most award-winning university and be part of a community of over 30,000 creative minds.
          </Text>
        </View>
      </View>

      <Text style={styles.footer}>© Limkokwing University of Creative Technology Lesotho 2026</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E1F28', padding: 15 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FFD700', marginBottom: 20, textAlign: 'center' },
  
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  
  card: {
    backgroundColor: '#2A2C36',
    borderRadius: 18,
    padding: 18,
    marginBottom: 15,
    width: width / 2 - 25, // Two cards per row with some spacing
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  
  subtitle: { fontSize: 18, fontWeight: 'bold', color: '#E0F7FA', marginBottom: 10 },
  paragraph: { fontSize: 14, color: '#fff', lineHeight: 22 },
  footer: { textAlign: 'center', color: '#FFD700', marginVertical: 20, fontWeight: 'bold' },
});