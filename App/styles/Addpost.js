import styled from 'styled-components';

export const InputWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #2e64e515;
  margin-top: 10%
`;

export const InputField = styled.TextInput`
  justify-content: center;
  align-items: center;
  font-size: 19px;
  text-align: center;
  width: 90%;
  margin-bottom: 15px;
  color: #54225e
`;

export const AddImage = styled.Image`
  width: 80%;
  height: 350px;
  border-radius: 10px;
  margin-bottom: 70px;
`;

export const StatusWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

export const SubmitBtn = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  background-color: #2e64e515;
  border-radius: 5px;
  padding: 10px 25px;
`;

export const SubmitBtnText = styled.Text`
  font-size: 18px;
  font-family: 'Lato-Bold';
  font-weight: bold;
  color: #2e64e5;
`;
