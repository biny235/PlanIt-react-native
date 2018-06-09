import React, { Component } from 'react';
import { View } from 'react-native';
import { Title, Header, Left, Right, Body, Form, Item, Label, Input, Button, Icon, Picker, Text } from 'native-base';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { connect } from 'react-redux';
import { createPlan } from '../store/plans';

class PlanDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      time: '',
      calendar: '',
      category: ''
    };
  }

  _showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  }

  _hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  }

  _handleDatePicked = (date) => {
    this.setState({ time: date.toString().slice(16, 21) });
    this._hideDateTimePicker();
  }

  onChange = (value) => {
    this.setState({
      category: value
    });
  }

  goBackToMap = () => {
    this.props.navigation.navigate('Map');
  }

  onSave = () => {
    const plan = {
      category: this.state.category,
      time: this.state.time,
      date: this.state.calendar
    };
    this.props.createPlan(plan);
    this.props.navigation.navigate('Map');
  }

  render() {
    console.log('this.props :', this.props);
    return (
      <View style={{ marginTop: 40, backgroundColor: 'white' }}>
        <Header noShadow style={{ backgroundColor: 'tomato' }}>
          <Left>
            <Button transparent onPress={this.goBackToMap} >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={{ fontWeight: 'bold', color: 'white' }}>Select Date</Title>
          </Body>
          <Right />
        </Header>
        {/*Calendar*/}
        <Calendar
          minDate={new Date()}
          onDayPress={day => {
            this.setState({ calendar: day.dateString });
          }}
          monthFormat={'yyyy MM'}
          markedDates={{ [this.state.calendar]: { selected: true, disableTouchEvent: true, selectedDotColor: 'blue' } }}
          firstDay={1}
        />
        {/*Time*/}
        <View style={{ margin: 10 }}>
          <Label style={{ textAlign: 'center', fontWeight: 'bold', color: 'red' }}>Select Time</Label>
          <Item disabled>
            <Input
              style={{ alignItems: 'center' }}
              disabled
              placeholder={this.state.time}
            />
            <Icon name='information-circle' />
          </Item>
          <Button
            style={{ margin: 3 }}
            bordered
            danger
            block
            onPress={this._showDateTimePicker} >
            <Text style={{ fontWeight: 'bold', alignItems: 'center', color: 'red' }}>Choosing Time</Text>
          </Button>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            mode={'time'}
            is24Hour={true}
          />
        </View>
        {/*Category*/}
        <Form>
          <Picker
            iosIcon={<Icon name="ios-arrow-down-outline" />}
            placeholder="Select Category"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            style={{ width: 370 }}
            mode='dropdown'
            selectedValue={this.state.category}
            onValueChange={this.onChange}
          >
            <Picker.Item label='Activities' value='Activities' />
            <Picker.Item label='Hotels' value='Hotels' />
            <Picker.Item label='Restaruants' value='Restaruants' />
          </Picker>
        </Form>
        {/*Submit*/}
        <Button
          style={{ margin: 10, marginTop: 100 }}
          bordered
          danger
          block
          onPress={this.onSave} >
          <Text style={{ fontWeight: 'bold', alignItems: 'center', color: 'red' }}>Submit</Text>
        </Button>
      </View>
    );
  }
}

const mapState = (props) => {
  return {
    props
  };
};

const mapDispatch = (dispatch) => {
  return {
    createPlan: (plan) => dispatch(createPlan(plan))
  };
};

export default connect(mapState, mapDispatch)(PlanDetailsScreen);
