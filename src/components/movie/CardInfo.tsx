import { FC } from "react";
import { Image, StyleSheet, View } from "react-native";
import { AppText } from "components/cores";
import Theme from 'theme';

interface CardInfoProps {
  title?: string
  description?: string
  uri: string
  variant?: 'portrait' | 'landscape'
  border?: boolean
}

const CardInfo: FC<CardInfoProps> = ({ title, description, uri, variant = "portrait", border }) => {
  const isPortait = variant === "portrait"
  return (
    <View style={[styles.item, border && { borderWidth: 1 }, { width: isPortait ? 100 : 150 }]}>
      <Image
        source={{ uri }}
        style={isPortait ? styles.image_portrait : styles.image_landscape}
      />
      <View style={isPortait ? styles.content_portrait : styles.content_landscape}>
        {title && <AppText style={styles.title}>{title}</AppText>}
        {description && <AppText style={styles.description}>{description}</AppText>}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  item: {
    marginRight: Theme.spacing.space_4,
    borderRadius: Theme.spacing.space_2,
    borderColor: Theme.colors.border,
  },
  image_portrait: {
    height: 150,
    borderRadius: Theme.rounds.small,
  },
  image_landscape: {
    height: 100,
    borderTopLeftRadius: Theme.rounds.small,
    borderTopRightRadius: Theme.rounds.small,
  },
  title: {
    fontWeight: '600',
    color: '#1E293B',
    flex: 1
  },
  description: {
    fontSize: 12,
    color: '#64748B',
  },
  content_portrait: {
    padding: Theme.spacing.space_2
  },
  content_landscape: {
    flexDirection: 'row'
  }
})
export default CardInfo;