import React, { Component } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import { View, Text, ListView } from 'react-native';
import { Thumbnail, ListItem, Button, Icon } from 'native-base';

class SuggestionAccordion extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     data: []
  //   };
  // }

  // componentWillMount() {
  //   console.log('component will mount', this.props.data);
  //   this.setState = { data: this.props.data };
  // }

  onFavoriteToggle = (indx, bool) => {
    let accordItemData = this.props.data[indx];
    accordItemData.isFavorite = bool;
    const newDataSet = Object.assign(this.props.data, accordItemData);
    this.setState = { data: newDataSet };
    this.props.changeState(newDataSet);
  }

  // helper function (add to global function file?)
  commentClipped = (str) => {
    const numChars = 22;
    return '"' + str.substr(0, numChars) + (str.length >= numChars ? '...' : '') + '"';
  };

  _renderHeader = (section) => {
    const { navigation } = this.props;
    return (
      <View style={styles.header}>
        <View style={{marginRight: 10}}>
          <Thumbnail small source={section.friendIcon} />
          <Text style={{fontSize: 10}}>{section.friend} says,</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 16, justifyContent: 'center'}}>{section.name}</Text>
          <Text style={{fontSize: 12, color: '#616161'}}>{section.city}, {section.state}</Text>
          <Text note style={{fontSize: 12, color: '#616161'}}>{this.commentClipped(section.comment)}</Text>
        </View>
        <View style={{}}>
          <Button
            rounded
            bordered
            style={{}}
            onPress={() => navigation.navigate('SuggestionDetails')}
          >
            <Icon
              style={{}}
              type="Ionicons"
              name="md-more"
            />
          </Button>
        </View>
      </View>
    );
  };

  _renderContent = (section) => {
    const { onFavoriteToggle } = this;
    // const { favorite } = this.props;
    return (
      <View>
        <View style={styles.content}>
          <Button
            transparent
            onPress={() => onFavoriteToggle(section.id, !this.props.isFavorite)}
          >
            <Icon type="MaterialIcons" name="favorite-border" style={styles.buttonIcons} />
          </Button>
          <Button
            transparent
            onPress={() => console.log('DONE THAT')}
          >
            <Icon type="MaterialIcons" name="done"  style={styles.buttonIcons} />
          </Button>
          <Button
            transparent
            onPress={() => console.log('HIDE')}
          >
            <Icon  type="MaterialIcons" name="visibility-off"  style={styles.buttonIcons} />
          </Button>
        </View>
      </View>
    );
  };

  render() {
    const { data } = this.props;
    // console.log('render', data)
    // const { data } = this.state;
    const { _renderContent, _renderHeader } = this;
    return (
      <View style={{}}>
        <Accordion
          sections={data}
          renderHeader={_renderHeader}
          renderContent={_renderContent}
          easing="easeOutCubic"
          activeOpacity={0}
          underlayColor="tomato"
          />
      </View>
    );
  }
}

const styles = {
  header: {
    margin: 0,
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#CED0CE'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FBE9E7',
  },
  buttonIcons: {
    fontSize: 20,
    color: '#9E9E9E',
  },
};

export default SuggestionAccordion;
