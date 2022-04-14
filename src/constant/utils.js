import moment from 'moment';

export const convertToRupiah = angka => {
  var rupiah = '';
  var angkarev = angka.toString().split('').reverse().join('');
  for (var i = 0; i < angkarev.length; i++)
    if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
  return rupiah
    .split('', rupiah.length - 1)
    .reverse()
    .join('');
};

const getFormatedDate = date => {
  return moment(date).format('DD-MM-YYYY').toString();
};

export const validateEmail = email => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email.toString());
};

export const validateNumber = number => {
  var pattern = /^\d+$/;
  return pattern.test(number);
};

export const floatFormat = (data, nFormat) => {
  return parseFloat(data).toFixed(nFormat)
}
