import { StyleSheet } from 'react-native';


export default StyleSheet.create({

    linearGradient: {
      flex: 1,
      justifyContent: 'center',
    },
  
    container: {
      flex:1,
      backgroundColor: '#5ABBA2'
    },
  
    header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    profileImageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      width: 150,
      height: 150,
      alignContent: 'flex-start',
      borderRadius: 200/2,
      marginTop: 20,
      marginBottom: 20
    },
  
    profilebutton: {
      alignContent: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      height:150,
      width: 150,
      borderRadius: 200/2,
      borderColor: 'white',
      backgroundColor: '#DDDDDD',
      marginTop: 20
      
    },
  
    footer: {
      flex: 2.5,
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      marginLeft: 5,
      marginRight: 5
      },
  
      inputTextBox: {
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        height: 50,
        width: 300
      },
  
      prepVideoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        height:150,
        width: 300,
        borderColor: 'blue',
        backgroundColor: '#DDDDDD',
        marginTop: 20,
        marginBottom: 20
      },
      videoask:{
        color: '#696969'
      },
      scroll: {
        //height: '70%',
        //width: '95%',
        //margin: 5,
        alignSelf: 'center',
        //padding: 20,
        //borderWidth: 5,
        //borderRadius: 5,
        //borderColor: 'black',
        //backgroundColor: 'lightblue'
      },
      contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'lightgrey',
        //paddingBottom: 50
      }
  
    
  });