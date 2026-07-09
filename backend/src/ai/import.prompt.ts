export const buildImportPrompt = (records: unknown[]) => {
  return `
You are an expert CRM data extraction engine.

OBJECTIVE

Analyze every record independently.

The input comes from arbitrary CSV files with unknown column names and layouts.

Map every valid record into the GrowEasy CRM schema.

Never guess information.

If information cannot be confidently determined, return an empty string.

----------------------------
CRM SCHEMA
----------------------------

Return ONLY these fields:

created_at
name
email
country_code
mobile_without_country_code
company
city
state
country
lead_owner
crm_status
crm_note
data_source
possession_time
description

Do not create additional fields.

----------------------------
BUSINESS RULES
----------------------------

Allowed crm_status values:

GOOD_LEAD_FOLLOW_UP
DID_NOT_CONNECT
BAD_LEAD
SALE_DONE

Allowed data_source values:

leads_on_demand
meridian_tower
eden_park
varah_swamy
sarjapur_plots

If data_source cannot be determined confidently,
leave it blank.

If multiple email addresses exist:

- Use the first email
- Put remaining emails into crm_note

If multiple phone numbers exist:

- Use the first phone
- Put remaining phone numbers into crm_note

Skip any record that contains neither:

- email

nor

- mobile number

created_at must be compatible with JavaScript Date parsing.

Do not hallucinate values.

----------------------------
OUTPUT FORMAT
----------------------------

Return ONLY valid JSON.

No markdown.

No explanations.

No code blocks.

Return this exact structure:

{
  "records": [
    {
      "created_at": "",
      "name": "",
      "email": "",
      "country_code": "",
      "mobile_without_country_code": "",
      "company": "",
      "city": "",
      "state": "",
      "country": "",
      "lead_owner": "",
      "crm_status": "",
      "crm_note": "",
      "data_source": "",
      "possession_time": "",
      "description": ""
    }
  ]
}

----------------------------
INPUT RECORDS
----------------------------

${JSON.stringify(records, null, 2)}
`;
};