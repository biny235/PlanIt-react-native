import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Right, Body, Content, Form, Item, Input, Button, Icon, Picker, Text, Separator, Row, Col } from 'native-base';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { connect } from 'react-redux';
import { updatePlan } from '../store/plans';

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
      date: this.state.calendar,
      userId: this.props.users.id
    };
    this.props.updatePlan(plan);
    this.props.navigation.navigate('Map');
  }

  render() {
    return (
      <Container style={{backgroundColor: 'white'}}>
        <Header style={{ backgroundColor: 'tomato' }}>
          <Left />
          <Body>
            <Text style={styles.title}>Plan Details</Text>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Map')}
            >
              <Icon
                type="Ionicons"
                name="ios-close-circle-outline"
                style={styles.closeButtonIcon}
              />
            </Button>
          </Right>
        </Header>
        <Content>
          {/*Calendar*/}
          <Separator bordered>
            <Text style={styles.separator}>Select a Date</Text>
          </Separator>
          <Calendar
            minDate={new Date()}
            onDayPress={day => {
              this.setState({ calendar: day.dateString });
            }}
            monthFormat={'yyyy MM'}
            markedDates={{ [this.state.calendar]: { selected: true, disableTouchEvent: true, selectedDotColor: 'tomato' } }}
            firstDay={1}
          />
          {/*Time*/}
          <Separator bordered>
            <Text style={styles.separator}>Select a Time</Text>
          </Separator>
          <Row style={{ flexDirection: 'row', padding: 4, justifyContent: 'flex-start', alignItems: 'center', marginLeft: 10, marginRight: 40 }}>
            <Col style={{ flexShrink: 1, alignSelf: 'center' }}>
              <Button
                style={{  }}
                bordered
                small
                onPress={this._showDateTimePicker} >
                <Text style={{ color: '#0091EA' }}>Time &gt;&gt;</Text>
              </Button>
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
                mode={'time'}
                is24Hour={true}
              />
            </Col>
            <Col style={{flex: 3}}>
              <Item regular>
                <Input
                  style={{ padding: 0, height: 30 }}
                  disabled
                  placeholder={this.state.time}
                />
                <Icon type="Ionicons" name="ios-time-outline" />
              </Item>
            </Col>
          </Row>
          {/*Category*/}
          <Separator bordered>
            <Text style={styles.separator}>Select a Category</Text>
          </Separator>
          <Form>
            <Picker
              iosIcon={<Icon style={{ color: '#0091EA' }} name="ios-arrow-down-outline" />}
              placeholder="Category..."
              style={{ flexBasis: 1 }}
              mode="dropdown"
              selectedValue={this.state.category}
              onValueChange={this.onChange}
            >
              <Picker.Item label="Activities" value="Activities" />
              <Picker.Item label="Hotels" value="Hotels" />
              <Picker.Item label="Restaruants" value="Restaruants" />
            </Picker>
          </Form>
          {/*Submit*/}
          <View style={styles.submitBtnView}>
            <Button
              style={{ margin: 10, backgroundColor: 'tomato' }}
              block
              onPress={this.onSave} >
              <Text style={{ fontWeight: 'bold', alignItems: 'center', color: 'white' }}>Submit</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapState = ({ users }) => {
  return {
    users
  };
};

const mapDispatch = (dispatch) => {
  return {
    updatePlan: (plan) => dispatch(updatePlan(plan)),
  };
};

const styles = {
  title: {
    color: 'white',
    fontSize: 18,
  },
  separator: {
    fontWeight: 'bold'
  },
  closeButtonIcon: {
    color: 'white'
  },
  closeWinTextView: {
    marginTop: 20,
    alignSelf: 'center',
  },
  closeWinText: {
    color: '#424242'
  },
  submitBtnView: {
    marginTop: 20
  },
};

export default connect(mapState, mapDispatch)(PlanDetailsScreen);
