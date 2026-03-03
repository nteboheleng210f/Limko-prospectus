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

const facultiesData = [
  {
    name: 'Faculty of Design',
    image: require('../assets/Design.jpg'),
    requirements: 'Minimum 5 credits including English and Mathematics.',
    courses: [
      { 
        id: '1', 
        name: 'Graphic Design', 
        description: 'This programme develops strong visual communication skills through typography, branding, digital illustration, advertising design, and multimedia content creation. Students learn industry-standard software and creative problem-solving techniques to produce impactful visual campaigns.', 
       image: require('../assets/Graphics.jpg'),
       video: require('../assets/videos/graphic.mp4')
      },
      { 
        id: '2', 
        name: 'Fashion Design', 
        description: 'Students explore garment construction, textile studies, fashion illustration, and trend forecasting. The programme combines creativity and technical skills to prepare graduates for careers in fashion entrepreneurship, styling, and global fashion industries.', 
        image: require('../assets/Design.jpg'),
         video: require('../assets/videos/Apparel.mp4')
      },
      { 
        id: '3', 
        name: 'Interior Design', 
        description: 'Focuses on designing functional and aesthetically pleasing interior spaces. Students learn space planning, 3D visualization, materials selection, lighting design, and sustainable interior solutions for residential and commercial projects.', 
        image: require('../assets/Interior.jpg'),
         video: require('../assets/videos/iteriorDesig.mp4')
      },
      { 
        id: '4', 
        name: 'Creative Advertising', 
        description: 'Develops creative campaign strategies across digital and traditional platforms. Students learn copywriting, brand storytelling, digital marketing, and multimedia production to create powerful advertising concepts.', 
       image: require('../assets/Creative.jpg'),
        video: require('../assets/videos/creative.mp4')
      },
      { 
        id: '5', 
        name: 'Retailing', 
        description: 'Covers retail management, consumer behavior, merchandising, and visual display strategies. Graduates gain practical knowledge of running retail businesses and managing customer experiences in competitive markets.', 
        image: require('../assets/retailing.jpg'),
         video: require('../assets/videos/Retailing.mp4')
      },
    ],
  },

  {
    name: 'Faculty of Business Management and Globalization',
    image: require('../assets/Ecommerce.png'),
    requirements: 'Minimum 5 credits including English.',
    courses: [
      { 
        id: '6', 
        name: 'International Business', 
        description: 'Equips students with knowledge of global trade systems, international marketing, cross-cultural management, and economic policies. Graduates are prepared to operate businesses in international markets.', 
        image: require('../assets/International.jpg'), 
        video: require('../assets/videos/Internationl.mp4')
      },
      { 
        id: '7', 
        name: 'Entrepreneurship', 
        description: 'Focuses on innovation, startup development, business planning, and venture financing. Students learn how to identify opportunities, manage risks, and build sustainable enterprises.', 
        image: require('../assets/enterprenuership.jpg'),
        video: require('../assets/videos/enter.mp4')

      },
      { 
        id: '8', 
        name: 'Human Resource Management', 
        description: 'Covers recruitment strategies, employee relations, organizational development, and labor law. Graduates develop skills to manage people effectively within dynamic organizations.', 
        image: require('../assets/human.jpg'),
        video: require('../assets/videos/human.mp4')
      },
      { 
        id: '9', 
        name: 'Marketing', 
        description: 'Teaches branding strategies, digital marketing, consumer psychology, and market research. Students learn how to create competitive marketing campaigns and manage brand identity.', 
       image: require('../assets/market.jpg'),
       video: require('../assets/videos/Market.mp4')
      },
      { 
        id: '10', 
        name: 'Business Management', 
        description: 'Provides knowledge in strategic management, operations, finance, and leadership. Graduates are prepared to manage organizations, lead teams, and drive business growth.', 
        image: require('../assets/management.png'), 
        video: require('../assets/videos/Management.mp4')
      },
    ],
  },

  {
    name: 'Faculty of Architecture',
    image: require('../assets/Archtecture.jpg'),
    requirements: 'Minimum 5 credits including English and Mathematics, portfolio required.',
    courses: [
      { 
        id: '11', 
        name: 'Architectural Technology', 
        description: 'Focuses on building design, construction methods, and sustainable architecture. Students gain technical drafting and 3D modeling skills essential for modern construction projects.', 
         image: require('../assets/architecture.jpg'),
         video: require('../assets/videos/archtect.mp4')

      },
      { 
        id: '12', 
        name: 'Urban Planning', 
        description: 'Prepares students to design smart, sustainable cities. Topics include environmental planning, infrastructure systems, and community development strategies.', 
       image: require('../assets/Urban.jpg') , 
       video: require('../assets/videos/Inter.mp4')
      },
      { 
        id: '13', 
        name: 'Interior Architecture', 
        description: 'Blends architecture and interior design to create functional interior structural spaces. Students focus on building codes, material technology, and spatial innovation.', 
          image: require('../assets/interiors.jpg') ,
          video: require('../assets/videos/interro.mp4')
      },
      { 
        id: '14', 
        name: 'Architectural Studies', 
        description: 'Introduces foundational architectural principles including design theory, history of architecture, and environmental sustainability practices.', 
          image: require('../assets/Studies.jpg'), 
          video: require('../assets/videos/stud.mp4')
      },
      { 
        id: '15', 
        name: 'Structural Engineering Basics', 
        description: 'Provides understanding of structural systems, construction materials, and safety standards essential in modern building development.', 
        image: require('../assets/structural.jpg'),
        video: require('../assets/videos/basic.mp4') 
      },
    ],
  },

  {
    name: 'Faculty of Infomation Communication Technology',
    image: require('../assets/ICTS.png'),
    requirements: 'Minimum  4 credits including English and Mathematics.',
    courses: [
      { 
        id: '16', 
        name: 'Software Engineering', 
        description: 'Teaches programming, system analysis, application development, and software project management. Students develop scalable web and mobile applications.', 
        image: require('../assets/software.jpg'),
        video: require('../assets/videos/software.mp4')
      },
      { 
        id: '17', 
        name: 'Business IT', 
        description: 'Combines business strategy with information systems. Students learn enterprise systems, database management, and IT solutions for business growth.', 
        image: require('../assets/Business it.jpg'), 
        video: require('../assets/videos/BIT.mp4')
       
      },
      { 
        id: '18', 
        name: 'Information Technology', 
        description: 'Focuses on IT infrastructure, networking, cybersecurity fundamentals, and cloud computing systems for modern organizations.', 
        image: require('../assets/Information Technology.jpg'),
        video: require('../assets/videos/Infotech.mp4')
      },
      { 
        id: '19', 
        name: 'Computer Science', 
        description: 'Provides deep knowledge in algorithms, artificial intelligence, data structures, and system programming to solve complex technological problems.', 
         image: require('../assets/computer.jpg'),
         video: require('../assets/videos/computerScience.mp4')

      },
      { 
        id: '20', 
        name: 'Mobile Computing', 
        description: 'Covers mobile app development, wireless networks, and cross-platform technologies for building smart mobile solutions.', 
         image: require('../assets/mobile.jpg'),
         video: require('../assets/videos/mobile.mp4')
      },
    ],
  },

  {
    name: 'Faculty of Communication',
    image: require('../assets/FaCommunication.jpg'),
    requirements: 'Minimum 5 credits including English.',
    courses: [
      { 
        id: '21', 
        name: 'Broadcasting & Journalism', 
        description: 'Trains students in news reporting, radio and TV broadcasting, investigative journalism, and digital storytelling for modern media platforms.', 
        image: require('../assets/Broad.jpg'),
         video: require('../assets/videos/Broadcasting.mp4')
      },
      { 
        id: '22', 
        name: 'Professional Communication', 
        description: 'Develops corporate communication skills, public speaking, business writing, and media strategy for professional environments.', 
        image: require('../assets/comm.jpg'),
         video: require('../assets/videos/Proffesional.mp4')
      },
      { 
        id: '23', 
        name: 'Public Relations', 
        description: 'Focuses on reputation management, crisis communication, branding strategy, and stakeholder engagement in public and private sectors.', 
        image: require('../assets/relations.jpg') ,
         video: require('../assets/videos/public.mp4')
      },
      { 
        id: '24', 
        name: 'Media Production', 
        description: 'Covers film production, scriptwriting, editing, cinematography, and digital media creation using industry-standard tools.', 
        image: require('../assets/production.jpg'),
         video: require('../assets/videos/media.mp4')
      },
      { 
        id: '25', 
        name: 'Events Management', 
        description: 'Prepares students to plan, organize, and manage corporate events, entertainment productions, and large-scale conferences successfully.', 
        image: require('../assets/advert.jpg'),
         video: require('../assets/videos/event.mp4')
      },
    ],
  },
];

