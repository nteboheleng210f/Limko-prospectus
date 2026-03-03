import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity } from 'react-native';

export default function ContactUs() {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <Text style={styles.title}>Contact Limkokwing University Lesotho</Text>

      <Text style={styles.subtitle}>Address</Text>
      <Text style={styles.paragraph}>
        Moshoeshoe Road, Maseru Central, PO Box 8971, Maseru 100, Lesotho
      </Text>

      <Text style={styles.subtitle}>Phone & Toll-Free</Text>
      <Text style={styles.paragraph}>+266 2231 5767</Text>
      <Text style={styles.paragraph}>Toll-Free: 80022066 / 80022088</Text>

      <Text style={styles.subtitle}>Email & Website</Text>
      <TouchableOpacity onPress={() => openLink('http://www.limkokwing.net')}>
        <Text style={styles.link}>www.limkokwing.net</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Social Media</Text>
      <TouchableOpacity onPress={() => openLink('https://www.facebook.com/limkokwing')}>
        <Text style={styles.link}>Facebook: Limkokwing University</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink('https://www.instagram.com/limkokwing/')}>
        <Text style={styles.link}>Instagram: @limkokwing</Text>
      </TouchableOpacity>
      
      
      <Text style={styles.footer}>© Limkokwing University of Creative Technology Lesotho 2026</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E1F28', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#FFD700', marginBottom: 15, textAlign: 'center' },
  subtitle: { fontSize: 20, fontWeight: 'bold', color: '#E0F7FA', marginTop: 15, marginBottom: 8 },
  paragraph: { fontSize: 16, color: '#fff', lineHeight: 24, marginBottom: 10 },
  link: { fontSize: 16, color: '#4A90E2', textDecorationLine: 'underline', marginBottom: 8 },
  footer: { fontSize: 14, color: '#FFD700', textAlign: 'center', marginTop: 30 }
});