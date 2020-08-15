import React, { useState, useEffect } from 'react'
import { Alert, View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const New = (props) => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  return (
    <View>
      <View style={styles.body}>
        <View>
          <Text style={styles.sectionTitle}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder='Title'
            onChangeText={(title) => setTitle(title)}
          />
          <Text style={styles.sectionTitle}>Price</Text>
          <TextInput
            style={styles.input}
            placeholder='Price'
            onChangeText={(price) => setPrice(price)}
          />
          <Text style={styles.sectionTitle}>Description</Text>
          <TextInput
            style={styles.input}
            placeholder='Description'
            onChangeText={(description) => setDescription(description)}
          />
        </View>
      </View>

      <View style={styles.button}>
        <Button
          title='✚ Add'
          onPress={() => {
            if (!title) {
              Alert.alert('Please add a title')
              return
            }
            if (!price) {
              Alert.alert('Please add a price')
              return
            }
            props.addItem(title, price, description)
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
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 20,
    color: Colors.black,
  },
  input: {
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,
    paddingRight: 12,
    paddingLeft: 12,
    marginTop: 12,
  },
  button: {
    marginTop: 30,
  },
})

export default New
