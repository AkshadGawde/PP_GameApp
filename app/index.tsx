import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../constants/firebaseConfig';
import { NativeStackScreenProps } from '@react-navigation/native-stack'; // Import to type the navigation prop



// Set up Google Sign-in configuration
GoogleSignin.configure({
  webClientId: '780160526837-6beebmqlve2lc6g0pgeaqs0ss5n64345.apps.googleusercontent.com', // Replace with your web client ID from Firebase
});

// Define the navigation stack types
type RootStackParamList = {
  Index: undefined;
  Home: undefined;
};

// Type the navigation prop
type Props = NativeStackScreenProps<RootStackParamList, 'Index'>;

const Index: React.FC<Props> = ({ navigation }) => {
  // Function to handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      
      // Check if userInfo contains the required token
      if (userInfo && userInfo.idToken) {
        // Create a Firebase credential with the Google user info
        const googleCredential = GoogleAuthProvider.credential(userInfo.idToken);

        // Sign in with Firebase
        const result = await signInWithCredential(auth, googleCredential);
        
        if (result.user) {
          navigation.replace('Home'); // Navigate to the home screen upon successful sign-in
        }
      } else {
        console.error('Google sign-in failed: idToken is missing');
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to Game Platform</Text>
      <Button mode="contained" onPress={handleGoogleSignIn}>
        Sign in with Google
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Dark background color for the app
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // White text for the title
  },
});

export default Index;