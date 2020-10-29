import React from 'react';
import { AllRatings, RatingRow, RatingItem, RatingType, RatingBar, Meter, RatingNumber } from './style.jsx';


class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.averageRatings) {
      return null;
    } else {
      // this looks bad and can definitely refactor but make it work first, clean up later
      return (
        <AllRatings>
          <RatingRow show={this.props.show}>
            <RatingItem>
              <RatingType>Cleanliness</RatingType>
              <span>
                <RatingBar>
                  <Meter averageRating={this.props.averageRatings.cleanliness}></Meter>
                </RatingBar>
              </span>
              <RatingNumber>{this.props.averageRatings.cleanliness}</RatingNumber>
            </RatingItem>
            <RatingItem>
              <RatingType>Accuracy</RatingType>
              <span>
                <RatingBar>
                  <Meter averageRating={this.props.averageRatings.accuracy}></Meter>
                </RatingBar>
              </span>
              <RatingNumber>{this.props.averageRatings.accuracy}</RatingNumber>
            </RatingItem>
          </RatingRow>
          <RatingRow show={this.props.show}>
            <RatingItem>
              <RatingType>Communication</RatingType>
              <span>
                <RatingBar>
                  <Meter averageRating={this.props.averageRatings.communication}></Meter>
                </RatingBar>
              </span>
              <RatingNumber>{this.props.averageRatings.communication}</RatingNumber>
            </RatingItem>
            <RatingItem>
              <RatingType>Location</RatingType>
              <span>
                <RatingBar>
                  <Meter averageRating={this.props.averageRatings.location}></Meter>
                </RatingBar>
              </span>
              <RatingNumber>{this.props.averageRatings.location}</RatingNumber>
            </RatingItem>
          </RatingRow>
          <RatingRow show={this.props.show}>
            <RatingItem>
              <RatingType>Check-in</RatingType>
              <span>
                <RatingBar>
                  <Meter averageRating={this.props.averageRatings.checkIn}></Meter>
                </RatingBar>
              </span>
              <RatingNumber>{this.props.averageRatings.checkIn}</RatingNumber>
            </RatingItem>
            <RatingItem>
              <RatingType>Value</RatingType>
              <span>
                <RatingBar>
                  <Meter averageRating={this.props.averageRatings.value}></Meter>
                </RatingBar>
              </span>
              <RatingNumber>{this.props.averageRatings.value}</RatingNumber>
            </RatingItem>
          </RatingRow>
        </AllRatings>
      )
    }
  }
}

export default Ratings;
