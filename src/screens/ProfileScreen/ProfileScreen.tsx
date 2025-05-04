import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/Store';
import {updateFullProfile} from '../../redux/Slices/ProfileSlices';
import {launchImageLibrary} from 'react-native-image-picker';
import styles from './Styles';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const ProfileScreen = () => {
  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [avatarUri, setAvatarUri] = useState(profile.avatarUri);

  // Update local state when Redux state changes
  useEffect(() => {
    setName(profile.name);
    setEmail(profile.email);
    setAvatarUri(profile.avatarUri);
  }, [profile.name, profile.email, profile.avatarUri]);

  const handleImageUpload = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (
        response.assets &&
        response.assets.length > 0 &&
        response.assets[0].uri
      ) {
        const newUri = response.assets[0].uri;
        setAvatarUri(newUri);

        // Update Redux immediately with the new avatar
        dispatch(
          updateFullProfile({
            name,
            email,
            avatarUri: newUri,
          }),
        );
      }
    });
  };

  const navigation = useNavigation();
  const handleSaveProfile = () => {
    if (!name.trim() || !email.trim() || !avatarUri) {
      Toast.show({
        type: 'error',
        text1: 'Please fill out all fields and upload an avatar',
      });
      return;
    }

    dispatch(
      updateFullProfile({
        name,
        email,
        avatarUri,
      }),
    );

    Toast.show({
      type: 'success',
      text1: 'Profile updated successfully',
    });

    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'ProductList'}],
      });
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={handleImageUpload}>
          {avatarUri ? (
            <Image
              source={{uri: avatarUri}}
              style={styles.avatar}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarText}>Upload</Text>
            </View>
          )}
        </TouchableOpacity>
        {avatarUri ? (
          <TouchableOpacity
            style={styles.changePhotoButton}
            onPress={handleImageUpload}>
            <Text style={styles.changePhotoText}>Change Photo</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <Text style={styles.label}>Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
        <Text style={styles.saveButtonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
