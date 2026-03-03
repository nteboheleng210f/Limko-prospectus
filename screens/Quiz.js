import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const questions = [
  {
    question: "When solving problems, you usually:",
    options: [
      { text: "Analyze data and logical systems", type: "ICT" },
      { text: "Think creatively and design visually", type: "Design" },
      { text: "Plan and structure spaces or buildings", type: "Architecture" },
      { text: "Lead teams and manage projects", type: "Business" },
      { text: "Communicate ideas effectively to others", type: "Communication" },
    ],
  },
  {
    question: "Which activity excites you most?",
    options: [
      { text: "Coding or building software", type: "ICT" },
      { text: "Designing a brand, poster, or logo", type: "Design" },
      { text: "Creating architectural or interior plans", type: "Architecture" },
      { text: "Launching or managing a business", type: "Business" },
      { text: "Hosting events or presenting media content", type: "Communication" },
    ],
  },
  {
    question: "You enjoy working:",
    options: [
      { text: "With technology and digital tools", type: "ICT" },
      { text: "With colors, creativity, and art", type: "Design" },
      { text: "With structures, layouts, and physical spaces", type: "Architecture" },
      { text: "With people, strategies, and finance", type: "Business" },
      { text: "With media, speech, or writing", type: "Communication" },
    ],
  },
  {
    question: "Your main strength is:",
    options: [
      { text: "Logical thinking and problem solving", type: "ICT" },
      { text: "Creativity and imagination", type: "Design" },
      { text: "Visualization and spatial awareness", type: "Architecture" },
      { text: "Leadership and decision-making", type: "Business" },
      { text: "Persuasion and communication", type: "Communication" },
    ],
  },
];

const personalityTitles = {
  ICT: "The Digital Architect",
  Design: " The Creative Visionary",
  Architecture: " The Master Builder",
  Business: "The Strategic Leader",
  Communication: " The Influencer",
};

const facultyNavigation = {
  ICT: "Faculty of ICT",
  Design: "Faculty of Design",
  Architecture: "Faculty of Architecture",
  Business: "Faculty of Business",
  Communication: "Faculty of Communication",
};

export default function Quiz({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    ICT: 0,
    Design: 0,
    Architecture: 0,
    Business: 0,
    Communication: 0,
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const progress = (currentQuestion / questions.length) * 100;

  const handleAnswer = (type) => {
    setSelectedOption(type);
    const updatedScores = { ...scores, [type]: scores[type] + 1 };
    setScores(updatedScores);

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 300);
  };

  const calculateResult = () => {
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const top = sorted[0][0];
    const percentage = Math.round((sorted[0][1] / questions.length) * 100);
    return { top, percentage };
  };

  if (showResult) {
    const result = calculateResult();
    const matchedFaculty = facultyNavigation[result.top];

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
        <StatusBar barStyle="light-content" backgroundColor="#121212" />

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 40, // prevents bottom cut
          }}
        >
          <Text style={styles.resultTitle}>Your Career Match</Text>
          <Text style={styles.personality}>
            {personalityTitles[result.top]}
          </Text>
          <Text style={styles.match}>
            Compatibility: {result.percentage}%
          </Text>
          <Text style={styles.facultyMatch}>
            Recommended Faculty: {matchedFaculty}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Faculties')}
          >
            <Text style={styles.buttonText}>Explore This Faculty</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#444' }]}
            onPress={() => {
              setCurrentQuestion(0);
              setScores({
                ICT: 0,
                Design: 0,
                Architecture: 0,
                Business: 0,
                Communication: 0,
              });
              setShowResult(false);
              setSelectedOption(null);
            }}
          >
            <Text style={styles.buttonText}>Retake Quiz</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingBottom: 40, // prevents last option from hiding
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>

        <Text style={styles.question}>
          {questions[currentQuestion].question}
        </Text>

        {questions[currentQuestion].options.map((option, index) => {
          const isSelected = selectedOption === option.type;
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                isSelected && styles.selectedOption,
              ]}
              onPress={() => handleAnswer(option.type)}
            >
              <Text style={styles.optionText}>{option.text}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 25,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#333',
    borderRadius: 20,
    marginBottom: 30,
  },
  progressFill: {
    height: 10,
    backgroundColor: '#FFD700',
    borderRadius: 20,
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  optionButton: {
    backgroundColor: '#2A2C36',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#2A2C36',
  },
  selectedOption: {
    borderColor: '#FFD700',
    backgroundColor: '#333',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  resultContainer: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 25,
  },
  resultTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
    textAlign:'center'
  },
  personality: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  match: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 10,
    textAlign:'center'
  },
  facultyMatch: {
    fontSize: 18,
    color: '#FFD700',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});