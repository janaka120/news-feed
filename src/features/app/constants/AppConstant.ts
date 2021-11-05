import {CarouselModel} from './../models/App';

export const HomeLabels = {
  HEADER_NAV_TITLE: 'Carousel Demo App',
  HEADER_NAV_NAME: 'Home',
};

export const PAGE_COUNT = 4;
export const PAGE_SIZE = 12;
export const CAROUSEL_MODULE_SIZE = 3;
export const SAMPLE_CAROUSEL_INFO =
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.';

export const CarouselSource: CarouselModel = [
  {
    id: 1,
    title: 'First Block',
    description: SAMPLE_CAROUSEL_INFO,
    images: [
      'https://pixabay.com/get/gd9fa64ebbf18e5c77c6f3c30213376aa966da017220bacd867e444e947cd059b9f78c5fad41367a9ddf18b250bc1b4d2ed73ef73211792e1df0e4a46f3d249da_640.jpg',
      'https://pixabay.com/get/g4c2c4a194aabc95b2b9cc3a455028857f35ac3e68b588d90a3eb09c7024468c0da96a91886b4d6befa3e7f173b5080640fd988c56570bf8c77bc64704240950f_640.jpg',
      'https://pixabay.com/get/gc9dfc4e4c8c92bd82aa049e7bc7d079ceff78e9ec7e554a5da7ec7dd254d922abf10324055dd0f4157e009db277443113fcf87f475606bcbbdbd50d89b7a67d6_640.jpg',
    ],
  },
  {
    id: 2,
    title: 'Second Block',
    description: SAMPLE_CAROUSEL_INFO,
    images: [
      'https://pixabay.com/get/g43509fbc17f7b0fc14e18719c712f185476df51a8346a18413b10a88ea32b3d5c621b6c79f1e06260be2ec86d725fb22e6cd82aecba002c631039fde5baaa58a_640.jpg',
      'https://pixabay.com/get/g8ae6a7075201eae223dbfc937f5cab72268b07b7ab9db500a3e83f29018782e442c34d73a4e459057de92f80b94ef2616fed8c1b65b3fcd19a09721a3a6ae912_640.jpg',
      'https://pixabay.com/get/g1c6d83c7bddc737375f5dd549ea8ff3c4d59f2523543cd7b5f9cbb5cfdb10929bebccb37dd81ac4341df75ba8041d483c9d279dd0cee61955cdb621368db409f_640.jpg',
    ],
  },
  {
    id: 3,
    title: 'Third Block',
    description: SAMPLE_CAROUSEL_INFO,
    images: [
      'https://pixabay.com/get/g7f8cb605204f8527f9cc9bd8b256a822561eb43269253cda43026c5a3b83c7704f48ff8e6b0786f533cde4ad5c6953bb56fbf5c7a73b3ae369c3ea0903a24ce6_640.jpg',
      'https://pixabay.com/get/g46c52b2a0cd17fb8108c1352f1e8c16d6badc7508053ea255718c5d3d0cd02104a9d50d84991584e94ba7b7a6013efd7faf9cca701b3ac4d36eabfad8771da83_640.jpg',
      'https://pixabay.com/get/g36cfb9847b582d272efbf97c5ea2495a5853650c43fe3fb69f0be97eceaac0b3f4993256484bf0cc1755b7034ef91111692f9b409abf6f87f47633608c83f9a8_640.jpg',
    ],
  },
  {
    id: 5,
    title: 'Fourth Block',
    description: SAMPLE_CAROUSEL_INFO,
    images: [
      'https://pixabay.com/get/g991aeac9d063b1361f6ead54998d5e97f71a8e0abb26234dde7639409d01a42f6f97b4b4fd893e92fb7119f932bf541d4251566c8cbe8ea18fe3c0fc1b327bcd_640.jpg',
      'https://pixabay.com/get/g260ca1bb84aa8e6c40cf96d0199b3d4582ec74017495ed2410e79f2f77549505a4d76fb5cc33a5945afec3469f3fc6f9cefc16a8d3fa3925cf1b195c14497d63_640.jpg',
      'https://pixabay.com/get/geea738628f129b629622c7feacc7bc5d9bd470edd8716a0c78bcb3237d949141a27e275257d6a4171791fdb3cc11a39c49fbccb3097626abe41f3d90c50a6a7b_640.jpg',
    ],
  },
];
