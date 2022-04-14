const decisionHelper = (decisionType, bottomValue, upperValue) => {
  if (decisionType >= bottomValue && decisionType <= upperValue) {
    return 'normal';
  } else if (decisionType < bottomValue) {
    return 'under';
  } else {
    return 'over';
  }
};

export const getHeightBodyDecision = (sex, age, height) => {
  if (sex === 1) {
    switch (age) {
      case 0:
        return decisionHelper(height, 46.3, 53.4);
      case 1:
        return decisionHelper(height, 51.1, 58.4);
      case 2:
        return decisionHelper(height, 54.7, 62.2);
      case 3:
        return decisionHelper(height, 57.6, 65.3);
      case 4:
        return decisionHelper(height, 60.0, 67.8);
      case 5:
        return decisionHelper(height, 61.9, 69.9);
      case 6:
        return decisionHelper(height, 63.6, 71.6);
      case 7:
        return decisionHelper(height, 65.1, 73.2);
      case 8:
        return decisionHelper(height, 66.5, 74.7);
      case 9:
        return decisionHelper(height, 67.7, 76.2);
      case 10:
        return decisionHelper(height, 69.0, 77.6);
      case 11:
        return decisionHelper(height, 70.2, 78.9);
      case 12:
        return decisionHelper(height, 71.3, 80.2);
      default:
        return 'normal';
    }
  }
  // perempuan:
  else {
    switch (age) {
      case 0:
        return decisionHelper(height, 45.6, 52.7);
      case 1:
        return decisionHelper(height, 50.0, 57.4);
      case 2:
        return decisionHelper(height, 53.2, 60.9);
      case 3:
        return decisionHelper(height, 55.8, 63.8);
      case 4:
        return decisionHelper(height, 58.0, 66.2);
      case 5:
        return decisionHelper(height, 59.9, 68.2);
      case 6:
        return decisionHelper(height, 61.5, 70.0);
      case 7:
        return decisionHelper(height, 62.9, 71.6);
      case 8:
        return decisionHelper(height, 64.3, 73.2);
      case 9:
        return decisionHelper(height, 65.6, 74.7);
      case 10:
        return decisionHelper(height, 66.8, 76.1);
      case 11:
        return decisionHelper(height, 68.0, 77.5);
      case 12:
        return decisionHelper(height, 69.2, 78.9);
      default:
        return 'normal';
    }
  }
};

export const getWeightBodyDecision = (sex, age, weight) => {
  //laki-laki
  if (sex === 1) {
    switch (age) {
      case 0:
        return decisionHelper(weight, 2.5, 4.3);
      case 1:
        return decisionHelper(weight, 3.4, 5.7);
      case 2:
        return decisionHelper(weight, 4.4, 7.0);
      case 3:
        return decisionHelper(weight, 5.1, 7.9);
      case 4:
        return decisionHelper(weight, 5.6, 8.6);
      case 5:
        return decisionHelper(weight, 6.1, 9.2);
      case 6:
        return decisionHelper(weight, 6.4, 9.7);
      case 7:
        return decisionHelper(weight, 6.7, 10.2);
      case 8:
        return decisionHelper(weight, 7.0, 10.5);
      case 9:
        return decisionHelper(weight, 7.2, 10.9);
      case 10:
        return decisionHelper(weight, 7.5, 11.2);
      case 11:
        return decisionHelper(weight, 7.4, 11.5);
      case 12:
        return decisionHelper(weight, 7.8, 11.8);
      default:
        return 'normal';
    }
  }
  // perempuan:
  else {
    switch (age) {
      case 0:
        return decisionHelper(weight, 2.4, 4.2);
      case 1:
        return decisionHelper(weight, 3.2, 5.4);
      case 2:
        return decisionHelper(weight, 4.0, 6.5);
      case 3:
        return decisionHelper(weight, 4.6, 7.4);
      case 4:
        return decisionHelper(weight, 5.1, 8.1);
      case 5:
        return decisionHelper(weight, 5.5, 8.7);
      case 6:
        return decisionHelper(weight, 5.8, 9.2);
      case 7:
        return decisionHelper(weight, 6.1, 9.6);
      case 8:
        return decisionHelper(weight, 6.3, 10.0);
      case 9:
        return decisionHelper(weight, 6.6, 10.4);
      case 10:
        return decisionHelper(weight, 6.8, 10.7);
      case 11:
        return decisionHelper(weight, 7.0, 11.0);
      case 12:
        return decisionHelper(weight, 7.1, 11.3);
      default:
        return 'normal';
    }
  }
};

export const getHeadSizeDecision = (sex, age, headSize) => {
  //laki-laki
  if (sex === 1) {
    switch (age) {
      case 0:
        return decisionHelper(headSize, 32.2, 36.9);
      case 1:
        return decisionHelper(headSize, 35.1, 39.5);
      case 2:
        return decisionHelper(headSize, 36.9, 41.3);
      case 3:
        return decisionHelper(headSize, 38.3, 42.7);
      case 4:
        return decisionHelper(headSize, 39.4, 43.9);
      case 5:
        return decisionHelper(headSize, 40.3, 44.8);
      case 6:
        return decisionHelper(headSize, 41.0, 45.6);
      case 7:
        return decisionHelper(headSize, 41.7, 46.3);
      case 8:
        return decisionHelper(headSize, 42.2, 46.9);
      case 9:
        return decisionHelper(headSize, 42.6, 47.4);
      case 10:
        return decisionHelper(headSize, 43.0, 47.8);
      case 11:
        return decisionHelper(headSize, 43.4, 48.2);
      case 12:
        return decisionHelper(headSize, 43.6, 48.5);
      default:
        return 'normal';
    }
  }
  // perempuan:
  else {
    switch (age) {
      case 0:
        return decisionHelper(headSize, 31.7, 36.1);
      case 1:
        return decisionHelper(headSize, 34.3, 38.8);
      case 2:
        return decisionHelper(headSize, 36.0, 40.5);
      case 3:
        return decisionHelper(headSize, 37.2, 41.9);
      case 4:
        return decisionHelper(headSize, 38.2, 43.0);
      case 5:
        return decisionHelper(headSize, 39.0, 43.9);
      case 6:
        return decisionHelper(headSize, 39.7, 44.6);
      case 7:
        return decisionHelper(headSize, 40.4, 45.3);
      case 8:
        return decisionHelper(headSize, 40.9, 45.9);
      case 9:
        return decisionHelper(headSize, 41.3, 46.3);
      case 10:
        return decisionHelper(headSize, 41.7, 46.8);
      case 11:
        return decisionHelper(headSize, 42.0, 47.1);
      case 12:
        return decisionHelper(headSize, 42.3, 47.5);
      default:
        return 'normal';
    }
  }
};

export const getTemperatureDecision = (temperature) => {
    return decisionHelper(temperature, 36.5, 37);
};
