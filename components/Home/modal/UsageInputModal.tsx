import {
  Button,
  CheckIcon,
  FormControl,
  Input,
  KeyboardAvoidingView,
  Modal,
  Select,
} from "native-base";
import React from "react";
import { Platform } from "react-native";

export default function UsageInputModal({
  inputprops,
}: {
  inputprops: Inputprops;
}) {
  const onfocus = { borderColor: "blue.500", bg: "blue.100" };

  return (
    <Modal
      isOpen={inputprops.ModalVisible}
      onClose={() => inputprops.setModalVisible(false)}
      initialFocusRef={inputprops.initialRef}
      finalFocusRef={inputprops.finalRef}
    >
      <Modal.Content>
        {/* <Modal.CloseButton /> */}
        <Modal.Header>Enter Your Usage</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Usage in Kyats</FormControl.Label>
            <Input
              fontSize={15}
              ref={inputprops.initialRef}
              _focus={onfocus}
              keyboardType="numeric"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Select Category</FormControl.Label>
            <Select
              selectedValue={"t"}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              mt={1}
              onValueChange={(itemValue) => {}}
            >
              <Select.Item label="test" value="t" />
              <Select.Item label="test" value="t" />
              <Select.Item label="test" value="t" />
            </Select>
            {/* <Input
              fontSize={15}
              ref={inputprops.initialRef}
              _focus={onfocus}
              keyboardType="numeric"
            /> */}
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                inputprops.setModalVisible(false);
              }}
            >
              Cancel
            </Button>
            <Button
              bg={"blue.500"}
              onPress={() => {
                inputprops.setModalVisible(false);
              }}
            >
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}

interface Inputprops {
  ModalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  initialRef: React.RefObject<any>;
  finalRef: React.RefObject<any>;
}
