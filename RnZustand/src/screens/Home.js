import React from 'react';
import {View, Text, FlatList, SafeAreaView, Image} from 'react-native';
import {useCart, cartTotal, cartQuantity} from '../utils/cart';
import CounterInput from '../components/atoms/CounterInput';
import {Style} from './Styles';
import shallow from 'zustand/shallow';
import BtnIcon from '../components/atoms/btnIcon';
import CustomButton from '../components/atoms/RnBtn';
import {money, moneyUnid} from '../utils/format';

const json = [
  {
    id: 0,
    name: 'Monitor Gamer Xzeal XZ4015-1 / Negro / 27" / 1MS / 165HZ / Full HD / VA / G-Sync & Freesync / Frameless / HDMI - DP / 2 años de garantía',
    price: 1505.45,
    imageRef:
      'https://ddtech.mx/assets/uploads/62d53bd3affa20425ec529e128a00a86.png',
    quantity: 1,
  },
  {
    id: 1,
    name: 'Laptop Gamer MSI GeForce RTX 3070 MAX Q GDDR6 / i7-10800H / 16GB RAM DDR4 / 512GB PCIe NVMe / 15.6" FHD IPS-Level / Windows 10 Home / PULSE GL66-11UGKV',
    price: 8502.58,
    imageRef:
      'https://ddtech.mx/assets/uploads/thumb_f7d6d98ead70d6ca48056ab9c5e6f3c6.jpg',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Tarjeta de Video Nvidia GeForce RTX 2060 / 6GB GDDR6 / Gigabyte GV-N2060D6-6GD ​/ 3 AÑOS DE GARANTIA NACIONAL',
    price: 15505.45,
    imageRef:
      'https://ddtech.mx/assets/uploads/thumb_38b3a3eb9297398a53b3a8ddc76d84ba.png',
    quantity: 1,
  },
];
const Home = ({navigation}) => {
  const {cart, clearCart, addItem, removeItem, removeQuantity} = useCart(
    state => ({
      cart: state.cart,
      clearCart: state.clearCart,
      addItem: state.addItem,
      removeItem: state.removeItem,
      removeQuantity: state.removeQuantity,
    }),
    shallow,
  );
  const isEmpty = cart.length === 0;

  const renderItem = props => {
    const {id, name, price, imageRef, quantity} = props.item;
    return (
      <View style={Style.Item}>
        <Image style={Style.ItemImage} source={{uri: imageRef}} />
        <View style={Style.ItemContainerColumn}>
          <Text style={Style.ItemName}>{name}</Text>
          <View style={Style.ItemContainerRow}>
            <CounterInput
              onDecrease={() => removeQuantity(id)}
              onIncrease={() => addItem(props.item)}
              quantity={quantity}
            />
            <View style={Style.ItemContainerPrice}>
              <Text style={Style.ItemPriceTotal}>
                {money(price * quantity)}
              </Text>
              <Text style={Style.ItemPriceUnid}>{moneyUnid(price)}</Text>
            </View>
            <BtnIcon
              name={'trash-o'}
              size={20}
              color={'gray'}
              onPress={() => removeItem(id)}
            />
          </View>
        </View>
      </View>
    );
  };

  const Separator = () => <View style={Style.Separator} />;

  const FooterTotal = ({items}) => (
    <View>
      <Separator />
      <View style={Style.FootercontainerColumn}>
        <Text style={[Style.FooterText, Style.FooterTextBold]}>
          {cartQuantity(cart)} articulo(s)
        </Text>
        <FooterSubText
          style={Style.FooterText}
          text={'Subtotal'}
          text2={money(cartTotal(items))}
        />
        <FooterSubText
          style={Style.FooterText}
          text={'Costo de Envio'}
          text2={money(0) + '.00'}
        />
        <FooterSubText
          style={Style.FooterText}
          text={'Descuento'}
          text2={money(0) + '.00'}
        />
        <FooterSubText
          style={[Style.FooterTitle, Style.FooterTextBold]}
          text={'Total a pagar'}
          text2={money(cartTotal(items))}
        />
      </View>
    </View>
  );
  const FooterSticky = ({items}) => (
    <View style={Style.FooterStickycontainerRow}>
      <View style={Style.FooterStickycontainerColumn}>
        <Text style={Style.FooterStickySubText}>Total:</Text>
        <Text style={Style.FooterStickyTitle}>{money(cartTotal(items))}</Text>
      </View>
      <CustomButton
        style={Style.FooterStickyBtn}
        styleText={Style.FooterStickyBtnText}
        onPress={() => {
          addItem(json[1]);
        }}
        title={'Proceed with the purchase'}
      />
    </View>
  );
  const FooterSubText = ({text, text2, style}) => (
    <View style={Style.FootercontainerRow}>
      <Text style={style}>{text}</Text>
      <Text style={style}> {text2}</Text>
    </View>
  );

  if (isEmpty) {
    return (
      <View style={Style.EmptyContainer}>
        <Image
          style={Style.EmptyImage}
          source={require('../assets/img/shopping-cart.png')}
        />
        <Text style={Style.EmptyTitle}>Your Cart is Empty</Text>
        <Text style={Style.EmptySubTitle}>
          Looks like you haven't add any item to your cart yet
        </Text>
        <CustomButton
          style={Style.EmptyBtn}
          styleText={Style.EmptyBtnText}
          onPress={() => {
            addItem(json[0]);
          }}
          title={'SHOP NOW'}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={Style.Maincontainer}>
      <FlatList
        data={cart}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={() => <FooterTotal items={cart} />}
      />
      <FooterSticky items={cart} />
    </SafeAreaView>
  );
};

export default Home;
