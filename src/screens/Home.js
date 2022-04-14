import { firebase } from '@react-native-firebase/database';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP
} from 'react-native-responsive-screen';
import { IconPLant } from '../assets/icon';
import { DataSensorCard } from '../components';
import { showMessage } from '../constant/alert';
import { colors } from '../constant/colors';
import { fonts } from '../constant/fonts';
import { floatFormat } from '../constant/utils';

const Home = () => {
  const [isTriggerEnabled, setIsTriggerEnabled] = useState(false);
  const [interuptMode, setInteruptMode] = useState(false);
  const [dataSensor, setDataSensor] = useState(null);
  // const dbUrl =
  //   'https://hidroponics-6bd7f-default-rtdb.asia-southeast1.firebasedatabase.app/';
  const dbUrl =
  'https://hidroponics-8121d-default-rtdb.asia-southeast1.firebasedatabase.app/';

  const triggerSprayer = async () => {
    if (interuptMode) {
      setIsTriggerEnabled(v => !v);
      await firebase
        .app()
        .database(dbUrl)
        .ref('31101')
        .update({
          sprayerTrigger: +!isTriggerEnabled,
        });
      showMessage(
        `Sprayer ${!isTriggerEnabled ? 'Active...' : 'Inactive...'}`,
        !isTriggerEnabled ? 'success' : 'error',
      );
    }else{
      showMessage("Cannot control sprayer, sprayer is already active!", "error");
    }
  };

  const fetchFirebase = () => {
    firebase
    .app()
    .database(dbUrl)
    .ref('/31101')
    .on('value', ss => {
      setDataSensor(ss.val());
      //sprayer trigger state:
      if(ss.val().sprayerTrigger == 1){
        setIsTriggerEnabled(true);
      }else{
        setIsTriggerEnabled(false);
      }
      //sprayer state for trigger interupt mode
      if (ss.val().sprayerState == 1) {
        setInteruptMode(false);
      } else {
        setInteruptMode(true);
      }
    });
  }
  useEffect(() => {
    fetchFirebase();
  }, []);

  const isSetPointAchieved = roomTemp => {
    if (roomTemp >= floatFormat(dataSensor?.setPointUpper, 2)) {
      return 'Over';
    } else if (
      roomTemp >= floatFormat(dataSensor?.setPointBottom, 2) &&
      roomTemp <= floatFormat(dataSensor?.setPointUpper, 2)
    ) {
      return 'In Range';
    } else {
      return 'Under';
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}>
        <View>
          <Text style={styles.titleText}>Smart Hidroponics</Text>
          <Text style={styles.subtitleText}>
            (IoT for Control & Monitoring System)
          </Text>
        </View>
        <IconPLant
          width={widthPercentageToDP('8%')}
          height={heightPercentageToDP('8%')}
        />
      </View>
      <View style={styles.controlWrapper}>
        <Text style={styles.setPointText}>
          Set Point : {floatFormat(dataSensor?.setPointBottom, 2)} &deg;C -{' '}
          {floatFormat(dataSensor?.setPointUpper, 2)} &deg;C
        </Text>
        <Text style={styles.setPointPercentage}>
          {isSetPointAchieved(floatFormat(dataSensor?.roomTemp, 2))} (
          {floatFormat(dataSensor?.roomTemp, 2)} &deg;C)
        </Text>
      </View>

      <View style={styles.controlWrapper}>
        <Text
          style={{color: colors.text.secondary, fontSize: fonts.size.normal}}>
          Sprayer :
          <Text
            style={{
              color: interuptMode? colors.text.secondary : "red",
              fontWeight: '700',
              fontSize: fonts.size.normal,
            }}>
            {interuptMode? " Interupt mode is active" : " Interupt mode is inactive"}
          </Text>
        </Text>
        <Switch
          trackColor={{false: '#767577', true: 'green'}}
          thumbColor={'#ffff'}
          onValueChange={triggerSprayer}
          value={isTriggerEnabled}
        />
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.contentLine}></View>
        <Text style={styles.contentText}>Monitoring Sensor</Text>
        <View
          style={{
            marginVertical: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <DataSensorCard
            width={'40%'}
            height={'22%'}
            color={colors.disable}
            title="Water"
            value={floatFormat(dataSensor?.waterTemp, 2)}
          />
          <DataSensorCard
            width={'40%'}
            height={'22%'}
            color={colors.disable}
            title="Room"
            value={floatFormat(dataSensor?.roomTemp, 2)}
          />
        </View>
        <DataSensorCard
          width={'85%'}
          height={'22%'}
          color={colors.disable}
          title="Lux"
          value={floatFormat(dataSensor?.lux, 2)}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: widthPercentageToDP('7%'),
    paddingVertical: widthPercentageToDP('7%'),
    position: 'relative',
  },
  content: {
    height: heightPercentageToDP('65%'),
    backgroundColor: colors.background,
    borderTopRightRadius: widthPercentageToDP('7%'),
    borderTopLeftRadius: widthPercentageToDP('7%'),
    position: 'absolute',
    zIndex: 99999,
    bottom: 0,
    left: 0,
    right: 0,
    padding: widthPercentageToDP('7%'),
  },
  contentText: {
    color: colors.text.primary,
    fontSize: fonts.size.md,
    fontWeight: '600',
    marginTop: widthPercentageToDP('6%'),
  },
  titleText: {
    color: colors.text.secondary,
    fontSize: fonts.size.xl,
    fontWeight: '600',
  },
  subtitleText: {
    color: colors.text.secondary,
    fontSize: fonts.size.normal,
    fontWeight: '400',
    marginBottom: widthPercentageToDP('8%'),
    marginTop: 5,
  },
  setPointText: {
    color: colors.text.secondary,
    fontSize: fonts.size.normal,
  },
  setPointPercentage: {
    fontSize: fonts.size.normal,
    fontWeight: '700',
    color: colors.text.secondary,
  },
  controlWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: widthPercentageToDP('6%'),
  },
  setPointWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentLine: {
    width: widthPercentageToDP('10%'),
    height: heightPercentageToDP('0.7%'),
    borderRadius: 20,
    backgroundColor: colors.disable,
    alignSelf: 'center',
  },
});

export default Home;
