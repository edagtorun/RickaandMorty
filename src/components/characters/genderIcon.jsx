import { Text } from "react-native";
import genderTypes from "../../utils/constants";
import Colors from "../../theme/colors";
import { Man, Woman, Command } from "iconsax-react-native";

const GenderIcon = ({gender, size}) =>{
  
    if(gender == genderTypes.MALE){
        return <Man size={size} color={Colors.BLACK}/>
    }
    if(gender == genderTypes.FEMALE){
        return <Woman size={size} color={Colors.BLACK}/>
    }
    if(gender == genderTypes.UNKNOWN){
        <Command size={size} color={Colors.BLACK}/>
    }
}

export default GenderIcon;