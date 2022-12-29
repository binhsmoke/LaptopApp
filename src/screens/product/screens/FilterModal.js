import React from "react";
import { View, Text, Animated, ScrollView, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { Colors } from "react-native-paper";
const FilterModal = ({ isVisible, onClose }) => {
    const [showFilterModal, setShowFilterModal] = React.useState(isVisible);
    // React.useEffect(() => {
    //     if (!showFilterModal) {

    //         onClose()
    //     }
    // }, [showFilterModal])
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}>
            <View style={{ flex: 1, backgroundColor: Colors.transparent }}>
                <TouchableWithoutFeedback
                    onPress={() => setShowFilterModal(false)}
                >
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }}
                    />
                </TouchableWithoutFeedback>
            </View>
        </Modal>
    )
}
export default FilterModal;