import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
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
  Right
} from 'native-base';
import { connect } from 'react-redux';
import {
  LoadNewsSource,
  LoadNewsFromId,

} from '../actions';

export class homepage extends Component {
  static navigationOptions = {
    header: null
  }

  componentDidMount(){
    this.props.LoadNewsSource();
    
  }
  
  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <Card 
      style={{borderRadius: 5}} 
      >
      <TouchableOpacity onPress={() => this.props.navigation.navigate('ListNews', {
        itemId: item.id,
        itemName: item.name
      })}>
        <CardItem style={{borderRadius: 5}}>
            <Body>
              
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {item.name} 
              </Text>
              <Text style={{fontSize: 12, textAlign: 'justify'}}>
                {item.description}
              </Text>
              <Text style={{fontSize: 12}}>
                {item.url}
              </Text>
              {/* 
                <Button block
                  title="Go to Details"
                  onPress={() => this.props.navigation.navigate('ListNews')}
                />
              */}
            </Body>
          </CardItem>
      </TouchableOpacity>
    </Card>
  );


  render() {
    return (
      <Container>
        <Header noLeft>
          <Left/>
          <Body>
            <Title>Headline News</Title>
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
    data: state.newsSource.data
  }
}

const mapDispatchToProps = {
  LoadNewsSource,
  
  // LoadNewsFromId
}

export default connect(mapStateToProps, mapDispatchToProps)(homepage)