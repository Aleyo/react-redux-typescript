import { connect } from 'react-redux';
import { showPhotos, submitPhoto} from '../actions';
import AlbumEntry from '../components/album/AlbumEntry';

 const mapStateToProps = (state: any) => {
   return {
      photoResult : state.uploadedPhotos.uploadedPhoto
   };
 };

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    sendPhoto: (url) => {
      dispatch(submitPhoto(url))
    }
  };
};

const AlbumEntryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumEntry as any);

export default AlbumEntryContainer;
