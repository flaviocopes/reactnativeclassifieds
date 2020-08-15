import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  FlatList,
  Linking,
} from 'react-native'

const Detail = (props) => {
  return (
    <View>
      <View style={styles.body}>
        <View>
          <Text style={styles.sectionTitle}>{props.item.title}</Text>
          <Text style={styles.sectionTitle}>Price: ${props.item.price}</Text>
          <Text style={styles.description}>{props.item.description}</Text>
        </View>
      </View>

      <View style={styles.button}>
        <Button
          title='📨 Contact person'
          onPress={() => {
            const url = `mailto:${props.item.email}?subject=${props.item.title}`
            Linking.canOpenURL(url)
              .then((supported) => {
                if (!supported) {
                  console.log("Can't handle url: " + url)
                } else {
                  Linking.openURL(url)
                }
              })
              .catch((error) => {
                console.log(error)
              })
          }}
        ></Button>
      </View>
      <View style={styles.button}>
        <Button title='🔙 Back' onPress={() => props.setView('main')}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 20,
    color: Colors.black,
  },
  description: {
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,
    paddingRight: 12,
    paddingLeft: 12,
    marginTop: 12,
    paddingTop: 12,
  },
  button: {
    marginTop: 30,
  },
})

export default Detail
