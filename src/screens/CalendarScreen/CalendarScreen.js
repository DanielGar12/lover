import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars';

const CalendarScreen = () => {
  return (
    <View style={styles.view}>
      <Calendar
        style={styles.calendar}
        // vertical={true}
      />
    </View>
  )
}

export default CalendarScreen

const styles = StyleSheet.create({

    view: {
        
        height: 100,
        width: '100%'
    },

    calendar: {
    
        height: 780,
    }

});