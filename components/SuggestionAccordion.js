import React, { Component } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import { View, Text } from 'react-native';
import { Thumbnail, Button, Icon } from 'native-base';

class SuggestionAccordion extends Component {

  toggleSuggestField = (indx, field) => {
    let accordItemData = this.props.data[indx];
    accordItemData[field] = !accordItemData[field];
    const newDataSet = Object.assign(this.props.data, accordItemData);
    this.setState = { data: newDataSet };
    this.props.changeState(newDataSet);
  }

  // helper function
  commentClipped = (str) => {
    const numChars = 22;
    return '"' + str.substr(0, numChars) + (str.length >= numChars ? '...' : '') + '"';
  };

  renderHeader = (section) => {
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
            onPress={() => navigation.navigate('SuggestionDetails', { data: section })}
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

  styleIcons = (active, activeColor) => {
    let iconStyles = {};
    if (active) {
      iconStyles.color = activeColor;
    } else {
      iconStyles.color = '#9E9E9E';
    }
    const iconFontSize = 20;
    iconStyles.fontSize = iconFontSize;
    return iconStyles;
  }

  renderContent = (section) => {
    const { toggleSuggestField } = this;

    // set icon styles
    section.isFavorite ? styles.favoriteIcon = this.styleIcons(true, 'tomato') : styles.favoriteIcon = this.styleIcons(false);
    section.doneThat ? styles.doneIcon = this.styleIcons(true, '#0D47A1') : styles.doneIcon = this.styleIcons(false);
    section.isHidden ? styles.hiddenIcon = this.styleIcons(true, '#0D47A1') : styles.hiddenIcon = this.styleIcons(false);

    return (
      <View>
        <View style={styles.content}>
          <Button
            transparent
            onPress={() => toggleSuggestField(section.id, 'isFavorite')}
          >
            <Icon type="MaterialIcons" name={section.isFavorite ? 'favorite' : 'favorite-border'} style={styles.favoriteIcon} />
          </Button>
          <Button
            transparent
            onPress={() => toggleSuggestField(section.id, 'doneThat')}
          >
            <Icon type="MaterialIcons" name="done" style={styles.doneIcon} />
          </Button>
          <Button
            transparent
            onPress={() => toggleSuggestField(section.id, 'isHidden')}
          >
            <Icon type="MaterialIcons" name="visibility-off"  style={styles.hiddenIcon} />
          </Button>
        </View>
      </View>
    );
  };

  render() {
    const { data } = this.props;
    const { renderContent, renderHeader } = this;
    return (
      <View style={{}}>
        <Accordion
          sections={data}
          renderHeader={renderHeader}
          renderContent={renderContent}
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
};

export default SuggestionAccordion;
