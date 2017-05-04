import * as React from 'react';
import { Photos } from '../../models/Photos';

interface PhotosProp extends Photos {
  onClick: () => void;
  photos: Object[];
}

export class AlbumList extends React.Component<PhotosProp, any> {

  componentDidMount = () => {
    let { onClick } = this.props;
    console.error('hej mam to');
    onClick();
  }

  componentWillUnmount = () => {
    console.warn('kdyz mizim');
  }

  render() {

    let { photos, onClick } = this.props;
    
    return (
      <div>
      {
        photos && photos.map((photo: any) =>
          <img src={photo.url} height="30" width="30" />
        ) 
      }
      </div>
    );
  }
}