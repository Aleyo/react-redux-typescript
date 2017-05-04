import * as React from 'react';
import { sendedPhotoUrl } from '../../models/Photos';

interface AlbumEntryProps extends sendedPhotoUrl {
    sendPhoto : (url) => void,
    photoResult? : any,
    sendedPhotoUrl : string
}

class AlbumEntry extends React.Component<AlbumEntryProps, any> {

   constructor() {
        super();
        this.state = {
            inputVal : ''
        }
    }

  render() {
    const onSubmitClick = () => {
        console.log("Buď pozdraven" , this.state.inputVal);
        this.props.sendPhoto(this.state.inputVal);
    }
    const onInputChange = (element : any) => {
        this.setState(
            {
                inputVal: element.target.value
            }
        )
    }
    
    return (
      <div>
          <input type="text" name="imageUrlEntry" value={this.state.inputVal} onChange={onInputChange} />
          <button type="submit" onClick={onSubmitClick} name="imageUrlSubmitButton">Odešli</button>
          {/*<div>{this.props.response}</div>*/}
          <div>{
              JSON.stringify(this.props.photoResult)
              }</div>
      </div>
    );
  }
}

export default AlbumEntry;