export interface DocumentType {
  idx: number;
  file: File;
}

export interface TemplateType {
  idx: number;
  uuid: number;
  doc: DocumentType;
}

export interface IFileType {
  id: number;
  object: File;
}
