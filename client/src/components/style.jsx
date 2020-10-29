import styled from 'styled-components';

export const AppStyle = styled.div`
  overflow: hidden;
  max-width: 1000px;
  padding: 0 300px 0 300px;
`;

export const ModalOpenButton = styled.button`
  display: inline-block;
  position: relative;
  text-align: center;
  width: auto;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 23px;
  padding-right: 23px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(34, 34, 34);
  background: rgb(255, 255, 255);
  &:hover {
    cursor: pointer;
    background-color: #d9d9d9;
  };
`;

export const ModalCloseButton = styled.div`
position: absolute;
left: 1rem;
top: 1rem;
width: 2rem;
height: 2rem;
padding: 0.5rem;
margin: 0 auto;
cursor: pointer;
`;

export const StyledModal = styled.div`
width: 70%;
height: 80vh;
position: relative;
margin: 0px auto;
padding: 20px;
background-color: #fff;
border-radius: 10px;
// transform: translateY(-850px);
transform: translateY(-75%);
// transform: scale(1);
// transition: transform 2s ease;
// transition: all 2s ease-in-out;
transition: transform 150ms ease-in-out;
font-family: Helvetica, Arial, sans-serif;
// overflow: hidden;
display: ${props => props.show ? 'flex' : 'none'};
z-index: 3;
`;

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
// height: 1000px;
// height: 100vh;
background: #0000003a;
// transition: opacity 0.2s ease;
// overflow: hidden;
// change to flex?
display: ${props => props.show ? 'flex' : 'none'};
z-index: 2;
`;

export const ScrollableReviewList = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const StyledEntireModal = styled.div`
  // overflow: hidden;
`;

export const LeftSideFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AllRatings = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RatingRow = styled.div`
  display: flex;
  // flex-direction: row;
  flex-direction ${props => props.show ? 'column' : 'row'};
  justify-content: space-around;
  padding-right: 50px;
`;

export const RatingItem = styled.div`
  display: flex;
  height: 35px;
  align-items: center;
  justify-content: center;
`;

export const RatingType = styled.span`
  width: 150px;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  padding-right: 50px;
`;

export const RatingBar = styled.div`
  height: 4px;
  // width: 130px;
  width: 10vh;
  // width: 800%;
  // position: relative;
  background: rgba(0, 0, 0, 0.14);
  // -moz-border-radius: 25px;
  // -webkit-border-radius: 25px;
  border-radius: 25px;
  margin: 2px;
  // padding-left: 50px;
`;

export const Meter = styled.span`
  display: block;
  height: 100%;
  width: ${(props) => (props.averageRating * 20)}%;
  border-radius: 25px;
  background: black;
  // position: relative;
  // overflow: hidden;
`;

export const RatingNumber = styled.span`
  width: 20px;
  text-align: center;
  padding: 2px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
`;

export const ReviewItemFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

export const UserInfoFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserAvatarFlex = styled.img`
  height: 60px;
  border-radius: 50%;
  padding: 5px 5px 5px 0;
  &:hover {
    cursor: pointer;
  };
`;

export const UserInfoTextFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserNameFlex = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding: 3px;
`;

export const DayPostedFlex = styled.div`
  color: grey;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  padding: 3px;
`;

export const ReviewFlex = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  padding: 5px 5px 5px 0;
`;

export const ButtonFlex = styled.span`
  font-weight: 500;
  text-decoration: underline;
  display: ${(props) => props.longReview ? 'block' : 'none'};
  &:hover {
    cursor: pointer;
  };
`;

export const ResponseItemFlex = styled.div`
display: flex;
flex-direction: column;
padding-left: 50px;
`;

export const HostInfoFlex = styled.div`
display: flex;
flex-direction: row;
`;

export const HostAvatarFlex = styled.img`
height: 60px;
border-radius: 50%;
padding: 7px;
&:hover {
  cursor: pointer;
};
`;

export const HostInfoTextFlex = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

export const HostNameFlex = styled.div`
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
font-weight: 600;
font-size: 16px;
line-height: 20px;
padding: 3px;
`;

export const ResponseDayPostedFlex = styled.div`
color: grey;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 20px;
padding: 3px;
`;

export const ResponseFlex = styled.div`
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 24px;
padding: 5px;
`;

export const ResponseButtonFlex = styled.span`
font-weight: bold;
text-decoration: underline;
display: ${(props) => props.longResponse ? 'block' : 'none'};
&:hover {
  cursor: pointer;
};
`;

export const ReviewsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ReviewColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Review = styled.div`
  flex: 1;
`;