import {convertNumberToWord} from './../../../utils/Helper';
import {
  CAROUSEL_MODULE_SIZE,
  SAMPLE_CAROUSEL_INFO,
} from './../constants/AppConstant';
import {ApiKey, ApiEndPoint} from './../../../api/ApiConstants';
import {
  GetCarouselListParams,
  CarouselModel,
  CarouselPayloadResponse,
  CarouselItem,
} from './../models/App';
import API from '../../../api';

const formatCarouselData = (
  images: Array<string>,
  id: number,
): CarouselItem | null => {
  if (images && Array.isArray(images)) {
    return {
      id,
      title: `${convertNumberToWord(id)} Block`,
      images,
      description: SAMPLE_CAROUSEL_INFO,
    };
  }
  return null;
};

export const getCarouselList = async (params: GetCarouselListParams) => {
  const returnVal: CarouselPayloadResponse = {
    success: false,
  };
  try {
    const {perPageSize} = params;
    const url = `${ApiEndPoint.BASE_URL}?key=${ApiKey}&image_type=photo&pretty=true&page=1&per_page=${perPageSize}`;
    const res = await API.get(url);
    console.log('--getCarouselList--', res.data.hits.length, params);
    if (
      res &&
      res.status === 200 &&
      res.data &&
      res.data.total !== undefined &&
      res.data.totalHits !== undefined &&
      Array.isArray(res.data.hits)
    ) {
      const validList: CarouselModel = [];
      let i = 0;
      let id = i;
      for (i; i < perPageSize; i) {
        id++;
        let j = i;
        const imageList = [];
        for (j; j < i + CAROUSEL_MODULE_SIZE; j++) {
          const item = res.data.hits[j];
          if (item && item.webformatURL) {
            imageList.push(item.webformatURL);
          }
        }
        i = j;
        const validObj = formatCarouselData(imageList, id);
        if (validObj) {
          validList.push(validObj);
        }

        returnVal.success = true;
        returnVal.data = validList;
      }
      if (validList.length !== perPageSize) {
        console.log(
          '--getCarouselList validation issue --',
          validList.length,
          perPageSize,
        );
      }
    } else {
      throw `status_${res.status}`;
    }
  } catch (e) {
    console.log('--getCarouselList error--', e?.message ?? e, params);
    returnVal.msg =
      e?.response?.data?.errorMessage || e?.message || 'Unable to fetch list.';
  }
  return returnVal;
};
