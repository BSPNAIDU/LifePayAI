import { pick } from "@react-native-documents/picker";
import {
  launchCamera,
  launchImageLibrary,
} from "react-native-image-picker";

export async function pickDocument() {
  try {
    const [result] = await pick({
      allowMultiSelection: false,
    });

    return result;
  } catch (error) {
    return null;
  }
}

export async function pickImageFromGallery() {
  const result = await launchImageLibrary({
    mediaType: "photo",
    quality: 1,
  });

  if (result.assets && result.assets.length > 0) {
    return result.assets[0];
  }

  return null;
}

export async function captureImage() {
  const result = await launchCamera({
    mediaType: "photo",
    quality: 1,
  });

  if (result.assets && result.assets.length > 0) {
    return result.assets[0];
  }

  return null;
}