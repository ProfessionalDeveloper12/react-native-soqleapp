import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    containerStyle:{
        width:'100%',
    },
    header:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        backgroundColor:'#56478c',
        paddingHorizontal:10,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerText:{
        color:'#fff',
        width:'80%',
        fontSize:18
    },
    content:{
        backgroundColor:'#fff',
        paddingHorizontal:10,
        paddingVertical:10,
        paddingBottom:20,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    contentText:{
        fontSize:18
    },
    headerIcon:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:'#fff',
        color:'#ff0000',
        alignItems:'center',
        justifyContent:'center',
    },
});