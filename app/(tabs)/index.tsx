import { Image, StyleSheet, Pressable, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <Pressable onPress={() => router.push('/screen/Insight')} style={styles.info}>
        <Text>Insight</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/screen/Notification')} style={styles.info}>
        <Text>Notification</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/screen/Complaints')} style={styles.info}>
        <Text>Complaints</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/screen/Setting')} style={styles.info}>
        <Text>Setting</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/screen/PersonalInfo')} style={styles.info}>
        <Text>PersonalInfo</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/screen/NotificationSettings')} style={styles.info}>
        <Text>Notification Settings</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/screen/Security')} style={styles.info}>
        <Text>Security</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/screen/ChangePassword')} style={styles.info}>
        <Text>Change Password</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/screen/Statement')} style={styles.info}>
        <Text>Statement</Text>
      </Pressable>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  info: {
    padding: 16,
    backgroundColor: '#f5f',
    borderRadius: 8,
    color: '#fff',
    
  },
});
