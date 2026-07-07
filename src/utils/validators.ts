export const isAllDocumentsUploaded = (documents: any) => {
  return (
    documents.aadhaar &&
    documents.pan &&
    documents.salarySlip &&
    documents.bankStatement
  );
};