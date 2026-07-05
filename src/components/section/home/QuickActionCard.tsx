import React, { memo, ReactNode } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useAppTheme } from '../../../theme/ThemeProvider';
import AppText from '../../AppText';
import { SCREENS } from '../../../constant/screens';


interface Props {
  title: string;
  subtitle: string;
  icon: ReactNode;
  onPress: () => void;
}

const QuickActionCard = ({
  title,
  subtitle,
  icon,
  onPress,
}: Props) => {
  const { colors } = useAppTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
      ]}
      onPress={onPress}
    >
      {icon}

      <AppText
        style={[
          styles.title,

        ]}>
        {title}
      </AppText>

      <AppText
        style={[
          styles.subtitle,
          {
            color: colors.textSecondary,
          },
        ]}>
        {subtitle}
      </AppText>
    </TouchableOpacity>
  );
};

export default memo(QuickActionCard);

const styles = StyleSheet.create({
  card: {
    width: '31%',
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 10
  },

  title: {
    marginTop: 10,
    fontWeight: '600',
    fontSize: 15,
  },

  subtitle: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
});