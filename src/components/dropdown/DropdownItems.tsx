import React from 'react';
import { StyleSheet, View } from 'react-native';
import Theme from 'theme';
import AppButton from 'components/cores/AppButton';

interface DropdownItemProps {
  active: boolean;
  onSelect: any;
  i18nKey: string;
}

interface DropdownItemsProps {
  items: DropdownOption[];
  activeKey?: string;
  onSelect: Function;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  active,
  i18nKey,
  onSelect
}) => {
  return (
    <AppButton onPress={onSelect} i18nKey={i18nKey} variant={active ? 'primary' : 'secondary'} style={styles.item} />
  );
};

const DropdownItems: React.FC<DropdownItemsProps> = ({
  items,
  activeKey,
  onSelect,
}) => {
  return (
    <View style={styles.container}>
      {items.map(item => (
        <DropdownItem
          onSelect={() => onSelect(item.value)}
          key={item.label}
          active={activeKey === item.value}
          i18nKey={item.label}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: Theme.colors.border,
    backgroundColor: Theme.colors.white,
    padding: Theme.spacing.space_1,
  },
  item: {
    margin: 3,
    borderRadius: Theme.rounds.xSmall,
    borderColor: Theme.colors.border,
    padding: Theme.spacing.space_1
  }
});

export default DropdownItems;
