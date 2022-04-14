import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {IconDrop, IconHouse, IconSun} from '../assets/icon';
import {colors} from '../constant/colors';
import {fonts} from '../constant/fonts';

const Logo = ({title}) => {
  if (title === 'Lux') {
    return (
      <IconSun
        width={widthPercentageToDP('8%')}
        height={heightPercentageToDP('8%')}
      />
    );
  } else if (title === 'Room') {
    return (
      <IconHouse
        width={widthPercentageToDP('8%')}
        height={heightPercentageToDP('8%')}
      />
    );
  } else {
    return (
      <IconDrop
        width={widthPercentageToDP('8%')}
        height={heightPercentageToDP('8%')}
      />
    );
  }
};

const DataSensorCard = ({title= '', value = '10', width, height, color}) => {
  return (
    <View style={styles.container(width, height, color)}>
      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{title}</Text>
          {Logo({title})}
        </View>
        <Text style={styles.dataValue}>
          {title === 'Lux' ? `${value} lx` : `${value} ${'\u00b0'}C`}{' '}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (width, height, color) => ({
    width: widthPercentageToDP(width),
    height: heightPercentageToDP(height),
    backgroundColor: color,
    borderRadius: 25,
    elevation: 3
  }),
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    marginBottom: 10,
    fontSize: fonts.size.md,
    color: colors.secondary,
    fontWeight: '700'
  },
  textWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dataValue: {
    fontSize: fonts.size.xl,
    color: colors.secondary,
    fontWeight: '700',
  },
});

export default DataSensorCard;
