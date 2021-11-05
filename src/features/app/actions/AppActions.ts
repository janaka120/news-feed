import {getCarouselList} from './../services/CarouselSvc';
import {GetCarouselListParams} from './../models/App';
import {AppThunk, AppDispatch} from '../../../reducers/RootReducer';
import {
  apiCallStarts,
  fetchCarouselListSuccess,
  apiCallError,
} from '../reducers/AppReducer';

export const fetchCarouselList =
  (section: GetCarouselListParams): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      console.log('section >>>', section);
      dispatch(apiCallStarts());
      const response = await getCarouselList(section);
      const {success, data, msg} = response;
      if (success && data) {
        dispatch(fetchCarouselListSuccess(data));
      } else {
        dispatch(apiCallError());
        // showErrorMsgWithAction(() => dispatch(fetchPricingSheetList(lastFetchedParams)), ErrorMsg.PRICING_SHEETS_LOADING_ERROR);
      }
    } catch (e) {}
  };
