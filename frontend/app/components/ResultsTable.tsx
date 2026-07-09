"use client";

import {AlertTriangle,Building2,CheckCircle,Mail,Phone,User,} from "lucide-react";
import { ConfirmResponse } from "../../types/import";

interface ResultsTableProps {
  result: ConfirmResponse | null;
}

export default function ResultsTable({
  result,
}: ResultsTableProps) {
  if (!result) return null;

  const { data } = result;

  return (
    <div className="mt-10 w-full max-w-6xl">
      {/* Success Banner */}
      <div className="mb-8 rounded-2xl border border-green-700 bg-green-900/20 p-6">
        <div className="flex items-center gap-3">
          <CheckCircle
            className="text-green-400"
            size={28}
          />

          <div>
            <h2 className="text-2xl font-bold">
              AI Import Completed Successfully
            </h2>

            <p className="mt-1 text-gray-300">
              Your CSV has been processed and converted into CRM-ready leads.
            </p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-green-700 p-6 shadow-lg">
          <h3 className="text-lg font-semibold">
            Imported Leads
          </h3>

          <p className="mt-3 text-5xl font-bold">
            {data.totalImported}
          </p>
        </div>

        <div className="rounded-2xl bg-yellow-600 p-6 shadow-lg">
          <h3 className="text-lg font-semibold">
            Skipped Leads
          </h3>

          <p className="mt-3 text-5xl font-bold">
            {data.totalSkipped}
          </p>
        </div>
      </div>

      {/* Imported Leads */}
      <div className="overflow-hidden rounded-2xl border border-gray-700">
        <div className="bg-neutral-800 px-6 py-4">
          <h3 className="text-xl font-semibold">
            Imported Leads
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-neutral-900">
              <tr>
                <th className="px-5 py-4 text-left">
                  <div className="flex items-center gap-2">
                    <User size={18} />
                    Name
                  </div>
                </th>

                <th className="px-5 py-4 text-left">
                  <div className="flex items-center gap-2">
                    <Mail size={18} />
                    Email
                  </div>
                </th>

                <th className="px-5 py-4 text-left">
                  <div className="flex items-center gap-2">
                    <Building2 size={18} />
                    Company
                  </div>
                </th>

                <th className="px-5 py-4 text-left">
                  <div className="flex items-center gap-2">
                    <Phone size={18} />
                    Phone
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {data.imported.map((lead, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-700 transition hover:bg-neutral-800"
                >
                  <td className="px-5 py-4">
                    {lead.name}
                  </td>

                  <td className="px-5 py-4">
                    {lead.email}
                  </td>

                  <td className="px-5 py-4">
                    {lead.company}
                  </td>

                  <td className="px-5 py-4">
                    {lead.mobile_without_country_code}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Skipped Leads */}
      {data.totalSkipped > 0 && (
        <div className="mt-8 rounded-2xl border border-yellow-600 bg-yellow-900/20 p-6">
          <div className="flex items-center gap-3">
            <AlertTriangle
              className="text-yellow-400"
              size={24}
            />

            <div>
              <h3 className="text-xl font-bold">
                Skipped Leads
              </h3>

              <p className="mt-1 text-gray-300">
                {data.totalSkipped} lead(s) were skipped during processing.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}