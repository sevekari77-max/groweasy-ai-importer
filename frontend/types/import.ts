export interface PreviewRow {
  [key: string]: string;
}

export interface PreviewResponse {
  success: boolean;
  preview: {
    totalRows: number;
    previewRows: number;
    preview: PreviewRow[];
  };
}

export interface Lead {
  created_at: string;
  name: string;
  email: string;
  country_code: string;
  mobile_without_country_code: string;
  company: string;
  city: string;
  state: string;
  country: string;
  lead_owner: string;
  crm_status: string;
  crm_note: string;
  data_source: string;
  possession_time: string;
  description: string;
}

export interface ResultsData {
  imported: Lead[];
  skipped: Lead[];
  totalImported: number;
  totalSkipped: number;
}

export interface ConfirmResponse {
  success: boolean;
  data: ResultsData;
}