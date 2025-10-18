import { AppText } from 'components/cores';
import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Theme from 'theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import DropdownItems from './DropdownItems';

interface AppDropdownProps {
  currentValue: string;
  options: DropdownOption[];
  onSelect: (value: string) => void;
  triggerName: string;
  defautOpen?: boolean,
}

const Dropdown: React.FC<AppDropdownProps> = ({
  currentValue,
  options,
  onSelect,
  triggerName,
  defautOpen = false
}) => {
  const [open, setOpen] = useState(defautOpen);
  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity
        style={styles.buttonTrigger}
        onPress={() => setOpen(!open)}>
        <AppText i18nKey={triggerName} style={styles.triggerName}/>
        <FontAwesomeIcon
          icon={open ? faChevronDown : faChevronRight}
          size={Theme.fontSizes.small}
          color={Theme.colors.black}
        />
      </TouchableOpacity>
      {open && <DropdownItems items={options} onSelect={onSelect} activeKey={currentValue}/> }
    </View>
  );
};


const styles = StyleSheet.create({
  dropdownContainer: {
    margin: Theme.spacing.space_1,
    borderRadius: Theme.rounds.small,
    borderColor: Theme.colors.border,
    shadowOpacity: 0.1,
    borderWidth: 1,
    overflow: "hidden"
  },
  buttonTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Theme.colors.white,
    padding: Theme.spacing.space_4
  },
  triggerName: {
    fontSize: Theme.fontSizes.medium,
    fontWeight: "bold"
  }
});

export default Dropdown;