"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import "./table.css";

export default function Page(): React.ReactElement {
  const [rows, setRows] = useState(5);

  return (
    <div className="min-h-max overflow-x-scroll">
      <Label htmlFor="rowInput">Number of Rows</Label>
      <Input
        id="rowInput"
        min={0}
        type="number"
        onChange={(e) => {
          setRows(parseInt(e.target.value));
        }}
        value={rows}
        className="mb-6 mt-1 bg-background shadow"
      />
      <table>
        <tbody>
          <tr className="key">
            <td rowSpan={2}>Check Points</td>
            <td>Ident.</td>
            <td rowSpan={3}>Course</td>
            <td rowSpan={3}>Altitude</td>
            <td colSpan={2}>Wind</td>
            <td>CAS</td>
            <td rowSpan={2}>TC</td>
            <td rowSpan={2}>TH</td>
            <td rowSpan={2}>MH</td>
            <td rowSpan={3}>CH</td>
            <td>Dist.</td>
            <td>GS</td>
            <td colSpan={2}>Time Off</td>
            <td>GPH</td>
          </tr>
          <tr className="key">
            <td>Freq.</td>
            <td>Dir.</td>
            <td>Vel.</td>
            <td contentEditable></td>
            <td>Leg</td>
            <td>Est.</td>
            <td>ETE</td>
            <td>ETA</td>
            <td>Fuel</td>
          </tr>
          <tr>
            <td contentEditable rowSpan={2}></td>
            <td contentEditable></td>
            <td className="key" colSpan={2}>
              Temp
            </td>
            <td className="key">TAS</td>
            <td className="key">WCA</td>
            <td className="key">Var.</td>
            <td className="key">Dev.</td>
            <td className="key">Rem.</td>
            <td className="key">Act.</td>
            <td className="key">ATE</td>
            <td className="key">ATA</td>
            <td className="key">Rem.</td>
          </tr>
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- It's just to iterate over */}
          {[...Array(isNaN(rows) ? 1 : rows)].map((_, i) => (
            <FlightRow key={i} />
          ))}
          <tr>
            <td contentEditable></td>
            <td className="key text-right" colSpan={9}>
              Totals:
            </td>
            <td contentEditable></td>
            <td className="key"></td>
            <td contentEditable></td>
            <td className="key"></td>
            <td contentEditable></td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  function FlightRow() {
    return (
      <>
        <tr>
          <td contentEditable></td>
          <td contentEditable rowSpan={2}></td>
          <td contentEditable rowSpan={2}></td>
          <td contentEditable></td>
          <td contentEditable></td>
          <td contentEditable rowSpan={2}></td>
          <td contentEditable></td>
          <td contentEditable></td>
          <td contentEditable></td>
          <td contentEditable rowSpan={2}></td>
          <td contentEditable></td>
          <td contentEditable></td>
          <td contentEditable></td>
          <td contentEditable></td>
          <td contentEditable></td>
        </tr>
        <tr>
          <td contentEditable rowSpan={2}></td>
          <td contentEditable></td>
          <td contentEditable colSpan={2}></td>
          <td contentEditable></td>
          <td contentEditable></td>
          <td contentEditable></td>
          <td contentEditable></td>
          <td contentEditable></td>
          <td contentEditable></td>
          <td contentEditable></td>
          <td contentEditable></td>
        </tr>
      </>
    );
  }
}
