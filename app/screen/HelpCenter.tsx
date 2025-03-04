import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeadingField from '@/components/Header';


const FAQScreen = () => {
  const [search, setSearch] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);
  const navigation = useNavigation();

  const faqData = [
    { id: '1', question: 'What is facility bill?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: '2', question: 'How to use facility bill', answer: 'Quisque aliquam bibendum metus.' },
    { id: '3', question: 'How do I recharge my electricity', answer: 'Sit amet fermentum purus sollicitudin vel.' },
    { id: '4', question: 'Is facility bill free to use', answer: 'Pellentesque vitae lacinia justo.' },
  ];

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 8, padding: 8 }}>
        <Ionicons name="search" size={20} color="gray" style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
          style={{ flex: 1 }}
        />
      </View>
      <FlatList
        data={faqData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => setExpandedIndex(expandedIndex === index ? null : index)}
            style={{ backgroundColor: '#f8f8f8', padding: 16, marginTop: 8, borderRadius: 8 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.question}</Text>
            {expandedIndex === index && <Text style={{ marginTop: 8 }}>{item.answer}</Text>}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const ContactScreen = () => {
  const contactOptions = [
    { id: '1', title: 'Customer Service', icon: 'headset' },
    { id: '2', title: 'Support Ticket', icon: 'headset' },
  ];

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={contactOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#f8f8f8', marginTop: 8, borderRadius: 8 }}>
            <Ionicons name={item.icon} size={20} color="black" style={{ marginRight: 8 }} />
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default function HelpCenter() {
  const [selectedTab, setSelectedTab] = useState('FAQ');

  return (
    <SafeAreaView style={styles.container}>
      {/* Tab Buttons */}
      <HeadingField title="Help Center" onPress={() => navigation.goBack()} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 }}>
        <TouchableOpacity
          onPress={() => setSelectedTab('FAQ')}
          style={{
            padding: 12,
            borderBottomWidth: 2,
            borderBottomColor: selectedTab === 'FAQ' ? 'black' : 'transparent'
          }}>
          <Text style={{ fontWeight: 'bold', color: selectedTab === 'FAQ' ? 'black' : 'gray' }}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('Contact')}
          style={{
            padding: 12,
            borderBottomWidth: 2,
            borderBottomColor: selectedTab === 'Contact' ? 'black' : 'transparent'
          }}>
          <Text style={{ fontWeight: 'bold', color: selectedTab === 'Contact' ? 'black' : 'gray' }}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      {/* Show Selected Screen */}
      {selectedTab === 'FAQ' ? <FAQScreen /> : <ContactScreen />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    });
