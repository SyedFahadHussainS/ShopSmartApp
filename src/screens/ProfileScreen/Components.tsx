import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  View,
  Image,
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export const Button = ({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

interface LoaderProps {
  size?: 'small' | 'large';
  color?: string;
}

export const Loader = ({size = 'large', color = '#00b894'}: LoaderProps) => {
  return <ActivityIndicator size={size} color={color} />;
};

interface ProfileButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

export const ProfileButton = ({onPress, style}: ProfileButtonProps) => {
  return (
    <Button
      title="Go To Profile"
      onPress={onPress}
      style={[styles.profileButton, style]}
      textStyle={styles.profileButtonText}
    />
  );
};

interface CartButtonProps {
  onPress: () => void;
  itemCount: number;
  style?: ViewStyle;
}

export const CartButton = ({onPress, itemCount, style}: CartButtonProps) => {
  return (
    <TouchableOpacity style={[styles.cartButton, style]} onPress={onPress}>
      <Text style={styles.cartButtonText}>View Cart ({itemCount})</Text>
    </TouchableOpacity>
  );
};

interface UserAvatarProps {
  uri?: string;
  size?: number;
  onPress?: () => void;
}

export const UserAvatar = ({uri, size = 50, onPress}: UserAvatarProps) => {
  const containerStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  const content = uri ? (
    <Image
      source={{uri}}
      style={[styles.avatar, containerStyle]}
      resizeMode="cover"
    />
  ) : (
    <View style={[styles.avatarPlaceholder, containerStyle]}>
      <Text style={styles.avatarText}>
        {/* Display first letter of name or default icon */}
        👤
      </Text>
    </View>
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>;
  }

  return content;
};

interface ProfileHeaderProps {
  name: string;
  avatarUri?: string;
  onProfilePress: () => void;
  handleLogout: () => void;
}

export const ProfileHeader = ({
  name,
  avatarUri,
  onProfilePress,
  handleLogout,
}: ProfileHeaderProps) => {
  return (
    <View style={styles.profileHeaderContainer}>
      <TouchableOpacity style={styles.profileHeader} onPress={onProfilePress}>
        <UserAvatar uri={avatarUri} size={40} />
        <Text style={styles.profileName}>{name || 'Set up your profile'}</Text>
      </TouchableOpacity>
      <Button
        onPress={handleLogout}
        title="Remove"
        style={styles.logoutButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00b894',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
    opacity: 0.7,
  },
  profileButton: {
    backgroundColor: '#00b894',
    margin: 10,
  },
  profileButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#00b894',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  avatar: {
    borderWidth: 2,
    borderColor: '#ddd',
    backgroundColor: '#e1e1e1',
  },
  avatarPlaceholder: {
    backgroundColor: '#bbb',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  profileName: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginTop: 10,
    marginRight: 10,
  },
});
