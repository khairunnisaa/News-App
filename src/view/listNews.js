import React, { Component } from 'react'
import { View, Image, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { 
    Card,
    CardItem,
    Body,
    Container,
    Content,
    Header,
    Title,
    Button,
    Left,
    Right,
    Icon
} from 'native-base'
import moment from 'moment';
import { connect } from 'react-redux'
import {
    LoadNewsFromId
} from '../actions';



export class listNews extends Component {
    static navigationOptions = {
        header: null
    }
    
    componentDidMount(){
        this.props.LoadNewsFromId(this.props.navigation.getParam('itemId', 'NO-ID'));
    }

    _keyExtractor = (item, index) => item.title + 1;

    _renderItem = ({item}) => (
        <Card 
        style={{borderRadius: 5}} 
        >
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ContentNews', {
            itemId: item.id,
            itemName: item.name,
            itemUrl: item.url
        })}>
            <CardItem cardBody>
                <Image source={{uri: item.urlToImage}} style={{height: 200, width: null, flex: 1, borderTopLeftRadius:5, borderTopRightRadius:5}}/>
            </CardItem>
            <CardItem style={{borderRadius: 5}}>
                <Body>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    {item.title}
                </Text>
                <Text style={{fontSize: 12, textAlign: 'justify'}}>
                    {item.description}
                </Text>
                <Text style={{fontSize: 12}}>
                    {moment(item.publishedAt).format('DD MMM YYYY')}
                </Text>
                </Body>
            </CardItem>
        </TouchableOpacity>
        </Card>
    );
    
    
    
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const itemName = navigation.getParam('itemName', 'NO-Name');
    return (
      <Container>
      <Header>
        <Left>
            <Button transparent
                onPress={() => this.props.navigation.goBack()}
            >
            <Icon name='arrow-back' />
            </Button>
        </Left>
        <Body>
            <Title>{itemName}</Title>
        </Body>
        <Right />
        </Header>
        
        {this.props.data == null ? 
          <View style={{flex: 1,justifyContent:'center', alignItems: 'center'}}>
            <ActivityIndicator size="large"/>
            <Text>Loading</Text>
          </View>
          :
          <Content padder>
          
          <FlatList
            data={this.props.data}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
          </Content>
        }
      </Container>
    )
  }
}

const mapStateToProps = state => {
    return{
      data: state.newsList.data
    }
}

const mapDispatchToProps = {
    LoadNewsFromId
}

export default connect(mapStateToProps, mapDispatchToProps)(listNews)
