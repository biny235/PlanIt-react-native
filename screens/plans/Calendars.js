import { Calendar } from 'react-native-calendars';
import { View, Text } from 'react-native';
import React from 'react';

export default class Calendars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: '',
    }
  }

  render() {
    return (
      <View>
        <Text>{`\n\n`}</Text>
        <Calendar
          minDate={new Date()}
          onDayPress={day => {

            this.setState({ selected: day.dateString })
            console.log('selected day', day);
          }}
          monthFormat={'yyyy MM'}
          markedDates={{ [this.state.selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'blue' } }}
          firstDay={1}
        />

      </View>
    )
  }
}


