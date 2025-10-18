
import { FC, ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { AppText } from "components/cores";


type SectionProps = {
  children: ReactNode,
  title: string
}

export const Section: FC<SectionProps> = ({ title, children }) => {

  return (
    <View style={styles.container}>
      <AppText style={styles.title} i18nKey={title} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
  },
})