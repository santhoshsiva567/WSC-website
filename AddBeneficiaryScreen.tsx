import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  FlatList,
  Text,
  Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For search icon
import bggif from '../../assets/images/bp.gif'; // Background GIF

// Define Beneficiary Type
interface Beneficiary {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  gender: string;
  dob: string;
  addressLine1: string;
  addressLine2: string;
  insuranceName: string;
  medicalHistory: string;
  country: string;
  state: string;
  city: string;
  zip: string;
}

const AddBeneficiaryScreen: React.FC = () => {
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([]); // Full list of beneficiaries
  const [searchText, setSearchText] = useState<string>(''); // Search text

  useEffect(() => {
    // Fetch all beneficiaries on page load
    const fetchData = async () => {
      try {
        const dummyData: Beneficiary[] = [
          {
            id: '1',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            mobile: '1234567890',
            gender: 'Male',
            dob: '1990-01-01',
            addressLine1: '',
            addressLine2: '',
            insuranceName: '',
            medicalHistory: '',
            country: 'USA',
            state: 'NY',
            city: 'New York',
            zip: '10001',
          },
          {
            id: '2',
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            mobile: '9876543210',
            gender: 'Female',
            dob: '1995-05-15',
            addressLine1: '',
            addressLine2: '',
            insuranceName: '',
            medicalHistory: '',
            country: 'USA',
            state: 'CA',
            city: 'Los Angeles',
            zip: '90001',
          },
        ];
        setBeneficiaries(dummyData);
      } catch (error) {
        console.error('Error fetching beneficiaries:', error);
        Alert.alert('Error', 'Failed to fetch beneficiary data.');
      }
    };

    fetchData();
  }, []);

  // Filtered beneficiaries based on search text
  const filteredBeneficiaries = beneficiaries.filter((b) =>
    `${b.firstName} ${b.lastName}`.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ImageBackground source={bggif} style={styles.background} resizeMode="cover">
      <View style={styles.overlay} />
      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <FontAwesome name="search" size={20} color="#fff" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name..."
            placeholderTextColor="#fff"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Beneficiaries List */}
        <FlatList
          data={filteredBeneficiaries}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.beneficiaryCard}>
              <Text style={styles.beneficiaryName}>
                {item.firstName} {item.lastName}
              </Text>
              <Text style={styles.beneficiaryDetails}>{item.email}</Text>
              <Text style={styles.beneficiaryDetails}>{item.mobile}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.noResultsText}>No beneficiaries found.</Text>
          }
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for contrast
  },
  container: {
    flex: 1,
    padding: 20,
    zIndex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
  },
  beneficiaryCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  beneficiaryName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  beneficiaryDetails: {
    color: '#fff',
    fontSize: 14,
  },
  noResultsText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default AddBeneficiaryScreen;
