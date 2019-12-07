import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/ImageList.jsx';
import Popup from './components/Popup.jsx';
import RightIcon from './components/RightIcon.jsx';
import LeftIcon from './components/LeftIcon.jsx';
import style from './components/button.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      images: [
        {
          id: 1,
          url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        },
        {
          id: 2,
          url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        },
        {
          id: 3,
          url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        },
        {
          id: 4,
          url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        },
        {
          id: 5,
          url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        },
        {
          id: 6,
          url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        },
        {
          id: 7,
          url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        },
        {
          id: 8,
          url: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg",
        }
      ]
    };
    this.togglePopup = this.togglePopup.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleScrollRight = this.handleScrollRight.bind(this);
    this.handleScrollLeft = this.handleScrollLeft.bind(this);
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  handleClick(id) {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  handleScrollRight() {
    document.getElementById("row").scrollLeft += 200;
  }
  handleScrollLeft() {
    document.getElementById("row").scrollLeft -= 200;
  }
  render() {

    return (
      <div>

        <div>
          <div>
            <ImageList clicker={this.handleClick} images={this.state.images} />
            {this.state.showPopup ? <Popup closePopup={this.togglePopup.bind(this)} /> : null}

            <button className={style.leftButton} onClick={() => this.handleScrollLeft()}>
              <LeftIcon width={48} fill="white" ></LeftIcon>
            </button>

            <button className={style.rightButton} onClick={() => this.handleScrollRight()}>
              <RightIcon width={48} fill="white" ></RightIcon>
            </button>



          </div>
        </div>


      </div>

    );

  }
}
ReactDOM.render(<App />, document.getElementById('app'));