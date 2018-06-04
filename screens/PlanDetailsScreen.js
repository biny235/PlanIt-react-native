import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Body, Form, Item, Label, Input, Button, Icon, Picker, Text } from 'native-base';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class PlanDetailsScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDateTimePickerVisible: false,
      time: '',
      calendar: '',
      category: ''
    };

    this._showDateTimePicker = this._showDateTimePicker.bind(this);
    this._hideDateTimePicker = this._hideDateTimePicker.bind(this);
    this._handleDatePicked = this._handleDatePicked.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  _showDateTimePicker() {
    this.setState({ isDateTimePickerVisible: true });
  }

  _hideDateTimePicker() {
    this.setState({ isDateTimePickerVisible: false });
  }

  _handleDatePicked(date) {
    this.setState({ time: date.toString().slice(16, 21) });
    this._hideDateTimePicker();
  }

  onChange(value) {
    this.setState({
      category: value
    });
  }

  render() {
    console.log(this.props.navigation);
    console.log('this.state :', this.state);
    return (
      <Container>
        <Content>
          <Body style={{ marginTop: 10 }}>
            {/*Calendar*/}
            <Label>Select date</Label>
            <Calendar
              minDate={new Date()}
              onDayPress={day => {
                this.setState({ calendar: day.dateString })
              }}
              monthFormat={'yyyy MM'}
              markedDates={{ [this.state.calendar]: { selected: true, disableTouchEvent: true, selectedDotColor: 'blue' } }}
              firstDay={1}
            />
            {/*Time*/}
            <View style={{ margin: 10 }}>
              <Label>Select time</Label>
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
                primary
                block
                onPress={this._showDateTimePicker} >
                <Text style={{ alignItems: 'center', color: 'white' }}>Select Time</Text>
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
                style={{ width: undefined }}
                mode='dropdown'
                selectedValue={this.state.category}
                onValueChange={this.onChange}
              >
                <Picker.Item label='Activities' value='Activities' />
                <Picker.Item label='Movies' value='Movies' />
                <Picker.Item label='Restaruants' value='Restaruants' />
              </Picker>
            </Form>
            {/*Submit*/}
            <Button
              style={{ margin: 3, marginTop: 20 }}
              primary
              block
              onPress={this._showDateTimePicker} >
              <Text style={{ alignItems: 'center', color: 'white', }}>Submit</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}