export default function Faculties({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  const theme = darkMode
    ? { bg: '#121212', card: '#1E1E1E', text: '#fff', sub: '#bbb' }
    : { bg: '#f2f2f2', card: '#fff', text: '#000', sub: '#555' };

  const filteredFaculties = facultiesData.filter(faculty =>
    faculty.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.bg }]}>
      
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={[styles.appTitle, { color: theme.text }]}>
          Limkokwing Faculties
        </Text>
        <TouchableOpacity onPress={() => setDarkMode(!darkMode)}>
          <Icon
            name={darkMode ? 'sunny-outline' : 'moon-outline'}
            size={24}
            color={theme.text}
          />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={[styles.searchContainer, { backgroundColor: theme.card }]}>
        <Icon name="search-outline" size={20} color={theme.sub} />
        <TextInput
          placeholder="Search faculty..."
          placeholderTextColor={theme.sub}
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={[styles.searchInput, { color: theme.text }]}
        />
      </View>

      {/* Faculty Cards */}
      {filteredFaculties.map((faculty) => (
        <TouchableOpacity
          key={faculty.name}
          style={[styles.facultyCard, { backgroundColor: theme.card }]}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Courses', { faculty })}
        >
          <Image source={faculty.image} style={styles.facultyImage} />
          <View style={styles.facultyInfo}>
            <Text style={[styles.facultyName, { color: theme.text }]}>
              {faculty.name}
            </Text>
            <Text style={styles.requirementsTitle}>Entry Requirements:</Text>
            <Text style={[styles.requirements, { color: theme.sub }]}>
              {faculty.requirements}
            </Text>
          </View>
        </TouchableOpacity>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  appTitle: { fontSize: 22, fontWeight: 'bold' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', borderRadius: 15, paddingHorizontal: 15, marginBottom: 20, height: 50 },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16 },
  facultyCard: { borderRadius: 20, marginBottom: 20, overflow: 'hidden', elevation: 6 },
  facultyImage: { width: '100%', height: 180 },
  facultyInfo: { padding: 15 },
  facultyName: { fontSize: 20, fontWeight: 'bold' },
  requirementsTitle: { fontWeight: 'bold', color: '#4A90E2', marginTop: 5 },
  requirements: { fontSize: 14 },
});