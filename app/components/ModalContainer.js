import { useEffect, useState } from "react";
import { Modal, View, Image } from "react-native";

const ModalContainer = ({ show, children, onRequestClose, alignItems, height }) => {
  
  const [close, setClose] = useState(false)
  return (
    <Modal animationType="slide" transparent={true} visible={show} onRequestClose={close}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.3)",
          justifyContent: "flex-end",
        }}


      >
        <View
          style={{
            backgroundColor: "white",
            borderTopStartRadius: 30,
            borderTopEndRadius: 30,
            padding: 20,
            height: height || 487,
            alignItems: alignItems,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
};
export default ModalContainer;
