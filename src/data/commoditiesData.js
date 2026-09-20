export const COMMODITY_DATA = {
  coffee: {
    id: "coffee",
    name: "Specialty Arabica Coffee Beans",
    origin: "Origins: Yirgacheffe, Sidamo, Guji, Jimma (Ethiopia)",
    grade: "Grade 1 & Grade 2 Washed / Natural",
    desc: "World-class specialty Arabica coffee beans harvested from high-altitude origin regions (1,800m - 2,200m). Features distinct floral bergamot notes, bright citric acidity, and rich silky body.",
    table: [
      { param: "Moisture Content", spec: "10.0% - 11.5%", std: "ISO 6673" },
      { param: "Defect Count", spec: "Grade 1 (0-3 defects / 300g)", std: "SCA Specialty Standard" },
      { param: "Screen Size", spec: "14 - 17 Mesh", std: "Sieve Analysis" },
      { param: "Cupping Score", spec: "88 - 92+ Points", std: "Q-Grader Certified" }
    ],
    labels: ["Cupping Score / 10", "Purity %", "Screen Size", "Moisture (Inv)", "Flavor Intensity"],
    values: [9.2, 9.8, 8.5, 9.0, 9.5],
    baselines: [7.5, 8.5, 7.0, 7.5, 7.0]
  },
  sesame: {
    id: "sesame",
    name: "Humera & Wollega Sesame Seeds",
    origin: "Origins: Humera, Wollega (Ethiopia)",
    grade: "White / Natural High-Oil Grade",
    desc: "Renowned globally for exceptionally high oil content (≥ 52%), sweet nutty taste, and snow-white appearance. Ideal for tahini production, confectionery, and oil extraction.",
    table: [
      { param: "Purity Level", spec: "99.5% Minimum Machine Cleaned", std: "ASTA Cleaned" },
      { param: "Oil Content", spec: "51.0% - 54.0% Minimum", std: "Soxhlet Method" },
      { param: "Moisture Content", spec: "≤ 6.0% Maximum", std: "ISO 665" },
      { param: "FFA (Free Fatty Acids)", spec: "≤ 1.5% Maximum", std: "Chemical Analysis" }
    ],
    labels: ["Purity %", "Oil Content %", "Color Whiteness", "Moisture (Inv)", "FFA Control"],
    values: [9.9, 9.4, 9.5, 9.2, 9.0],
    baselines: [9.0, 8.0, 7.5, 7.5, 7.0]
  },
  turmeric: {
    id: "turmeric",
    name: "Tepi Turmeric & Tropical Spices",
    origin: "Origins: Tepi & Southwest Forest Origins",
    grade: "Finger Select & High Curcumin Powder",
    desc: "Deep orange-yellow spice fingers and ground powder characterized by high volatile oils, pungent aroma, and rich natural curcumin content.",
    table: [
      { param: "Curcumin Content", spec: "4.5% - 5.5% Minimum", std: "HPLC Testing" },
      { param: "Moisture Content", spec: "≤ 10.0% Maximum", std: "ASTA Method 2.0" },
      { param: "Volatile Oils", spec: "≥ 3.5% Minimum", std: "ISO 6571" },
      { param: "Ethylene Oxide (EtO)", spec: "Absent / ETO-Free (EU Compliant)", std: "GC-MS/MS" }
    ],
    labels: ["Curcumin %", "Volatile Oils", "Purity %", "Moisture (Inv)", "Sterility"],
    values: [9.2, 8.8, 9.6, 9.0, 9.8],
    baselines: [7.0, 6.5, 8.5, 7.5, 8.0]
  },
  pulses: {
    id: "pulses",
    name: "Kabuli Chickpeas & Red Kidney Beans",
    origin: "Origins: Shoa & Rift Valley Agricultural Zones",
    grade: "Machine Cleaned & Sortex Quality",
    desc: "Uniform size, high-protein pulses processed using advanced optical sorting equipment to eliminate foreign material, discoloration, and defects.",
    table: [
      { param: "Purity", spec: "99.0% Sortex Cleaned", std: "Optical Sorter" },
      { param: "Count Size", spec: "7mm - 9mm (Kabuli Chickpeas)", std: "Caliper Measure" },
      { param: "Admixture", spec: "≤ 0.5% Maximum", std: "Visual Defect Count" },
      { param: "Moisture Content", spec: "≤ 12.0% Maximum", std: "ISO Standard" }
    ],
    labels: ["Sortex Purity", "Size Uniformity", "Protein Content", "Moisture (Inv)", "Defect Control"],
    values: [9.7, 9.0, 9.2, 8.8, 9.5],
    baselines: [8.5, 7.5, 8.0, 7.5, 8.0]
  }
};
