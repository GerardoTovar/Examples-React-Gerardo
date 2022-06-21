import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {
  getBooksAPI,
  addBookAPI,
  updateBookAPI,
  deleteBookAPI,
} from '../apis/books';
const Home = ({navigation}) => {
  const [books, setBooks] = useState();

  useEffect(() => {
    getBooksAPI().then(books => {
      console.log(books);
      setBooks(books);
    });
  }, []);

  const bookExample = {
    title: 'titulo1',
    description: 'dcecsc',
  };

  const bookupdate = {
    _id: '62b21648b020cc4e70f60baf', // cambia el id manual
    title: 'titfsdf',
    description: 'dfssdfsddf',
  };

  const addBook = book => {
    return addBookAPI(book).then(data => {
      console.log([...books, data]);
      setBooks([...books, data]);
    });
  };
  const updateBook = book => {
    return updateBookAPI(book).then(data => {
      getBooksAPI().then(books => {
        setBooks(books);
      });
    });
  };

  const deleteBook = idbook => {
    return deleteBookAPI(idbook).then(data => {
      setBooks(books.filter(book => book._id != idbook));
    });
  };

  const Item = book => {
    return (
      <View key={book?.index} style={styles.item}>
        <Text style={styles.itemtitle}>{book?.item?.title}</Text>
        <Text style={styles.itemtitle}>{book?.item?.description}</Text>
        <TouchableOpacity
          style={styles.itembtn}
          onPress={() => deleteBook(book?.item?._id)}>
          <Text style={{color: 'black'}}>eliminar</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Text}
        onPress={() => addBook(bookExample)}>
        <Text style={{color: 'black'}}>Agregar Libro</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Text}
        onPress={() => updateBook(bookupdate)}>
        <Text style={{color: 'black'}}>update Libro</Text>
      </TouchableOpacity>
      <FlatList
        data={books}
        renderItem={Item}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    backgroundColor: '#33A8FF',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 40,
    marginVertical: 5,
  },
  item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 5,
    padding: 5,
  },
  itemtitle: {
    fontSize: 20,
  },
  itembtn: {
    backgroundColor: '#33A8FF',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 20,
    margin: 5,
    marginHorizontal: 10,
  },
});

export default Home;
