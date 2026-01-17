import { Pool } from 'pg';

// Database connection pool
const pool = new Pool({
  host: process.env.DB_HOST || '46.224.211.168',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'stagemarkt',
  user: process.env.DB_USER || 'stagemarkt',
  password: process.env.DB_PASSWORD || 'stagemarkt',
  ssl: false,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export default pool;

// Type definitions based on SCHEMA.md
export interface Internship {
  id: string;
  aantal: number;
  contactpersoon: string | null;
  emailadres: string | null;
  telefoon: string | null;
  omschrijving: string | null;
  titel: string | null;
  wervende_titel: string | null;
  vaardigheden: string | null;
  aanbieden: string | null;
  website: string | null;
  // Address
  adres_huisnummer: string | null;
  adres_plaats: string | null;
  adres_postcode: string | null;
  adres_straat: string | null;
  adres_lat: number | null;
  adres_lon: number | null;
  // Organization
  organisatie_id: string | null;
  organisatie_naam: string | null;
  organisatie_telefoon: string | null;
  organisatie_email: string | null;
  organisatie_website: string | null;
  organisatie_logo: string | null;
  organisatie_grootte: string | null;
  organisatie_leerbedrijf_id: string | null;
  organisatie_omschrijving: string | null;
  // JSON fields
  kerntaken: unknown;
  kenmerken: unknown;
  media: unknown;
  vergoedingen: unknown;
  // Financials
  bedrag_van: number | null;
  bedrag_tot: number | null;
  // Qualification
  kwalificatie_niveau: string | null;
  kwalificatie_crebocode: string | null;
  // Dates
  startdatum: string | null;
  einddatum: string | null;
  gewijzigd_datum: string | null;
  // Other
  leerweg: string | null;
  study_description: string | null;
  dagen_per_week: string | null;
}
