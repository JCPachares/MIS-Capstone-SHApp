import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default StyleSheet.create({
    mainContainer: {
        backgroundColor: 'rgb(256,256,256)',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    name: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    lineStyle: {
        borderWidth: 0.5,
        alignSelf: 'center',
        borderColor:'black',
        width: '75%',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        height: '75%',
        width: '22.5%',
    },
    bottomContainer:{
        flexDirection:'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        alignItems: 'center',
        height: '7.5%',
        width: '85%',
    },
    buttonCont: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        height: '7.5%',
        width: '75%',
        margin: '2%',
    },
    button: {
        backgroundColor: 'grey',
    },
    blueButton: {
        backgroundColor: 'rgb(137,207,240)',
    },
    greenButton: {
        backgroundColor: 'rgb(176,191,26)',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonBottom: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
     topBar: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '17.5%',
        width: "94%",
        marginTop: "1%",
        marginBottom: "1%",
    },
    pbContainer: {
        alignItems: 'flex-start',
        flex: 1/8,
        width: undefined,
        height: "48%",
        justifyContent: 'center',
        resizeMode: 'contain',
        marginRight: "3%",
    },
    hamburger: {
        alignItems: 'flex-end',
        flex: 1/8,
        width: undefined,
        height: "42%",
        justifyContent: 'center',
        resizeMode: 'contain',
        marginLeft: "3%",
    },
    ualogo: {
        width: undefined,
        height: "75%",
        flex: 5/8,
        resizeMode: 'contain',
    },    
  });
  