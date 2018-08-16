import { StyleSheet } from 'react-native'
export const hairlineWidth = StyleSheet.hairlineWidth
export default {
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.3,
    backgroundColor: '#000',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  body: {
    margin:20,
    backgroundColor:'transparent',
    alignSelf: 'flex-end',
    flex:1,
  },
  titleBox: {
    height: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  titleText: {
    color: '#757575',
    fontSize: 14
  },
  messageBox: {
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',

  },
  messageText: {
    color: '#9a9a9a',
    fontSize: 12
  },
  buttonBox: {
    height: 50,
    borderRadius:15,
    marginTop: hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 18
  },
  cancelButtonBox: {
    height: 40,
    marginTop:10,
    borderRadius:15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
}
