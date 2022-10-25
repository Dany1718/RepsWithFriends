import React, { useContext, useEffect } from 'react'
import Text from "../components/Text"
import styled from "styled-components"
import LottieView from 'lottie-react-native'
import { UserContext } from '../context/UserContext'
import { FirebaseContext } from "../context/FireBaseContext";
export default LoadingScreen = () => {

  const [_,setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);


useEffect(() => {
    setTimeout(async () => {

      const user = firebase.getCurrentUser();
      if (user) {
        
        const userInfo = await firebase.getUserInfo(user.uid);
        setUser({
          isLoggedIn: true,
          email: userInfo.email,
          uid: userInfo.uid,
          username: userInfo.username,
          profilePhotoUrl: userInfo.profilePhotoUrl
        })
      } else {
        setUser((state) => ({...state, isLoggedIn: false}));
      }
    }, 750);
},[]);
  return (
    <Container>
      <Text title color="#FFFFFF">Reps With Friends</Text>

      <LottieView
        source={require("../../assets/weightLoading.json")}
        autoPlay
        loop
        style={{ width: "100%"}}
      />
    </Container>
  )
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #00A36C;
`;