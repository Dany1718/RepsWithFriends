import React, {useContext} from 'react'
import styled from "styled-components"
import { UserContext } from '../context/UserContext'
import { FirebaseContext } from '../context/FireBaseContext'
import { Entypo, Ionicons } from "@expo/vector-icons"
import Text from "../components/Text"
import tempDataProfile from '../tempDataProfile'


export default ProfileScreen = () => {
  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const logOut = async() =>{
    const loggedOut = await firebase.logOut();

    if (loggedOut) {
      setUser(state => ({...state, isLoggedIn: false}));
    }
  };
  const renderPost = ({item}) => <PostContainer>
    
    <PostHeaderContainer>
      <PostProfilePhoto source={{uri: item.user.profilePhotoUrl}}/>

      <PostInfoContainer>
          <Text large>{item.user.username}</Text>
          <Text tiny color="#c1c3cc" margin="4px 0 0 0"> 
          {item.postedAt}
          </Text>
      </PostInfoContainer>

    </PostHeaderContainer>
    
    <Post>
      <Text medium>{item.post}</Text>
      <PostPhoto source={{uri: item.photoUrl}}/>

      <PostDetails>
          <PostLikes>
              <Ionicons name="heart-outline" size={30} color="#73788b"/>
              <Text medium margin="0 0 0 8px">{item.likes}</Text>
          </PostLikes>

        <PostComments>
          <Ionicons name="chatbubbles-outline" size={30} color="#73788b"/>
            <Text medium margin="0 0 0 8px">{item.comments}</Text>
        </PostComments>

      </PostDetails>
    </Post>
  </PostContainer>;
  return (
      <Container>
          <ProfilePhotoContainer>
            <ProfilePhoto source={user.profilePhotoUrl === "default" 
                                  ? require("../../assets/defaultProfilePhoto.png") 
                                  : {uri: user.profilePhotoUrl}}/>
                                  <Text large bold margin="16px 0 32px 0">{user.username}</Text>
          </ProfilePhotoContainer>
          

          <StatsContainer>
              <StatContainer>
                  <Text medium light>
                    21
                    </Text>
                  <Text small bold color="#c2c4cd">
                    Posts
                    </Text>
              </StatContainer>
              <StatContainer>
                  <Text medium light>
                    420
                    </Text>
                  <Text medium bold color="#c2c4cd">
                    Followers
                    </Text>
              </StatContainer>
              <StatContainer>
                  <Text medium light>
                    69
                    </Text>
                  <Text small bold color="#c2c4cd">
                    Following
                    </Text>
              </StatContainer>
          </StatsContainer>
          <FeedContainer>
        <Feed data={tempDataProfile} renderItem={renderPost} keyExtractor={item => item.id.toString()}/>
      </FeedContainer>
          <Logout onPress={logOut}>
            <Text medium bold top color="#23a8d9">Log out</Text>
          </Logout>
      </Container>
  );
};

const Container = styled.View`
  align-items: center;
  margin-top: 80px;
  flex: 1;

`;

const FeedContainer = styled.View`
  align-items: center;
  margin-top: -300px;
  flex: 1;  
`;
const Feed = styled.FlatList`

`;


const ProfilePhotoContainer = styled.View`
  shadow-opacity: 0.8;
  shadow-radius: 30px;
  shadow-color: #222222;
  margin-right: 200px;
`;

const ProfilePhoto = styled.Image`
  width: 110px;
  height: 110px;
  right: 10px;
  border-radius: 64px;
`;

const StatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: -20px 50px 0px
  flex: 1;
`;

const StatContainer = styled.View`
  align-items: center;
  flex: 1;
`;

const PostContainer = styled.View`
  margin: 16px 16px 0 16px;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 8px;
`;

const Post = styled.View`
  
`;

const PostHeaderContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
`;

const PostProfilePhoto = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

const PostInfoContainer = styled.View`
  flex: 1;
  margin: 0 16px;

`;

const PostPhoto = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 6px;
  margin-top: 8px;
`;

const PostDetails = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

const PostLikes = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PostComments = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
`;

const StatusBar = styled.StatusBar`

`;
const Logout = styled.TouchableOpacity`
  margin-top:10px;
  margin-bottom: 32px;
`;
