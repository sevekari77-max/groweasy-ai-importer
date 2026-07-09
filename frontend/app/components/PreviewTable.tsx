"use client";

import { useState } from "react";
import { ConfirmResponse, PreviewResponse } from "../../types/import";
import ResultsTable from "./ResultsTable";
import { API_URL } from "../../lib/api";

interface PreviewTableProps {
  preview: PreviewResponse;
}

export default function PreviewTable({
  preview,
}: PreviewTableProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ConfirmResponse | null>(null);

  const handleConfirm = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/import/confirm`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: preview.preview.preview,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Import failed");
      }

      const data = await response.json();

      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Import failed.");
    } finally {
      setLoading(false);
    }
  };

  const rows = preview.preview.preview;

  if (rows.length === 0) {
    return null;
  }

  const headers = Object.keys(rows[0]);

  return (
    <div className="mt-6 w-full max-w-5xl">
      <h2 className="text-xl font-semibold mb-4">
        CSV Preview
      </h2>

      <p>
        <strong>Total Rows:</strong> {preview.preview.totalRows}
      </p>

      <p className="mb-4">
        <strong>Preview Rows:</strong> {preview.preview.previewRows}
      </p>

      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-black">
              {headers.map((header) => (
                <th
                  key={header}
                  className="border px-4 py-2 text-left"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {headers.map((header) => (
                  <td
                    key={header}
                    className="border px-4 py-2"
                  >
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={handleConfirm}
        disabled={loading}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:bg-gray-500"
      >
        {loading ? "🤖 AI Processing..." : "🤖 Process with AI"}
      </button>

      <ResultsTable result={result} />

    </div>
  );
}