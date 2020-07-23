import elements from '../utilities/elements';

const setBg = (weather) => {
  const { bodyHtml } = elements.el();
  switch (weather) {
    case 'Clouds':
      bodyHtml.classList = 'cloudyBg bgImgProperties h-full';
      break;
    case 'Clear':
      bodyHtml.classList = 'clearBg bgImgProperties h-full';
      break;
    case 'Sunny':
      bodyHtml.classList = 'sunBg bgImgProperties h-full';
      break;
    case 'Thunderstorm':
      bodyHtml.classList = 'stormBg bgImgProperties h-full';
      break;
    case 'Rain':
      bodyHtml.classList = 'rainyBg bgImgProperties h-full';
      break;
    case 'Snowy':
      bodyHtml.classList = 'snowBg bgImgProperties h-full';
      break;
    default:
      bodyHtml.classList = 'mainBg bgImgProperties h-full';
  }
};

export default { setBg };