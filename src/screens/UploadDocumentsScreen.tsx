import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";

import UploadCard from "../components/UploadCard";
import PrimaryButton from "../components/PrimaryButton";
import ProgressBar from "../components/ProgressBar";

import {
  pickDocument,
  pickImageFromGallery,
  captureImage,
} from "../services/DocumentPickerService";

import { isAllDocumentsUploaded } from "../utils/validators";

export default function UploadDocumentsScreen({ navigation }: any) {
  const [documents, setDocuments] = useState<any>({
    aadhaar: null,
    pan: null,
    salarySlip: null,
    bankStatement: null,
  });

  const uploadedCount = Object.values(documents).filter(Boolean).length;
  const progress = (uploadedCount / 4) * 100;

  const selectImageDocument = (key: string, title: string) => {
    Alert.alert(title, "Choose upload option", [
      {
        text: "Camera",
        onPress: async () => {
          const file = await captureImage();
          if (file) {
            setDocuments((prev: any) => ({
              ...prev,
              [key]: file,
            }));
          }
        },
      },
      {
        text: "Gallery",
        onPress: async () => {
          const file = await pickImageFromGallery();
          if (file) {
            setDocuments((prev: any) => ({
              ...prev,
              [key]: file,
            }));
          }
        },
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };

  const selectFileDocument = async (key: string) => {
    const file = await pickDocument();

    if (file) {
      setDocuments((prev: any) => ({
        ...prev,
        [key]: file,
      }));
    }
  };

  const getFileName = (file: any) => {
    if (!file) return "";
    return file.name || file.fileName || "Uploaded File";
  };

  const continueToAnalysis = () => {
    navigation.navigate("AIAnalysis", { documents });
  };
    return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Upload Documents</Text>

      <Text style={styles.subtitle}>
        Upload all required documents for AI Loan Eligibility Analysis
      </Text>

      <ProgressBar progress={progress} />

      <Text style={styles.progressText}>
        {uploadedCount} of 4 Documents Uploaded
      </Text>

      <UploadCard
        icon="🪪"
        title="Aadhaar Card"
        subtitle="Upload Aadhaar Card"
        fileName={getFileName(documents.aadhaar)}
        onPress={() =>
          selectImageDocument(
            "aadhaar",
            "Upload Aadhaar Card"
          )
        }
      />

      <UploadCard
        icon="💳"
        title="PAN Card"
        subtitle="Upload PAN Card"
        fileName={getFileName(documents.pan)}
        onPress={() =>
          selectImageDocument(
            "pan",
            "Upload PAN Card"
          )
        }
      />

      <UploadCard
        icon="📄"
        title="Salary Slip"
        subtitle="Upload Salary Slip (PDF/Image)"
        fileName={getFileName(documents.salarySlip)}
        onPress={() =>
          selectFileDocument("salarySlip")
        }
      />

      <UploadCard
        icon="🏦"
        title="Bank Statement"
        subtitle="Upload Bank Statement (PDF)"
        fileName={getFileName(documents.bankStatement)}
        onPress={() =>
          selectFileDocument("bankStatement")
        }
      />

      <PrimaryButton
        title="Continue to AI Analysis"
        onPress={continueToAnalysis}
        disabled={!isAllDocumentsUploaded(documents)}
      />

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FC",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1565C0",
    marginTop: 20,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 8,
    marginBottom: 20,
    lineHeight: 22,
  },

  progressText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1565C0",
    marginBottom: 20,
    textAlign: "center",
  },
});