import { connect } from 'react-redux';
import { showPhotos } from '../actions';
import { AlbumList } from '../components/album/AlbumList';

 const mapStateToProps = (state: any) => {
   return {
     photos: state.showPhotos.data
   };
 };

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    onClick: () => {
      dispatch(showPhotos(ownProps.id));
    }
  };
};

const Album = connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumList as any);

export default Album;
